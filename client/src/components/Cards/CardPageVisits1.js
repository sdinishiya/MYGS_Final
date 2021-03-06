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

// components

export default function CardPageVisits1() {
  
  const [notices,setnotices]=useState([])


  useEffect(()=>{
    axios.get("http://localhost:3001/smsview").then((response)=>{
        setnotices(response.data)
    })
  },[])
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                General SMS Sent
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
            <Link to="/AllMessageView">
                <button className="bg-emerald-400 text-white active:bg-emerald-400 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="submit" >
                      View 
                </button> <br /><br />
              </Link>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                          <tr>
                          <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                              Title   
                          </th>
                          {/* <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                              Description  
                          </th> */}
                          <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                              Date   
                          </th>
                          <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                              Group Type
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
                              {/* <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {notice.description}
                              </td> */}
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {year + month + day}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {notice.type}
                              </td>
                              
                              
                              
                            </tr>
                            )
                            })}
                        </tbody>
                      </table>
        </div>
      </div>
    </>
  );
}
