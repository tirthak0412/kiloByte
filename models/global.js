var db=require('../dbconnection');

uniqueid={
    provideuniqueid(callback){
        return db.query("SELECT address_id FROM addresses a,product p,category c where a.fk_category_id=c.category_id and p.fk_category_id=c.category_id and p.product_id=1  ORDER BY RAND( ) LIMIT 1",callback)
    }
}

module.exports=uniqueid;