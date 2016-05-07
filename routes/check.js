 var express = require('express');
var router = express.Router();

var Url = require('../app/models/url');
var User = require('../app/models/user')
var mongoose = require('mongoose');


router.get('/',function(req,res){


  Url.find({done:false},function(err,docs){


      if(docs.length == 0)
      {
        return res.json({success:false,result:docs});
      }
        return res.json({success:true,result:docs});


  });
});

router.post('/',function(req,res){
  var url = new Url({
    url:req.body.url,
    user:req.decoded
  });
  var id = req.decoded;

  url.save(function(err,doc){
    User.find({'_id':mongoose.Types.ObjectId(id)},function(err,user){
      var io = req.io
      var uname = user[0].username;
      var sockid = doc.socketid;

      io.sockets.emit(uname,{result:doc}); // how?

    });
      return res.json({success:true});
    });
});
router.post('/pc',function(req,res){
  var url = new Url({
    url:req.body.url,
    user:req.decoded
  });
  var id = req.decoded;

  url.save(function(err,doc){
    User.find({'_id':mongoose.Types.ObjectId(id)},function(err,user){
      var io = req.io
      var uname = user[0].username;
      var sockid = doc.socketid;

      io.sockets.emit(uname+"_android",{result:doc}); // how?

    });
      return res.json({success:true});
    });
});

router.put('/',function(req,res){


  var id = req.body.id
  Url.remove({'_id':mongoose.Types.ObjectId(id)},function(err,doc){
    return res.json({success:true});
  });
})
module.exports = router;
