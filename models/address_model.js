var db=require('../dbconnection');

var addresses={
    getAllAddress(callback){
        return db.query("select * from addresses",callback)
    },
    addAddress(item,callback){
        return db.query("insert into addresses values(?,?,?,?,?)",[item.address_id,item.address,item.lat,item.long,item.fk_category_id],callback)
    }
}

module.exports=addresses;