var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

mongoose.connect('mongodb://127.0.0.1:27017/dumall');

mongoose.connection.on('connected', function () {
  console.log('MongoDB connected successful');
});

mongoose.connection.on('disconnected', function () {
  console.log('MongoDB is disconnected');
});

mongoose.connection.on('erro', function () {
  console.log('MongoDB connected failed');
});

router.get('/', function (req, res, next) {
  console.log(`进程${process.pid}正在提供服务...`);
  const productId = req.query.productId
  if (productId) {
    Goods.findOne({
      "productId": productId.toString()
    }, function (err, doc) {
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
  } else {
    Goods.find({}, function (err, doc) {
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
  }
});

module.exports = router;