var db=require('../dbconnection')

var order={
    Addorder(item,callback){
       return db.query("insert into tbl_order(order_id,delivery_person_id,customer_id,status) values(?,0,?,'task Created')",[item.order_id,item.customer_id],callback);
    },
    assignDeliveryPartener(item,callback){
        return db.query("update tbl_order set delivery_person_id=? where order_id=?",[item.delivery_person_id,item.order_id],callback);
    },
    updateOrderDeliveryStatus(item,callback){
        return db.query("update tbl_order set status=? where order_id=?",[item.status,item.order_id],callback);
    },
    displayOrderById(order_id,callback){
        return db.query("SELECT o.*,od.*,p.name,u.name from tbl_order o,tbl_order_details od,product p,tbl_user u where o.order_id=od.fk_order_id and od.fk_product_id=p.product_id and o.delivery_person_id=u.user_id and od.fk_order_id=?",[order_id],callback);
    }
}

module.exports=order;