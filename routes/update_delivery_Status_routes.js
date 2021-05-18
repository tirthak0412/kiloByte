var express=require('express');
var router=express.Router();
var order=require('../models/order_model');

router.post('/',function(req,res,next){
    order.updateOrderDeliveryStatus(req.body,function(err,rows){
        if(err){
            res.json(err);
        }else{
            if(rows.affectedRows > 0){
                let item={
                    message:"Item Updated SuccessFully",
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