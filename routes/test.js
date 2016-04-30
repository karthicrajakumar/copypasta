
var express = require('express');
var router = express.Router();




router.get('/',function(req,res){
	var io = req.io

  console.log("PUT OK!");

    io.sockets.to(req.id).emit('update',{id:req.id}); // how?
    res.json({result: "update sent over IO"});

})
module.exports = router;
