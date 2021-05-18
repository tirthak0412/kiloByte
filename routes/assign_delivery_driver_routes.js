var express=require('express');
var router=express.Router();
var order=require('../models/order_model');
var order_details=require('../models/order_details_model');

router.post('/',function(req,res,next){
    order.assignDeliveryPartener(req.body,function(err,rows){
        if(err){
            res.json(err);
        }else{
            order_details.updateAddress(req.body.order_id,function(err,rows){
                if(err){
                    res.json(err)
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
        }
    })
})

module.exports=router;