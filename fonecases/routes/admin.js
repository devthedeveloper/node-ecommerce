var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/generatecrud',function(req,res,next){
	res.render('admin/crud/generate',{title:'crud'})
})

router.post('/generatecrud',function(req,res,next){
	var modelname = req.body.model;
	console.log(modelname)
	
})
		module.exports = router;