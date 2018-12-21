const csv = require("csvtojson")
const fs = require('fs')
const csvFilePath = 'customer-data.csv'

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    //console.log(jsonObj);    
    fs.writeFile('customer-data.json',JSON.stringify(jsonObj,null,2),(error)=>{
    	if (error) return console.log(`Conversion Error:${error}`)
         else return  console.log('Conversion Completed')
    })
})