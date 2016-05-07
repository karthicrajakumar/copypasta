var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CopySchema = new Schema({
  text : {type:String},
  done:{type:Boolean,default:false},
  user:{type:String}
});

module.exports = mongoose.model('Copy',CopySchema);
