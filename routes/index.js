var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index',
    {
      page: {
        title: 'Onkisko',
        autor: {
          name: 'De La',
          surname: 'Pablo Hera'
        }
      }
    });
});

module.exports = router;
