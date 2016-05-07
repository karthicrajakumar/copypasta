var express = require('express');
var router = express.Router();

var Url = require('../app/models/url');
var Copy = require('../app/models/copy')
var mongoose = require('mongoose');


router.get('/',function(req,res){


  Copy.find({done:false},function(err,docs){


      if(docs.length == 0)
      {
        return res.json({success:false,result:docs});
      }
        return res.json({success:true,result:docs});


  });
});

router.post('/',function(req,res){
  var copy = new Copy({
    text:req.body.text,
    req.id
  });
  var id = req.id;
  copy.save(function(err,doc){
    User.find({'_id':mongoose.Types.ObjectId(id)},function(err,user){
      var io = req.io
      var uname = user[0].username;
      var sockid = doc.socketid;

      io.sockets.emit(uname+"_copy",{result:doc}); // how?

    });
      return res.json({success:true});
    });
})
router.post('/pc',function(req,res){
  var copy = new Copy({
    text:req.body.text,
    user:req.id
  });
  var id = req.id;
  copy.save(function(err,doc){
    User.find({'_id':mongoose.Types.ObjectId(id)},function(err,user){
      var io = req.io
      var uname = user[0].username;
      var sockid = doc.socketid;

      io.sockets.emit(uname+"_android_copy",{result:doc}); // how?

    });
      return res.json({success:true});
    });
})



router.put('/',function(req,res){
  var id = req.body.id
  Copy.remove({'_id':mongoose.Types.ObjectId(id)},function(err,doc){
    return res.json({success:true});
  });
})
module.exports = router;
