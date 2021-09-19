const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require('bcrypt');

const httpStatus = require('http-status');
const routes = require('./routes')
const axios = require("axios")
const {db} = require('./config/db.config')


//const axios = require("axios");
const TXT_UID= "94711655166";
const TXT_PW= "9411";


// const fileUpload = require('express-fileupload');

// const { response } = require('express');
// const path = require('path');
// const { name } = require('ejs');
const bodyParser =  require('body-parser')
// const ejs = require ('ejs');
// const socketio = require('socket.io')
// const { response } = require('express');
// const app = express();
// const path = require('path');
// const { name } = require('ejs');
// const bodyParser =  require('body-parser')
// app.use(express.json());
// app.use(cors());
const saltRounds = 10;

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
// app.use(fileUpload());

// var req = require("./node_modules/req/node_modules/request");
// const db = mysql.createConnection({
// 	user: "root",
// 	host: "localhost",
// 	password: "",
// 	database: "meetyourgs",
//     port: "3308",

// });
//
// db.connect((err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log('Database Connected...');
//     }
// });


// constsmaterial
app.post('/create',(req,res)=>{
    console.log(req.body)
    const addeddate = req.body.addeddate;
    const materialid = req.body.materialid;
    const materialname = req.body.materialname;
    const description = req.body.description;
    const quantity = req.body.quantity;

    db.query("INSERT INTO constsmaterial (addeddate,materialid,description,quantity) VALUES (?,?,?,?)",
    [addeddate,materialid,description,quantity],(err,result)=>{ 
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/materials',(req,res)=>{
    db.query("SELECT c.*,n.materialname FROM newconstmaterial n JOIN constsmaterial c ON n.materialid = c.materialid order by addeddate ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

app.get('/materialname', (req, res) => {
    db.query('SELECT materialid,materialname FROM newconstmaterial ', (err, result) => {
        res.send(result);
        console.log(result);

    })
})

app.put('/constupdate/:id' , (req,res) => {
    const addeddate = req.body.addeddate;
    const materialid = req.body.materialid;
    const materialname = req.body.materialname;
    const description = req.body.description;
    const quantity = req.body.quantity;

    db.query("UPDATE constsmaterial SET addeddate = ? , , materialname = ?, description = ?, quantity = ? WHERE materialid= ?" ,
    [addeddate,materialname,description,quantity],(err,result)=>{ 
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })

})

app.get('/getconst',(req,res)=>{
    db.query("SELECT c.*,n.materialname FROM newconstmaterial n JOIN constsmaterial c ON n.materialid = c.materialid ", [req.query.aa],(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

// app.get('/supplymaterialname', (req, res) => {
//     db.query('SELECT materialid,materialname FROM constsmaterial ', (err, result) => {
//         res.send(result);
//         console.log(result);

//     })
// })


app.delete("/delete/:id",(req,res)=>{
    const id = req.params.id;
    const sqlDelete="DELETE FROM constsmaterial WHERE id=?";

    db.query(sqlDelete,id,(err,result)=>{
      if(err) console.log(err);
    });
  });
  app.put("/update/:id",(req,res)=>{
    const id = req.params.id;
    const name = req.params.name;
    const sqlUpdate="UPDATE constsmaterial SET name=? WHERE id=?";
  
    db.query(sqlUpdate,[name,id],(err,result)=>{
      if(err) console.log(err);
    })
  });
  app.put('/updateMaterial/:id', (req,res) => {
    console.log(id);
    //const id = req.body.id;
    const name = req.body.name;
    const sqlUpdate = "UPDATE SET constsmaterial name=? WHERE id=?";
  
    db.query(sqlUpdate,[name,id],(err,result)=>{
      if(err) console.log(err);
    })
  });

app.post('/createnew',(req,res)=>{
    console.log(req.body)
    const materialid = req.body.materialid;
    const materialname = req.body.materialname;

    db.query("INSERT INTO newconstmaterial (materialid,materialname) VALUES (?,?)",
    [materialid,materialname],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/newmaterial',(req,res)=>{
    db.query("SELECT * FROM newconstmaterial",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});


app.post('/constsupply',(req,res)=>{
    console.log(req.body)
    const supplieddate = req.body.supplieddate;
    const materialid = req.body.materialid;
    const materialname = req.body.materialname;
    const description = req.body.description;
    const quantity = req.body.quantity;

    db.query("INSERT INTO supplyconstmaterial (supplieddate,materialid,description,quantity) VALUES (?,?,?,?)",
    [supplieddate,materialid,description,quantity],(err,result)=>{ 
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/constsupply',(req,res)=>{
    db.query("SELECT c.*,n.materialname FROM newconstmaterial n JOIN supplyconstmaterial c ON n.materialid = c.materialid order by supplieddate ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});



// agrimaterial
app.post('/agri',(req,res)=>{
    console.log(req.body)
    const addeddate = req.body.addeddate;
    const materialid = req.body.materialid;
    const description = req.body.description;
    const quantity = req.body.quantity;

    db.query("INSERT INTO agrimaterial (addeddate,materialid,description,quantity) VALUES (?,?,?,?)",
    [addeddate,materialid,description,quantity],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/agrimaterials',(req,res)=>{
    db.query("SELECT a.*,n.materialname FROM newagrimaterial n JOIN agrimaterial a ON n.materialid = a.materialid order by addeddate ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
      
    });
});

app.get('/agrimaterial', (req, res) => {
    db.query('SELECT materialid,materialname FROM newagrimaterial ', (err, result) => {
        res.send(result);
        console.log(result);

    })
})

app.post('/createnewagri',(req,res)=>{
    console.log(req.body)
    const materialid = req.body.materialid;
    const materialname = req.body.materialname;

    db.query("INSERT INTO newagrimaterial (materialid,materialname) VALUES (?,?)",
    [materialid,materialname],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/newagrimaterial',(req,res)=>{
    db.query("SELECT * FROM newagrimaterial order by materialid ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

app.post('/agrisupply',(req,res)=>{
    console.log(req.body)
    const supplieddate = req.body.supplieddate;
    const materialid = req.body.materialid;
    const materialname = req.body.materialname;
    const name = req.body.name;
    const description = req.body.description;
    const quantity = req.body.quantity;

    db.query("INSERT INTO supplyagrimaterial (supplieddate,materialid,name,description,quantity) VALUES (?,?,?,?)",
    [supplieddate,materialid,name,description,quantity],(err,result)=>{ 
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/agrisupply',(req,res)=>{
    db.query("SELECT c.*,n.materialname FROM newagrimaterial n JOIN supplyagrimaterial c ON n.materialid = c.materialid order by supplieddate ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});



// othermaterial
app.post('/other',(req,res)=>{
    console.log(req.body)
    const addeddate = req.body.addeddate;
    const materialid = req.body.materialid;
    const materialname = req.body.materialname;
    const description = req.body.description;
    const quantity = req.body.quantity;

    db.query("INSERT INTO othermaterial (addeddate,materialid,description,quantity) VALUES (?,?,?,?)",
    [addeddate,materialid,description,quantity],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/othermaterials',(req,res)=>{
    db.query("SELECT o.*, n.materialname FROM newothermaterial n JOIN othermaterial o ON n.materialid = o.materialid ",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

app.get('/othermaterial', (req, res) => {
    db.query('SELECT materialid,materialname FROM newothermaterial ', (err, result) => {
        res.send(result);
        console.log(result);

    })
})

app.post('/createnewother',(req,res)=>{
    console.log(req.body)
    const materialid = req.body.materialid;
    const materialname = req.body.materialname;

    db.query("INSERT INTO newothermaterial (materialid,materialname) VALUES (?,?)",
    [materialid,materialname],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});

app.get('/newothermaterial',(req,res)=>{
    db.query("SELECT * FROM newothermaterial",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

app.post('/othersupply',(req,res)=>{
    console.log(req.body)
    const supplieddate = req.body.supplieddate;
    const materialid = req.body.materialid;
    const materialname = req.body.materialname;
    const description = req.body.description;
    const quantity = req.body.quantity;

    db.query("INSERT INTO supplyagrimaterial (supplieddate,materialid,description,quantity) VALUES (?,?,?,?)",
    [supplieddate,materialid,description,quantity],(err,result)=>{ 
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});

app.get('/othersupply',(req,res)=>{
    db.query("SELECT c.*,n.materialname FROM newothermaterial n JOIN supplyotheraterial c ON n.materialid = c.materialid order by supplieddate ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

//Donation
// app.post('/donationcreate',(req,res)=>{
//     console.log(req.body)
//     const date = req.body.date;
//     const donorID = req.body.donorID;
//     const donorName = req.body.donorName;
//     const address = req.body.address;
//     const phone = req.body.phone;
//     const email = req.body.email;
//     const description = req.body.description;
//     const amount = req.body.amount;

//     db.query("INSERT INTO donation (date,donorName,address,phone,email,description,amount) VALUES (?,?,?,?,?,?,?)",
//     [date,donorName,address,phone,email,description,amount],(err,result)=>{
//         if(err){
//             console.log(err);
//         } else{
//             res.send("values inserted");
//         }
    
//     })
    
// });
// app.get('/donationview',(req,res)=>{
//     db.query("SELECT * FROM donation order by donorID ASC" ,(err,result,) => {
//         if(err) {
// 		console.log(err)
// 	  } else {
//         res.send(result)
// 	  } 
        
//     });
// });

app.post('/add_donation', (req, res)=> {

	const first_name = req.body.first_name;
	const last_name = req.body.last_name;
	const donation_amt = req.body.donation_amt;
	const address = req.body.address;
	const city = req.body.city;
	const phoneno = req.body.phoneno;
	const email = req.body.email;
    const date = req.body.date;
 	
	db.query
	("INSERT INTO donations (first_name, last_name, donation_amt, address, city, phoneno, email, date) VALUES (?,?,?,?,?,?,?,?,?)", 
	[first_name, last_name, donation_amt, address, city, phoneno, email, date], 
	(err, result)=> {
		if(err){
			console.log(err);
			res.send("Data Error");
		}
		else{
			res.send("Donation done Sucessfully!!");
		}
	})	
});

app.get('/donationview',(req,res)=>{
    db.query("SELECT * FROM donations order by donation_id ASC" ,(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

// income
app.post('/financecreate',(req,res)=>{
    console.log(req.body)
    const date = req.body.date;
    const transectionID = req.body.transectionID;
    const receiptno = req.body.receiptno;
    const description = req.body.description;
    const income = req.body.income;
   
    db.query("INSERT INTO finance (date,receiptno,description,income) VALUES (?,?,?,?)",
    [date,receiptno,description,income],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});

app.get('/transaction',(req,res)=>{
    db.query("SELECT * FROM finance order by transectionID ASC" ,(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});
// expense
app.post('/expensecreate',(req,res)=>{
    console.log(req.body)
    const date = req.body.date;
    const receiptno = req.body.receiptno;
    const description = req.body.description;
    const expense = req.body.expense;
   
    db.query("INSERT INTO finance (date,receiptno,description,expense) VALUES (?,?,?,?)",
    [date,receiptno,description,expense],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
// fund
app.post('/fundcreate',(req,res)=>{
    console.log(req.body)
    const date = req.body.date;
    const transectionID = req.body.transectionID;
    const fundID = req.body.fundID;
    const description = req.body.description;
    const debit = req.body.debit;
   
    db.query("INSERT INTO fund (date,fundID,description,debit) VALUES (?,?,?,?)",
    [date,fundID,description,debit],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
app.get('/funds',(req,res)=>{
    db.query("SELECT * FROM fund order by date ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});
// Fund Allocation
app.post('/fundallocatecreate',(req,res)=>{
    console.log(req.body)
    const date = req.body.date;
    const fundID = req.body.fundID;
    const description = req.body.description;
    const credit = req.body.credit;
   
    db.query("INSERT INTO fund (date,fundID,description,credit) VALUES (?,?,?,?)",
    [date,fundID,description,credit],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});


//APPOINTMENTS
//schedule
app.post('/schedule',(req,res)=>{
    console.log(req.body)
    const gsname = req.body.gsname;
    const date = req.body.date;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    const maxCount = req.body.maxCount;
    const description = req.body.description;

    db.query("INSERT INTO availability (gsname,date,startTime,endTime,maxCount,description) VALUES (?,?,?,?,?,?)",
    [gsname,date,startTime,endTime,maxCount,description],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    })  
});

//gsview
app.get('/viewSchedule',(req,res)=>{
    db.query("SELECT *, TIMEDIFF( endTime, startTime) AS Duration FROM availability ",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

//userview
app.get('/userView',(req,res)=>{
    db.query("SELECT *, TIMEDIFF( endTime, startTime) AS Duration FROM availability ",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

//dropdown 
app.get('/booktopics',(req,res)=>{
    db.query("SELECT topic FROM book_topics",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  }     
    });
});

app.get('/appdetails',(req,res)=>{
    db.query("SELECT * FROM availability",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  }     
    });
});
//userAdd
app.post('/add-booking',(req,res)=>{
    const bookID = req.body.bookID;
    const nic = req.body.nic;
    const name = req.body.name;
    const home_no = req.body.home_no;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email; 
    const topic = req.body.topic;
    const book_status = req.body.book_status;
    const availID= req.body.availID;
    console.log("db reach")
    console.log(req.body)

    db.query("INSERT INTO bookings (nic,name,home_no,address,phone,email,topic,book_status,availID) VALUES (?,?,?,?,?,?,?,?,?)",
    [nic,name,home_no,address,phone,email,topic,book_status,availID],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    })  
});

//RequestView
app.get('/requestView',(req,res)=>{
    db.query("SELECT b.*, a.date, a.startTime, a.endTime FROM bookings b JOIN availability a ON b.availID= a.availID WHERE book_status='Pending'  ",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  }     
    });
});

//accept
app.put('/accept-book', (req,res) => {
    const bookID = req.body.bookID;
    const book_status = req.body.book_status;

    console.log(req.body)

    db.query("UPDATE bookings SET book_status='Confirmed' WHERE bookID = ?; ", 
    [bookID], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
       }
    );
  });

//decline
app.put('/decline-book', (req,res) => {
    const bookID = req.body.bookID;
    const book_status = req.body.book_status;

    console.log(req.body)

    db.query("UPDATE bookings SET book_status='Declined' WHERE bookID = ?; ", 
    [bookID], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
       }
    );
  });

//confirmed appointment
app.get('/confirmView',(req,res)=>{
    db.query("SELECT b.*, a.gsname, a.date, a.startTime, a.endTime FROM bookings b JOIN availability a ON b.availID= a.availID WHERE book_status='Confirmed'  ",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  }     
    });
});

//cancel
app.put('/cancel-book', (req,res) => {
    const bookID = req.body.bookID;
    const book_status = req.body.book_status;

    console.log(req.body)

    db.query("UPDATE bookings SET book_status='Cancelled' WHERE bookID = ?; ", 
    [bookID], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
       }
    );
  });


//donations
app.post('/donor',(req,res)=>{
    console.log(req.body)
    const donorName = req.body.donorName;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;
	const date = req.body.date;
    const amount = req.body.amount;

    db.query("INSERT INTO donation (donorName,address,phone,email,date,amount) VALUES (?,?,?,?,?,?)",
    [donorName,address,phone,email,date,amount],(err,result)=>{
        if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});
//normal view
app.get('/donationview',(req,res)=>{
    db.query("SELECT donorID,donorName,address,phone,email,date,amount FROM donation",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});
//edit view and put
app.get("/donationdetails",(req,res)=>{
    donorID=req.params.donorID;
    db.query("SELECT donorName,address,phone,email,date,amount FROM donation WHERE donorID=?",[req.query.donorID],(err,result)=>{
        console.log(req.query.donorID);
        res.send(result);
    });
        
});
app.put('/edit-donations', (req,res) => {
    const donorID = req.body.donorID;
    const donorName = req.body.donorName;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;
    const amount = req.body.amount;
    console.log("nuwan")
    console.log(req.body)

    db.query("UPDATE donation SET donorName=?,address=?, phone=?,email=?,amount=? WHERE donorID = ?; ", 
    [donorName,address,phone,email,amount, donorID], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
       }
    );
  });





//notice
app.post('/addnotice',(req,res)=>{
    console.log(req.body)
    const noticeID = req.body.noticeID;
    const topic = req.body.topic;
    const description = req.body.description; 
    const uploadDate = req.body.uploadDate;
    const expDate = req.body.expDate; 
    const status = req.body.status;  

    db.query("INSERT INTO notice (topic,description,uploadDate,expDate) VALUES (?,?,?,?)",
    [topic,description,uploadDate,expDate],(err,result)=>{
		if(err){
            console.log(err);
        } else{
            res.send("values inserted");
        }
    
    })
    
});

app.get('/noticeview',(req,res)=>{
    db.query("SELECT * FROM notice WHERE status = 'Active' ORDER BY expDate ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});
app.get('/allnoticeview',(req,res)=>{
    db.query("SELECT * FROM notice WHERE status = 'Inactive' ORDER BY expDate ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

//remove
app.put('/remove-notice', (req,res) => {
    const noticeID = req.body.noticeID;
    const status = req.body.status;

    console.log(req.body)

    db.query("UPDATE notice SET status='Inactive' WHERE noticeID = ?; ", 
    [noticeID], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
       }
    );
  });
//Activate
app.put('/active-notice', (req,res) => {
    const noticeID = req.body.noticeID;
    const status = req.body.status;

    console.log(req.body)

    db.query("UPDATE notice SET status='Active' WHERE noticeID = ?; ", 
    [noticeID], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
       }
    );
  });

  //General Message


//forumDiscussion
app.post('/addnewforum' , (req , res)=>{
    const postid = req.body.postid;
    const posttext = req.body.posttext;
    const topic = req.body.topic;
    const date = req.body.date;
    const emailid = req.body.emailid;
    const comments = req.body.comments;
    
   db.query("INSERT INTO forumpost (postID,postText,topic,date,emailID,comments) VALUES (?,?,?,?,?,?)",[postid,posttext,topic,date,emailid,comments],(err,result)=>{
       if(err){
           console.log(err);
       }else{
           res.send("Post inserted");
       }
   });

});

app.get('/forumview', (req,res)=>{
    db.query("SELECT * FROM forumpost ORDER BY date ASC",(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.put('/update-forum',(req,res)=>{
    const reply = req.body.status;

    console.log(req.body)

    db.query("UPDATE forumpost SET status='Active' WHERE postID = ?;",
    [postID],
    (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
});

//formTemplates
app.post('/add-form' , (req , res)=>{
    const formdata = JSON.parse(req.body.data);
    const formid = formdata.formid;
    const formTopic = formdata.formTopic;
    const UploadDate = formdata.UploadDate;
    const expDate = formdata.expDate;
    const description = formdata.description;

  console.log(req.body);
  console.log(req.files);

let sampleFile;
let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  console.log(__dirname);
  const randomfilenum = Math.floor(Math.random()*1000000);
  sampleFile = req.files.file;
  const newfilename = randomfilenum.toString() +sampleFile.name;

  uploadPath = __dirname + '/public/forms/' + newfilename

  // Use the mv() method to place the file somewhere on your server
  
  // Use the mv() method to move the file in the server

  sampleFile.mv(uploadPath, function(err) {
   console.log(err);
  });


   db.query("INSERT INTO formtemplate (formTopic,file,UploadDate,expDate,description) VALUES (?,?,?,?,?)",
   [formTopic,newfilename,UploadDate,expDate,description],(err,result)=>{
       if(err){
           console.log(err);
       }else{
           res.send("Data Added");
       }
   });

});

//download form
// app.get('/download', function(req, res){

// let sampleFile;
// let dwnloadPath;

//   const randomfilenum = Math.floor(Math.random()*1000000);
//   sampleFile = req.files.file;
//   const newfilename = randomfilenum.toString() +sampleFile.name;

//   dwnloadPath = __dirname + '/public/forms/' + newfilename

    
 
//     res.download(dwnloadPath, newfilename.pdf); 
//   });


//formview
app.get('/formView',(req,res)=>{
    db.query("SELECT * FROM formtemplate ORDER BY uploadDate ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

app.get('/activeForm',(req,res)=>{
    db.query("SELECT * FROM formtemplate WHERE status='Active' ORDER BY expDate ASC",(err,result,) => {
        if(err) {
		console.log(err)
	  } else {
        res.send(result)
	  } 
        
    });
});

//De-activate
app.put('/remove-forms', (req,res) => {
    const formID = req.body.formID;
    const status = req.body.status;

    console.log(req.body)

    db.query("UPDATE formtemplate SET status='Inactive' WHERE formID = ?; ", 
    [formID], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
       }
    );
  });

//Activate
app.put('/activate-form', (req,res) => {
    const formID = req.body.formID;
    const status = req.body.status;

    console.log(req.body)

    db.query("UPDATE formtemplate SET status='Active' WHERE formID = ?; ", 
    [formID], 
    (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
       }
    );
  });

  
// projects
app.post('/add_projects', (req, res)=> {

	const type = req.body.type
	const title = req.body.title
	const date = req.body.date
	const image = "https://i.ytimg.com/vi/vS2erx7P_kA/maxresdefault.jpg"
	const intro = req.body.intro
	const read_more = req.body.read_more
 
	
	db.query
	("INSERT INTO projects (type, title, date, image, intro, read_more) VALUES (?,?,?,?,?,?)", 
	[type, title, date, image, intro, read_more], 
	(err, result)=> {
		if(err){
			console.log(err);
			res.send(400, { response: 'Data Error ' });
		}
		else{
			res.send(200, { response: 'Project added Sucessfully!!' });
		}
	})	
});
app.put('/update_project/:id', (req, res)=> {
	var id=req.params.id;
	
	const type = req.body.type
	const title = req.body.title
	const date = req.body.date
	const image = "https://i.ytimg.com/vi/vS2erx7P_kA/maxresdefault.jpg"
	const intro = req.body.intro
	const read_more = req.body.read_more
	db.query
	("UPDATE projects SET type=?, title=?, date=?, image=?, intro=?, read_more=? where project_id = ?", 
	[type, title, date, image, intro, read_more,id], 
	(err, result)=> {
		if(err){
			console.log(err);
			res.send(400, { response: 'Data Error ' });
		}
		else{
			res.send(200, result);
			// res.send(200, { response: 'Project added Sucessfully!!' });
		}
	})	
});

app.get('/get_future_projects', (req, res)=> {

	db.query
	("SELECT * FROM projects where type = ? and status='active'", 
	["future_project"], 
	(err, result)=> {
		if(err){
			console.log(err);
			res.send(400, { response: 'Data Error ' });
		}
		else{
			res.send(200, result);
			// res.send(200, { response: 'Project added Sucessfully!!' });
		}
	})	
});

app.put('/delete_project/:id', (req, res)=> {
	var id=req.params.id;
	db.query
	("UPDATE projects SET status='inactive' where project_id = ?", 
	[id], 
	(err, result)=> {
		if(err){
			console.log(err);
			res.send(400, { response: 'Data Error ' });
		}
		else{
			res.send(200, result);
			// res.send(200, { response: 'Project added Sucessfully!!' });
		}
	})	
});

app.get('/getproject/:id', (req, res)=> {
	var id=req.params.id;
	db.query
	("SELECT * from projects where project_id = ?", 
	[id], 
	(err, result)=> {
		if(err){
			console.log(err);
			res.send(400, { response: 'Data Error ' });
		}
		else{
			res.send(200, result);
			// res.send(200, { response: 'Project added Sucessfully!!' });
		}
	})	
});


app.get('/get_present_projects', (req, res)=> {

	db.query
	("SELECT * FROM projects where type = ? and status='active'", 
	["present_project"], 
	(err, result)=> {
		if(err){
			console.log(err);
			res.send(400, { response: 'Data Error ' });
		}
		else{
			res.send(200, result);
			// res.send(200, { response: 'Project added Sucessfully!!' });
		}
	})	
});
app.get('/get_past_projects', (req, res)=> {

	db.query
	("SELECT * FROM projects where type = ? and status='active'", 
	["past_project"], 
	(err, result)=> {
		if(err){
			console.log(err);
			res.send(400, { response: 'Data Error ' });
		}
		else{
			res.send(200, result);
			// res.send(200, { response: 'Project added Sucessfully!!' });
		}
	})	
});


app.listen(3001, () => {
	console.log("running on port 3001");
});
