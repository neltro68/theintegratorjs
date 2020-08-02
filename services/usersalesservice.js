const fs = require('fs');
const Sales = require('../models/Sales');
const salesSchemaIndex = require('../config/default.json').salesSchemaIndex;
const uploads = require('../config/default.json').uploads;
const parse = require('csv-parse');

module.exports.createRecord = (filename) => {
    fs.createReadStream(uploads + filename)
    .pipe(
        parse({
            delimeter: ",",
            from_line: 2,
            cast: function(value, context){
                switch (context.index)
                {
                    case salesSchemaIndex.age:
                    case salesSchemaIndex.height:
                    case salesSchemaIndex.sale_amount:
                        return Number.parseInt(value);
                    case salesSchemaIndex.last_purchase_date:
                        return Date.parse(value);
                    default:
                        return value;
                }
            }
        })
        .on('data', function(dataRow){
            const userSales = {
                user_name: dataRow[salesSchemaIndex.user_name],
                age: dataRow[salesSchemaIndex.age],
                height: dataRow[salesSchemaIndex.height],
                gender: dataRow[salesSchemaIndex.gender],
                sale_amount: dataRow[salesSchemaIndex.sale_amount],
                last_purchase_date: dataRow[salesSchemaIndex.last_purchase_date]
            }
            try{
                let sale = new Sales(userSales);
                sale.save();
                return sale;
            } catch( err ){
                console.log(err);
            }
        })
        .on('end', function(){

        })
    )
}