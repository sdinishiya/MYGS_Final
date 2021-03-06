import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";

import { useParams } from "react-router-dom";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import NoticeHeader from "components/Notice/NoticeHeader.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";


export default function AddMessage() {

  const [gettype,setgettype] = useState ([])

    const [smsID,setID] = useState("");
    const [topic,setTopic] = useState("");
    const [description,setDescription] = useState("");
    const [uploadDate,setUploadDate] = useState("");
    const [expDate,setExpDate] = useState("");
    const [phone,setphone] = useState("");
    const [type,settype] = useState("");
    const [status,setStatus] = useState("");

    const [to,setTo] = useState("");
    const [message,setMessage] = useState("");
    const history  = useHistory();

    const messageadd = ()=>{

     
      const d1 = new Date(uploadDate);
      const d2 = new Date(expDate);
      if (d2< d1) {
        alert("Expiry Date must be after the Date Upoaded");
        return;
      }

       axios.post('http://localhost:3001/addsms',{
        topic:topic,
        description:description,
        uploadDate: uploadDate,
        phone:phone,
        expDate:expDate,
        type:type,
        status:status,

        }).then(()=>{
           console.log("success");

         });

         alert("Added successfully ");
        history.push("/MessageView");
    };

  //dropdown
  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get('http://localhost:3001/smstype', {
            
        });
        setgettype(response.data);
        console.log(response.data);
    };
    
    fetchData();
}, []);

const mystyle = {
    
  formControl: {
    minWidth: '454px',
  },
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
        <br /> <br /> <br /> <br />
        <section className="relative block py-18 lg:pt-0 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-emerald-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h1 className="text-2xl font-semibold text-center justify-center">
                        ADD NEW GENERAL SMS MESSAGE
                    </h1>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Topic
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="topic" onChange={(event)=>{setTopic(event.target.value);}} 
                        required
                        placeholder="Topic"/>
                    </div>
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                        SMS Message Body
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        name="description" onChange={(event)=>{setDescription(event.target.value);}} 
                        required
                        placeholder="Type a message to send SMS...."
                      />
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Date 
                      </label>
                      <input type="date"
                        name="uploadDate" onChange={(event)=>{setUploadDate(event.target.value);}} 
                        required
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                    </div>
                    {/* <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Phone Number
                      </label>
                      <input type="int"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="phone" onChange={(event)=>{setphone(event.target.value);}} 
                        required
                        placeholder="Enter Phone No..."/>
                    </div> */}
                    {/* <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Select Type
                      </label>

                      <FormControl className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                           <Select
                               native
                               onChange={(event) => {settype(event.target.value); }}
                               style={mystyle.search} >
                                    
                               <option aria-label="None" value="" />
                               {gettype.map((record) => (
                                  //  <option Value={record.ID}>{record.type}</option>
                                   <option Value={record.ID}>{record.type}</option>
                               ))}

                           </Select>
                       </FormControl><br /> 
                    </div> */}

                    <box>
                    <div className="text-center mt-6">
                      <button
                        className="bg-emerald-450 text-white active:bg-emerald-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        onClick={messageadd}
                      > Add 
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
