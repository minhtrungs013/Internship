const mysql = require('mysql');
const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "internship"
});

connection.connect((err) => {
    if (!err) {
        console.log("kết nối thành công rồi đó má")
    }else{
        console.log("lỗi kìa má")
        
    }
})
module.exports = connection;