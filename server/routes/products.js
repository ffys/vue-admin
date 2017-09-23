const express = require('express');
const Product = require('../models/product');
const config = require('../config');
const router = express.Router();


//注册账户
router.post('/addproduct',(req,res) => {
  if(!req.body.productname || !req.body.productid){
    res.json({success: false, message: '请输入产品名称ID！'});
  }else{
    var newProduct = new Product({
      productid: req.body.productid,
      productname: req.body.productname,
      productcontent: req.body.productcontent
    });
    //保存用户账号
    newProduct.save((err) => {
      if(err){
        console.log(newProduct);
        return res.json({success: false, message:'创建产品失败！'+err});
      }
      res.json({success: true, message: '成功创建新产品！'});
    })
  }
});

module.exports = router;
