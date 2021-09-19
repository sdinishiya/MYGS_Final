import React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import NoticeHeader from "components/Notice/NoticeHeader.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function MessageView() {

  const [notices,setnotices]=useState([])


  useEffect(()=>{
    axios.get("http://localhost:3001/smsview").then((response)=>{
        setnotices(response.data)
    })
  },[])

    // decline
    const [status, setstatus] = useState("Sent");
    const sendSMS = (smsID) => {
      axios
        .put("http://localhost:3001/send-sms", {
          status: status,
          smsID: smsID,
        })

        .then((response) => {
          console.log(smsID);
        });
      alert(" SMS Sent Successfully ");
    };
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
        <br /> <br /> <br />
        <section className="relative block py-18 lg:pt-0 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-11/12 px-4">
              <Link to="/AllMessageView">
                <button className="bg-emerald-400 text-white active:bg-emerald-400 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="submit" >
                      View All SMS  
                </button> <br /><br />
              </Link>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                      <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                          <h3 className="font-semibold text-base text-blueGray-700">
                              Details Table of SMS Message Sent in the Past 
                          </h3>
                        </div>
                        {/* <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                        <Link to="/AddNotice">
                            <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                  type="submit" >
                                  Add New Notices
                            </button> <br /><br />
                        </Link>
                        </div> */}
                      </div>
                    </div>
                    <div className="block w-full overflow-x-auto">
                      {/* Projects table */}
                      <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                          <tr>
                          <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                              Topic   
                          </th>
                          <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                              Description  
                          </th>
                          <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                              Date Uploaded  
                          </th>
                          <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                              Deadline Date  
                          </th>
                          <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                               
                          </th>
                          </tr>
                        </thead>
                        <tbody>
                        {notices.map((notice)=>{
                            const dt = new Date(notice.uploadDate);
                            const year = dt.getFullYear() + '/';
                            const month = ('0' + (dt.getMonth() + 1)).slice(-2) + '/';
                            const day = ('0' + dt.getDate()).slice(-2);

                            const dp = new Date(notice.expDate);
                            const year1 = dp.getFullYear() + '/';
                            const month1 = ('0' + (dp.getMonth() + 1)).slice(-2) + '/';
                            const day1 = ('0' + dp.getDate()).slice(-2);


                            return(
                              <tr>
                              <th className ="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <span className ={ "ml-3 font-bold " + "text-blueGray-600"}>
                                  {notice.topic}
                                </span>
                              </th>
                              <td className="border-t-0  px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {notice.description}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {year + month + day}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {year1 + month1 + day1}
                              </td>
                              
                              
                            </tr>
                            )
                            })}
                        </tbody>
                      </table>
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
