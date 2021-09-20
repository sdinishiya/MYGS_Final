import React from "react";
import { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import AppointHeader from "components/Appointment/AppointHeader.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";


const useStyles = makeStyles((theme) => ({
    

    formControl: {
      minWidth: '454px',
    },
  
  }
  ));

export default function EditSchedule() {

    const classes = useStyles();
    const [val, setValue] = React.useState('');
    const [open, setOpen] = React.useState(false);
    // const [type, settype] = useState('');
    let {id}=useParams();

    const [gsname,setgsname] = useState("");
    const [date,setdate] = useState("");
    const [startTime,setstartTime] = useState("");
    const [endTime,setendTime] = useState("");
    const [description,setdescription] = useState("");
    const history  = useHistory();


    useEffect(() => {
        axios.get(`http://localhost:3001/getavailability/${id}`)
        .then(function (response) {
          
            setgsname(response.data[0].gsname);
            setdate(response.data[0].date);
            setstartTime(response.data[0].startTime);
            setendTime(response.data[0].endTime);
            setdescription(response.data[0].description);
            console.log(response.data[0].gsname);
    
        
        })
            
        
    
    }, [])
    
    function submit(event){
      event.preventDefault();
       axios.put(`http://localhost:3001/availabilityupdate/${id}`,{
        "gsname":gsname,
        "date":date,
        "startTime":startTime,
        "endTime":endTime,
        "description":description,
         
        })
        .then(function(response) {
           console.log("success");
           alert("Updated Successfully!!!"); 
           history.push("/ViewScheduled");
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
    

    const schedule = ()=>{
      const d1 = new Date();
      const d2 = new Date(date);
      if (d2.getTime() < d1.getTime()) {
        alert("Date must be greater than today");
        return;
      }
    };
  return (
    <>
    
  <main>
  <Sidebar />
    <div className="relative md:ml-64 bg-blueGray-100">
      <AdminNavbar />
      {/* Header */}
      <AppointHeader />
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
                        EDIT APPOINTMENT AVAILABILITY
                    </h1>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        GS Name
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={gsname}
                        name="gsname" onChange={(event)=>{setgsname(event.target.value);}} 
                        required
                        placeholder="GS Name"/>
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Date
                      </label>
                      <input type="date"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={date}
                        name="date" onChange={(event)=>{setdate(event.target.value);}} 
                        required
                        placeholder="Date"/>
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Start Time
                      </label>
                      <input type="time"
                        value={startTime}
                        name="startTime" onChange={(event)=>{setstartTime(event.target.value);}} 
                        required
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        End Time
                      </label>
                      <input type="time"
                        value={endTime}
                        name="endTime" onChange={(event)=>{setendTime(event.target.value);}} 
                        required
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                    </div>
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        value={description}
                        name="description" onChange={(event)=>{setdescription(event.target.value);}} 
                        placeholder="Type a message..."
                      />
                    </div>
                    <box>
                    <div className="text-center mt-6">
                    <Link to = '/ViewScheduled'>
                      <button
                        className="bg-emerald-450 text-white active:bg-emerald-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        onClick={submit}
                      > Update
                      </button>
                      </Link>
                      <Link to = '/ViewScheduled'>
                      <button
                        className="bg-red-100 text-white active:bg-red-100 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      > 
                        Cancel  
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
