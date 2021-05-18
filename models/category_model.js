var db=require('../dbconnection');

var category={
    getAllCategory(callback){
        return db.query("select * from category",callback)
    },
    addCategory(item,callback){
        return db.query("insert into category values(?,?)",[item.category_id,item.name],callback);
    }
}

module.exports=category;