var db = require('../dbconnection');
var global = require('../models/global');
const order = require('./order_model');

let i = 0;
var order_details = {
    addOrderDetail(order_id, item,callback) {
        const arr2 = []
        let count = item.item.length;
        for (let j = 0; j < item.item.length; j++) {
            var product_id = item.item[j].product_id;
            let qty = item.item[j].qty;
            let fk_order_id = order_id;
            arr2.push([product_id, qty,fk_order_id]);
        }
        return db.query("insert into tbl_order_details (fk_product_id,qty,fk_order_id) values ?", [arr2], callback);
    },
    updateAddress(order_id,callback){
        global.provideuniqueid(function(err,rows){
            if(rows){
                allCount = JSON.parse(JSON.stringify(rows[0]))["address_id"];
                return db.query("update tbl_order_details set fk_address_id=? where fk_order_id=?",[allCount,order_id],callback);
            }
        })
    }
}

module.exports = order_details;