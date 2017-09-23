module.exports = {
  'secret': 'YCPART123456',  //json web token 加密密匙设置
  'database': 'mongodb://127.0.0.1:27017/admin' ,//填写本地自己的 mongodb 连接地址，admin为数据表名
  'tokentime': 10080 //token到期时间设置
}
