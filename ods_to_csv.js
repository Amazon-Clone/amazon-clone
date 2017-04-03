fs = require('fs');
XLSX = require('xlsx');

var workbook = XLSX.readFile('db_schema.ods');

for(var i = 0; i < workbook.SheetNames.length; i++){
    console.log(workbook.SheetNames[i]);
    fs.writeFile('./db/csv/' + workbook.SheetNames[i] + '.csv', XLSX.utils.sheet_to_csv(workbook.Sheets[workbook.SheetNames[i]]));
}