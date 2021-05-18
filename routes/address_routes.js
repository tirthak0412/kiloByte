var express = require('express');
var router = express.Router();
var address = require('../models/address_model');

router.get('/',function(req,res,next){
    address.getAllAddress(function(err,rows){
        if(err){
            res.json(err)
        }else{
            res.json(rows)
        }
    })
})

router.post('/',function(req,res,next){
    address.addAddress(req.body,function(err,rows){
        if(err){
            res.json(err)
        }else{
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
        }
    })
})

module.exports=router;