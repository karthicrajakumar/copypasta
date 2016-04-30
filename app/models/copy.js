var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CopySchema = new Schema({
  text : {type:String},
  done:{type:Boolean,default:false}
});

module.exports = mongoose.model('Copy',CopySchema);
