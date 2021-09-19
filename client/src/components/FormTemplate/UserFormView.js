import React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import props from 'prop-types';

// components
import Navbarloglanding from "components/Navbars/Navbarlanding";
import Footer from "components/Footers/Footer.js";
import UserHeader from "components/Headers/UserHeader.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

import CardTable from "components/Cards/CardTable.js";
import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function UserFormView() {

//view
  const [forms,setforms]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3001/activeForm").then((response)=>{
        setforms(response.data)
    })
  },[])
 //download
  const [downloadform,setdownloadform]=useState([]);
      const download = (formID) => {

      axios.get("http://localhost:3001/download").then((response)=>{
          setdownloadform(response.data)
        })

        .then((response) => {
          
        });
      alert(" Form Downloaded Successfully ");
    };
      
       
  return (
    <>
    
  <main>

  <Navbarloglanding transparent />
      {/* Header */}
      <UserHeader />
      <section className="pb-18 relative block bg-white">
      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <br /> <br /> <br />
        <section className="relative block py-18 lg:pt-0 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-11/12 px-4">

                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                      <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                          <h3 className="font-semibold uppercase text-center text-base text-blueGray-700">
                             Form Template Details
                          </h3>
                        </div>
                      
                      </div>
                    </div>
                    <div className="block w-full overflow-x-auto">
                      <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                          <tr>
                          <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                              Form ID Number   
                          </th>
                          <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                                
                          </th>
                          <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                              Form Topic    
                          </th>
                          <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                              Description  
                          </th>
                          <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                              Expiry Date  
                          </th>
                          <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                              Date Uploaded  
                          </th>
                          <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                        
                          </th>
                          
                          
                          
                          </tr>
                        </thead>
                        <tbody>
                        {forms.map((form)=>{
                            const dt = new Date(form.UploadDate);
                            const year = dt.getFullYear() + '/';
                            const month = ('0' + (dt.getMonth() + 1)).slice(-2) + '/';
                            const day = ('0' + dt.getDate()).slice(-2);

                            const dp = new Date(form.expDate);
                            const year1 = dp.getFullYear() + '/';
                            const month1 = ('0' + (dp.getMonth() + 1)).slice(-2) + '/';
                            const day1 = ('0' + dp.getDate()).slice(-2);


                            return(
                              <tr>
                                <th className ="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                <span className ={ "ml-3 font-bold " + "text-blueGray-600"}>
                                  {form.formID}
                                </span>
                                
                                
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                                    <img
                                      src={require("assets/forms/pdf.png").default}
                                      alt="..."
                                      className="w-10 h-10 border-1 border-blueGray-50 "
                                    ></img>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {form.formTopic}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {form.description}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {year1 + month1 + day1}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {year + month + day}
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <Link to="/UserFormView">
                                  <button className="bg-emerald-300 text-white active:bg-emerald-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                        type="submit" 
                                        onClick={() => download(form.formID)}>  {" "}  
                                        Download
                                  </button>
                                </Link>  
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
    
      </main>
      
    </>
  );
}
