var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UrlSchema = new Schema({
  url : {type:String},
  done:{type:Boolean,default:false},
  user: {type:String}
});

module.exports = mongoose.model('Url',UrlSchema);
