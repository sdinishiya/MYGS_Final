const mysql = require('mysql');
const mysql2 = require('mysql2');

// create the pool
const pool = mysql2.createPool({
    user: "root",
    host: "localhost",
    password: '',
    database: "meetyourgs",
})

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: '',
    database: "meetyourgs",
}); 


// const pool = mysql2.createPool({
//     user: "admin",
//     host: "mysql-50744-0.cloudclusters.net",
//     password: 'rIFIsJCa',
//     database: "meetyourgs",
//     port: "17158"
// });

// const db = mysql.createConnection({
//     user: "admin",
//     host: "mysql-50744-0.cloudclusters.net",
//     password: 'rIFIsJCa',
//     database: "meetyourgs",
//     port: "17158"
// }); 

db.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + db.threadId);
});



pool.getConnection((err) => {
    if (err) {
        console.log("database connection failed")
        console.log(err)
    }
    else console.log("Connected to database mysql2 ")
})

// now get a Promise wrapped instance of that pool
const dbConn = pool.promise();

module.exports = {dbConn, db};
