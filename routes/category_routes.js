var express = require('express');
var router = express.Router();
var category = require('../models/category_model');

router.get('/',function(req,res,next){
    category.getAllCategory(function(err,rows){
        if(err){
            res.json(err)
        }else{
            res.json(rows)
        }
    })
})

router.post('/',function(req,res,next){
    category.addCategory(req.body,function(err,rows){
        if(rows.affectedRows == 1){
            let item={
                message:"Item Added SuccessFully",
            }
            res.json(item)
        }else{
            let item={
                message:"UnSuccessful"
            }
            res.json(item)
        }
    })
})

module.exports=router;