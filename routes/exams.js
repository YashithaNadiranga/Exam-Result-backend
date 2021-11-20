var express = require('express');
const examController = require('../controllers/exam.controller');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('respond with a Exams resource');
});

router.post('/add', examController.register);

router.get('/get', examController.getExams);

router.get('/getename', examController.getExamsName);

module.exports = router;
