const express = require("express");
const routes = require('./server/routes/');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');

const env = process.env.NODE_ENV || 'development';
console.log("Node env: " + env);

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
app.use('/api', router);

/** start server */
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});