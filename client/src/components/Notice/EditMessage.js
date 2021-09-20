import React from "react";
import { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from "axios";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import NoticeHeader from "components/Notice/NoticeHeader.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";


const useStyles = makeStyles((theme) => ({
    

  formControl: {
    minWidth: '454px',
  },

}
));

export default function EditMessage() {

    const classes = useStyles();
    const [val, setValue] = React.useState('');
    const [open, setOpen] = React.useState(false);
    // const [type, settype] = useState('');
    let {id}=useParams();

    // const handleChange = (event) => {
    //   settype(event.target.value);
    // };
  
    // const handleClose = () => {
    //   setOpen(false);
    // };
  
    // const handleOpen = () => {
    //   console.log(addeddate);
    // };

    const [topic,settopic] = useState("");
    const [description,setdescription] = useState("");
    const [uploadDate,setuploadDate] = useState("");
    const [type,settype] = useState("");
    const history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:3001/getsms/${id}`)
    .then(function (response) {
      
        settopic(response.data[0].topic);
        setdescription(response.data[0].description);
        setuploadDate(response.data[0].uploadDate);
        settype(response.data[0].type);
        console.log(response.data[0].addeddate);

    
    })
        
    

}, [])

function submit(event){
  event.preventDefault();
   axios.put(`http://localhost:3001/smsupdate/${id}`,{
    "topic":topic,
    "description":description,
    "uploadDate":uploadDate,
    "type":type,
     
    })
    .then(function(response) {
       console.log("success");
       alert("Updated Successfully!!!"); 
       history.push("/AllMessageView");
     })
     .catch(function (error) {
      // handle error
      // alert("error!!!!");
      alert(error.response.data.response);
    
  })
  .then(function () {
      // always executed

    });  
}


  // Date convertor
// const dt = new Date(addeddate);
// const year = dt.getFullYear() + '/';
// const month = ('0' + (dt.getMonth() + 1 )).slice(-2) + '/';
// const day = ('0' + dt.getDate()).slice(-2);
       




  return (
    <>
    
  <main>
  <Sidebar />
    <div className="relative md:ml-64 bg-blueGray-100">
      <AdminNavbar />
      {/* Header */}
      <NoticeHeader />
      <section className="pb-18 relative block bg-white">

      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <br /> <br /> <br /> <br /> 
        <section className="relative block py-18 lg:pt-0 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48"> 
              <div className="w-full lg:w-6/12 px-4"> 
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-emerald-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h1 className="text-2xl font-semibold text-center justify-center">
                        UPDATE SMS DETAILS
                    </h1>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Topic
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={topic} 
                        name="Topic" onChange={(event)=>{settopic(event.target.value);}} 
                        required
                        placeholder="Topic..."/>
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Description
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={description} 
                        name="Description" onChange={(event)=>{setdescription(event.target.value);}} 
                        required
                        placeholder="Description..."/>
                    </div>
                    
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        UploadDate
                      </label>
                      <input type="date"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        Value={uploadDate} 
                        name="UploadDate" onChange={(event)=>{setuploadDate(event.target.value);}} 
                        required
                        placeholder="UploadDate"/>
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Type
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={type} 
                        name="Type" onChange={(event)=>{settype(event.target.value);}} 
                        required
                        placeholder="Type..."/>
                    </div>

                    <box>
                    <div className="text-center mt-6">
                      {/* <button type="submit" onClick={add_fund} id="submitBtn"style={mystyle.submitBtn}> Add</button> */}
                      <Link to = '/AllMessageView'>
                      <button
                        className="bg-emerald-450 text-white active:bg-emerald-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        onClick={submit}>
                          UPDATE 
                      </button>
                      </Link>
                      <Link to = '/AllMessageView'>
                      <button
                        className="bg-red-100 text-white active:bg-red-100 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"> 
                        CANCEL  
                      </button>
                      </Link>
                    </div>
                    </box>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        </div>
        <FooterAdmin />
        </section>
        
        </div>
      </main>
                 
    </>
  );
}

