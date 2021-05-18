var express = require('express');
var router = express.Router();
var user = require('../models/user_model');

router.post('/', function (req, res, next) {
    console.log(req.body);
    user.adduser(req.body, function (err, rows) {
        user.getOtpOfUser(rows.insertId, function (err, rows) {
            if(err){
                res.json(err);
            }else{
                let item={
                    data:rows[0].otp,
                    message:"Successfully registered"
                }
                res.json(item);
            }
        })
        if (err) {
            res.json(err)
        }
    })
})

module.exports=router;
