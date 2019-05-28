var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var homeImg = require('../models/homeImg');

mongoose.connect('mongodb://127.0.0.1:27017/dumall');

router.get('/', function (req, res, next) {
  console.log(`进程${process.pid}正在提供服务...`);
  homeImg.find({}, function (err, doc) {
    if (err) {
      res.json({
        code: 500,
        msg: err.message
      });
    } else {
      res.json({
        code: 200,
        msg: 'success',
        data: {
          count: doc.length,
          list: doc
        }
      });
    }
  });
});

module.exports = router;