var express=require('express');
var router=express.Router();
var order=require('../models/order_model');
var order_detail=require('../models/order_details_model');

router.get('/:order_id',function(req,res,next){
    order.displayOrderById(req.params.order_id,function(err,rows){
        if(err){
            res.json(err);
        }else{
            if(rows.length>0){
                res.json(rows)
            }else{
                let item={
                    message:"No Data Found"
                }
                res.json(item);
            }
        }
    })
})

router.post('/',function(req,res,next){
    order.Addorder(req.body,function(err,rows){
        if(err){
            res.json(err)
        }else{
            order_detail.addOrderDetail(rows.insertId,req.body,function(err,rows){
                if(err){
                    res.json(err)
                }else{
                    if(rows.affectedRows > 0){
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
        }
    })
})

module.exports=router;