let { PythonShell } = require('python-shell')

module.exports = {
  getRecommendations: (req, res, next) => {
    let { candidateData } = req.body;
    var options = {
      mode: 'text',
      // make sure this is your local path to Python
      pythonPath: '/usr/local/bin/python',  
      pythonOptions: ['-u'],
      scriptPath: process.cwd() + '/server/controllers/python',
      args: ['argument1']
    };

    console.log("mydir: " + process.cwd());

    PythonShell.run('Main.py', options, function (err, result) {
		console.log("here? ")
      if (err) {
		console.log(err)
        res.status(500).send({"Error": "Error with python"})
      } else {
        console.log('finished: ' + result);
        res.status(200).send(result)
      }
      
    });
  }
};