var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('webhook HIHI');
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.send('webhook HIHI');
});

module.exports = router;
