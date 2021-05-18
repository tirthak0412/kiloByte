var express = require('express');
var router = express.Router();
var usercheck = require('../models/user_model');

router.post('/', function (req, res, next) {
    usercheck.logindelivery(req.body, function (err, rows) {
        if (err) {
            res.json(err)
        } else {
            console.log(rows);
            if (rows.length == 0) {
                let item = {
                    message: "There is something error with Mobileno or Otp or EmailId Or Password Or User Not Exist",
                    success:0,
                    code: 400
                }
                res.json(item);
            } else {
                item={
                    message:"You are logged in successfully",
                    data:rows
                }
                res.json(item)
            }
        }
    })
})

module.exports=router;