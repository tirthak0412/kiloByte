var db=require('../dbconnection');

var product={
    getAllProduct(callback){
        return db.query("select * from product",callback);
    },
    addProduct(item,callback){
        return db.query("insert into product values(?,?,?)",[item.product_id,item.name,item.fk_category_id],callback);
    }
}

module.exports=product;