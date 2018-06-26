var express = require('express');
var request = require("request");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var options = { method: 'GET',
  url: 'http://35.240.162.75:8080/api/json',
  qs: { tree: 'jobs[url,name,color]' },
  headers: 
   { 'Postman-Token': '9590189d-40b9-43ac-aa2c-836fffc01dd9',
     'Cache-Control': 'no-cache',
     Authorization: 'Basic ZHVuZ3RhbjozYTM4NmU0ZmExN2UwOTczYTQ2ZDg1YTFiZjY4OWVkOA==' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  body = JSON.parse(body);
  let jobs = [];
  for (let i = 0; i < body.jobs.length; i++) {
    const job = body.jobs[i];
    if(job.color === 'notbuilt') {
      job.status = `<span class="tag is-warning">Không build</span>`;
    } else if(job.color === 'red') {
      job.status = `<span class="tag is-danger">Build không thành công</span>`;;
    } else if(job.color === 'blue') {
      job.status = `<span class="tag is-success">Build thành công</span>`;
    }
    jobs.push(job);
  }
  res.render('index', {
    title : 'Jenkins Webhook',
    jobs : jobs
  });
});

  
});

module.exports = router;
