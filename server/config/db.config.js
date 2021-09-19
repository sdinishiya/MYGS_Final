const mysql = require('mysql');
const mysql2 = require('mysql2');

const db = mysql.createConnection({
    user: "admin",
    host: "mysql-50744-0.cloudclusters.net",
    password: 'rIFIsJCa',
    database: "meetyourgs",
    port: "17158"
});

const pool = mysql2.createPool({
    user: "admin",
    host: "mysql-50744-0.cloudclusters.net",
    password: 'rIFIsJCa',
    database: "meetyourgs",
    port: "17158"
});

// create the pool
// const pool = mysql2.createPool({
//     user: "root",
//     host: "localhost",
//     password: '',
//     database: "meetyourgs",
//     // port: "3308",

// })

// const db = mysql.createConnection({
//     user: "root",
//     host: "localhost",
//     password: '',
//     database: "meetyourgs",
//     // port: "3308",
// });

db.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + db.threadId);
});

// const pool = mysql.createPool({
//     user: "admin",
//     host: "mysql-49357-0.cloudclusters.net",
//     password: 'htRbbgjw',
//     database: "G3",
//     port: "14123"
// });

pool.getConnection((err) => {
    if (err) {
        console.log("database connection failed")
        console.log(err)
    }
    else console.log("Connected to database")
})

// now get a Promise wrapped instance of that pool
const dbConn = pool.promise();

module.exports = {dbConn, db};
