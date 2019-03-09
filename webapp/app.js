const express = require("express");
const routes = require('./server/routes/');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
var querystring = require('querystring');
var http = require('https');

const env = process.env.NODE_ENV || 'development';
console.log("Node env: " + env);
const Linkedin = require('node-linkedin')('779tep39zy800c', 'lercZDInKGtEllrH', 'http://localhost:5000/auth');

const app = express();
const router = express.Router();

let port = process.env.PORT || 5000;

/** set up routes {API Endpoints} */
routes(router);

//gzip client js and css
app.use(compression());

/** set up middlewares */
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use('/api', router);

// app.get('/oauth/linkedin', function(req, res) {
//   // This will ask for permisssions etc and redirect to callback url.
//   console.log("we are here")
//   Linkedin.auth.authorize(res, ['r_basicprofile'], '32323412332');
// });

// app.get('/oauth/linkedin/callback', function(req, res) {
//   console.log("req state: " + req.query.state)
// //  console.log("req code: " + JSON.parse(req.header("Authorization")))
//   Linkedin.auth.getAccessToken(res, req.query.code, req.query.state, function(err, results) {
//       if ( err )
//           return console.error(err);

//       /**
//        * Results have something like:
//        * {"expires_in":5184000,"access_token":". . . ."}
//        */

//       console.log(results);
//       return res.send(results);
//   });
// });

app.get('/fetchData', function(req, res) {
  var token = req.query.token;
  var linkedin = Linkedin.init(token);
  linkedin.people.me(function(err, $in) {
    // Loads the profile of access token owner.
    res.send($in)
});

});

app.get('/auth', function (req, res) {
  // This is the redirect URI which linkedin will call to and provide state and code to verify
  /**
   *
   * Attached to the redirect_uri will be two important URL arguments that you need to read from the request:

   code — The OAuth 2.0 authorization code.
   state — A value used to test for possible CSRF attacks.
   */


  //TODO: validate state here to secure against CSRF
  var error = req.query.error;
  var error_description = req.query.error_description;
  var state = req.query.state;
  var code = req.query.code;
  if (error) {
      next(new Error(error));
  }
  /**
   *
   * The code is a value that you will exchange with LinkedIn for an actual OAuth 2.0 access
   * token in the next step of the authentcation process.  For security reasons, the authorization code
   * has a very short lifespan and must be used within moments of receiving it - before it expires and
   * you need to repeat all of the previous steps to request another.
   */
  //once the code is received handshake back with linkedin to send over the secret key
  handshake(req.query.code, res);
})

function handshake(code, ores) {
  const OauthParams = {
    "redirect_uri": "http://localhost:5000/auth",
    "client_id": "779tep39zy800c",
    "client_secret":"lercZDInKGtEllrH"
  }
  //set all required post parameters
  var data = querystring.stringify({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: OauthParams.redirect_uri,//should match as in Linkedin application setup
      client_id: OauthParams.client_id,
      client_secret: OauthParams.client_secret// the secret
  });

  var options = {
      host: 'www.linkedin.com',
      path: '/oauth/v2/accessToken',
      protocol: 'https:',
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(data)
      }
  };
  
  var req = http.request(options, function (res) {
       var data = '';
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          data += chunk;

      });
      res.on('end', function () {
          //once the access token is received store in DB
          // insertTodb(JSON.parse(data), function (id) {
          //     //need to find better way and proper authetication for the user
          //     ores.redirect('http://localhost:3000/dashboard/' + id);
          // });
          console.log(data)
          ores.redirect('http://localhost:3000/logged?token=' + JSON.parse(data).access_token);
      });
      req.on('error', function (e) {
          console.log("problem with request: " + e.message);
      });

  });
  req.write(data);
  req.end();


}

/** start server */
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});