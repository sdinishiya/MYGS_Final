import React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import props from 'prop-types';

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import NoticeHeader from "components/Notice/NoticeHeader.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function AllmessageView() {

      // var msg= topic+' '+description+' '+uploadDate+'';
      // axios.get(`https://www.textit.biz/sendmsg?id=94711655166&pw=9411&to=${phone}&text=${msg}`);
      // console.log(`https://www.textit.biz/sendmsg?id=94711655166&pw=9411&to=${phone}&text=${msg}`)
      // console.log(smsID);


  const [notices,setnotices]=useState([])
  

  useEffect(()=>{
    axios.get("http://localhost:3001/allsmsview").then((response)=>{
        setnotices(response.data)

    })
  },[])


    // activate
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

    // axios.post('http://localhost:3001/send-sms',{
    //     to :to,
    //     message:message,
    //     status:status,

    //     }).then(()=>{
    //        console.log("success");

    //      });

    //      alert("Sent successfully ");
    // };

     // remove
     const [remove, setdecline] = useState("Removed");
     const removesms = (smsID) => {
       axios
         .put("http://localhost:3001/remove-sms", {
           status: status,
           smsID: smsID,
         })
 
         .then((response) => {
           console.log(smsID);
         });
       alert(" SMS Removed ");
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
              <Link to="/MessageView">
                <button className="bg-emerald-400 text-white active:bg-emerald-400 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="submit" >
                      View Sent SMS
                </button> <br /><br />
              </Link>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                      <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                          <h3 className="font-semibold text-base text-blueGray-700">
                              All SMS Message Details 
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
                              Event Date  
                          </th>
                          {/* <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                              Villager Group 
                          </th> */}
                          <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                              Status  
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
                              <th className ="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                <span className ={ "ml-3 font-bold " + "text-blueGray-600"}>
                                  {notice.topic}
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {notice.description}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {year + month + day}
                              </td>
                              {/* <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {notice.type}
                              </td> */}
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {notice.status}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {(notice.status!="Sent")?
                              <Link to={`/EditMessage/${notice.smsID}`}>
                                <button className="bg-emerald-400 text-white active:bg-emerald-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                      type="submit" 
                                      onClick={() => (notice.smsID)}>  {" "}         
                                      Edit
                                </button>
                                </Link>  : ""
                              }
                              {(notice.status!="Sent")?
                                <Link to="/MessageView">
                                <button className="bg-emerald-400 text-white active:bg-emerald-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                      type="submit" 
                                      onClick={() => sendSMS(notice.smsID)}>  {" "}         
                                      Send
                                </button>
                                </Link>  : ""
                                }
                                {(notice.status!="Sent")?
                                <Link to="/MessageView">
                                <button className="bg-red-500 text-white active:bg-emerald-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                      type="submit" 
                                      onClick={() => removesms(notice.smsID)}>  {" "}  
                                      Remove
                                </button>
                                </Link>  : ""
                                }
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
