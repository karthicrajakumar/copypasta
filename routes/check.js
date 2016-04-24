var express = require('express');
var router = express.Router();

var Url = require('../app/models/url');
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
    url:req.body.url
  });
  url.save();
  return res.json({success:true});
})


router.put('/',function(req,res){
  var id = req.body.id
  Url.remove({'_id':mongoose.Types.ObjectId(id)},function(err,doc){
    return res.json({success:true});
  });
})
module.exports = router;
