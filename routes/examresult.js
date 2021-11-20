var express = require('express');
var router = express.Router();
const resultController = require('../controllers/result.controller');


router.get('/', function(req, res, next) {
  res.send('respond with a exam result resource');
});

router.get('/getresult', resultController.getResult);

module.exports = router;
