import React from "react";
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import AppointHeader from "components/Appointment/AppointHeader.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";


export default function Schedule() {
    const [availID,setavailID] = useState("");
    const [gsname,setName] = useState("");
    const [date,setDate] = useState("");
    const [startTime,setStartTime] = useState("");
    const [endTime,setEndTime] = useState("");
    const [maxCount,setmaxCount] = useState("");
    const [description,setDescription] = useState("");
    const history  = useHistory();

    const schedule = ()=>{
      console.log(availID);

      const d1 = new Date();
      const d2 = new Date(date);
      if (d2.getTime() < d1.getTime()) {
        alert("Date must be greater than today");
        return;
      }


       axios.post('http://localhost:3001/schedule',{
        gsname:gsname,
        date:date,
        startTime: startTime,
        endTime:endTime,
        description:description,
        maxCount:maxCount,

        }).then(()=>{
           console.log("success");
           alert(" Appointment Scheduled Successfully ");
           history.push("/ViewScheduled");
         });
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
                        SCHEDULE APPOINTMENT AVAILABILITY
                    </h1>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        GS Name
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="gsname" onChange={(event)=>{setName(event.target.value);}} 
                        required
                        placeholder="GS Name"/>
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Date
                      </label>
                      <input type="date"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="date" onChange={(event)=>{setDate(event.target.value);}} 
                        required
                        placeholder="Date"/>
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Start Time
                      </label>
                      <input type="time"
                        name="startTime" onChange={(event)=>{setStartTime(event.target.value);}} 
                        required
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        End Time
                      </label>
                      <input type="time"
                        name="endTime" onChange={(event)=>{setEndTime(event.target.value);}} 
                        required
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Maximum No. Count Possible
                      </label>
                      <input type="int"
                        name="maxcount" onChange={(event)=>{setmaxCount(event.target.value);}} 
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
                        name="description" onChange={(event)=>{setDescription(event.target.value);}} 
                        placeholder="Type a message..."
                      />
                    </div>
                    <box>
                    <div className="text-center mt-6">
                      <button
                        className="bg-emerald-450 text-white active:bg-emerald-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        onClick={schedule}
                      > Add Availability 
                      </button>
                      <button
                        className="bg-red-100 text-white active:bg-red-100 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      > 
                        Cancel  
                      </button>
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
