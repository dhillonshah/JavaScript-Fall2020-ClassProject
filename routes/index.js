var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Task Manager' });
});

/* GET about page. */

router.get('/about', function (req, res, next) {
    res.render('about', { message: 'Content from the controller goes here' })
});

module.exports = router;
