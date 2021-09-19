import React from "react";
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import VillagerHeader from "components/People/VillagerHeader.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";


export default function Schedule() {
    const [villagerID,setID] = useState("");
    const [villagerName,setName] = useState("");
    const [villagerTel,setTel] = useState("");
    const [villagerNIC,setNIC] = useState("");
    const [villagerAdd,setAdd] = useState("");
    const [villagerEmail,setEmail] = useState("");
    const history  = useHistory();

    const register = ()=>{
      console.log(villagerID);

    //   const d1 = new Date();
    //   const d2 = new Date(date);
    //   if (d2.getTime() < d1.getTime()) {
    //     alert("Date must be greater than today");
    //     return;
    //   }

      // var startTime = new String(startTime);
      // var endTime = new String(endTime);
      // var regExp = /(\d{1,2})\:(\d{1,2})\:(\d{1,2})/;
      // if(parseInt(endTime) > parseInt(startTime )){
      // alert("End time is greater");
      // }


       axios.post('http://localhost:3001/register_villagers',{
        villagerID:villagerID,
        villagerName:villagerName,
        villagerTel: villagerTel,
        villagerNIC:villagerNIC,
        villagerAdd:villagerAdd,
        villagerEmail:villagerEmail,

        }).then(()=>{
           console.log("success");
           //history.push("/Appointment/viewScheduled");
         });
    };
  return (
    <>
    
  <main>
  <Sidebar />
    <div className="relative md:ml-64 bg-blueGray-100">
      <AdminNavbar />
      {/* Header */}
      <VillagerHeader />
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
                        Register Villagers
                    </h1>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Villager ID
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="gsname" onChange={(event)=>{setID(event.target.value);}} 
                        required
                        placeholder="Villager ID"/>
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Full Name
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="gsname" onChange={(event)=>{setName(event.target.value);}} 
                        required
                        placeholder="Villager Name"/>
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Telephone
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="gsname" onChange={(event)=>{setTel(event.target.value);}} 
                        required
                        placeholder="Villager Tel"/>
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        NIC
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="gsname" onChange={(event)=>{setNIC(event.target.value);}} 
                        required
                        placeholder="Villager NIC"/>
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Permanent Address
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="gsname" onChange={(event)=>{setAdd(event.target.value);}} 
                        required
                        placeholder="Villager Add"/>
                    </div>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Email
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="gsname" onChange={(event)=>{setEmail(event.target.value);}} 
                        required
                        placeholder="Villager Email"/>
                    </div>
                    <box>
                    <div className="text-center mt-6">
                      <button
                        className="bg-emerald-450 text-white active:bg-emerald-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        onClick={register}
                      > Register 
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
