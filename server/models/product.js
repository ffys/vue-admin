const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  productid: {
    type: Number,
    unique: true, //不可重复约束
    require: true //不可为空约束
  },
  productname: {
    type: String,
    require: true //不可为空约束
  },
  productcontent: {
    type: String
  }
});


module.exports = mongoose.model('Product', UserSchema);

