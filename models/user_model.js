var db = require('../dbconnection');
const dateformat = require('dateformat');

var user = {
    adduser(item, callback) {
        i = Math.floor(1000 + Math.random() * 9000);
        var date1 = dateformat(new Date(), "yyyy-mm-dd");
        return db.query('insert into tbl_user values (?,?,?,?,?,?,?,?)', [item.user_id, item.name, item.mobile_no, item.password, item.email, item.role_name, date1, i], callback);
    },
    getOtpOfUser(user_id, callback) {
        return db.query('select * from tbl_user where user_id=?', [user_id], callback);
    },
    loginUser(item, callback) {
        if (item.mobile_no > 0 && item.otp > 0) {
            return db.query("select * from tbl_user where otp=? and role_name='user'", [item.otp], callback);
        }
    },
    loginAdmin(item,callback){
        if (item.mobile_no > 0 && item.otp > 0) {
            return db.query("select * from tbl_user where otp=? and role_name='admin'", [item.otp], callback);
        }  
    },
    logindelivery(item,callback){
        if (item.mobile_no > 0 && item.otp > 0) {
            return db.query("select * from tbl_user where otp=? and role_name='delivery person'", [item.otp], callback);
        }
    }
}

module.exports = user;