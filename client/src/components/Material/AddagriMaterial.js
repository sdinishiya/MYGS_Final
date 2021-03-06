import React from "react";
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

// components
import AgriMaterialNavbar from "components/Navbars/AgriMaterialNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import AgriMaterialHeader from "components/Material/AgriMaterialHeader.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";


export default function AddconstMaterial() {
    const [getmaterial,setgetmaterial] = useState ([])
    const [addeddate,setaddeddate] = useState("");
    const [materialid,setmaterialid] = useState("");
    const [materialname,setmaterialname] = useState("");
    const [description,setdescription] = useState("");
    const [quantity,setquantity] = useState("");
    
    const history = useHistory();
    // const [materialList,setmaterialList] = useState([]);

    const add_Materials = (e)=>{
      e.preventDefault();
      console.log(materialid);
       axios.post('http://localhost:3001/agri',{
        addeddate:addeddate,
        materialid:materialid,
        materialname:materialname,
        description:description,
        quantity:quantity,

        }).then(()=>{
           console.log("success");
           history.push("/AgriMaterial");
         });  
    };
  
  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get('http://localhost:3001/agrimaterial', {
            
        });
        setgetmaterial(response.data);
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
      <AgriMaterialNavbar />
      {/* Header */}
      <AgriMaterialHeader />
      <section className="pb-18 relative block bg-white">

      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <br /> <br /> <br /> <br /> 
        <section className="relative block py-18 lg:pt-0 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-10/12 px-4">
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-emerald-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h1 className="text-2xl font-semibold uppercase text-center justify-center">
                        Add Agriculture Material
                    </h1>
                    
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Date
                      </label>
                      <input type="date"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="Date" onChange={(event)=>{setaddeddate(event.target.value);}} 
                        required
                        placeholder="Date"/>
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                    <labe className="block uppercase text-blueGray-600 text-xs font-bold mb-2"> Material Name </labe> 
                   
                    <FormControl className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                            <Select
                                native
                                onChange={(event) => { setmaterialid(event.target.value); }}
                                style={mystyle.search} >
                                               
                                <option aria-label="None" value="" />
                                {getmaterial.map((record) => (
                                    <option Value={record.materialid}>{record.materialname}</option>
                                ))}
                            </Select>
                        </FormControl><br /> 
                      
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Description
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="Description" onChange={(event)=>{setdescription(event.target.value);}} 
                        required
                        placeholder="Description..."/>
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        Quantity
                      </label>
                      <input type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="Quantity" onChange={(event)=>{setquantity(event.target.value);}} 
                        required
                        placeholder="Enter Quantity..."/>
                    </div>
                    
                    <box>
                    <div className="text-center mt-6">
                      <button
                        className="bg-emerald-450 text-white active:bg-emerald-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        onClick={add_Materials}>
                          ADD 
                      </button>
                      <Link to = '/AgriMaterial'>
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

