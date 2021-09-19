import React from "react";
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";

// components
import AgriMaterialNavbar from "components/Navbars/AgriMaterialNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import AgriMaterialHeader from "components/Material/AgriMaterialHeader.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";


export default function ViewSupplyAgri() {
  const [viewList,setviewList]=useState([])
  
      useEffect(()=>{
          axios.get("http://localhost:3001/agrisupply").then((response)=>{
              setviewList(response.data)
          })
      },[])

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
              {/* <Link to="/AddnewagriMaterial">
                  <button className="bg-emerald-400 text-white active:bg-emerald-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="submit" >
                          Add New Material
                  </button> 
                </Link>
                <Link to="/AddagriMaterial">
                  <button className="bg-emerald-400 text-white active:bg-emerald-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="submit" >
                          Add Material
                  </button> 
                </Link>
                <Link to="/AgriMaterial">
                  <button className="bg-emerald-400 text-white active:bg-emerald-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="submit" >
                          View Added Material
                  </button> 
                </Link>
                <Link to="/SupplyagriMaterial">
                  <button className="bg-emerald-400 text-white active:bg-emerald-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="submit" >
                          Distrubute Material    
                  </button>
                </Link>
                <Link to="/ViewSuppliedagriMaterial">
                  <button className="bg-emerald-400 text-white active:bg-emerald-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="submit" >
                          View Distrubuted Material
                  </button> <br/><br/>
                </Link> */}
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                      <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                          <h3 className="uppercase text-center font-bold text-base text-blueGray-700 ">
                            Detailed list of Distrubuted Agriculture Materials
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="block w-full overflow-x-auto">
                      {/* Projects table */}
                      <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                          <tr>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                              Distrubuted Date
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                              Material ID
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Material Name
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Beneficiary Name
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Description
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                              Quantity
                            </th>
                          </tr>
                        </thead>
                        <tbody> 
                          {viewList.map((record)=>{
                            const dt = new Date(record.supplieddate);
                            const year = dt.getFullYear() + '/';
                            const month = ('0' + (dt.getMonth() + 1 )).slice(-2) + '/';
                            const day = ('0' + dt.getDate()).slice(-2);
                            
                            return(
                              <tr>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                    {year + month + day} 
                                </td>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                    {record.materialid} 
                                </th>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                    {record.materialname} 
                                </th>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                    {record.name} 
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                    {record.description}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                    {record.quantity}
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





// import React from "react";
// import { useEffect, useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import axios from "axios";

// // components
// import AdminNavbar from "components/Navbars/AdminNavbar.js";
// import Sidebar from "components/Sidebar/Sidebar.js";
// import MaterialHeader from "components/Material/MaterialHeader.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";


// export default function ConstMaterial() {
//     const [searchTerm,setSearchTerm]=useState("");
//   const [transaction,settransaction]=useState([])
//   // const classes = useStyles();


//   useEffect(()=>{
//     axios.get("http://localhost:3001/transaction").then((response)=>{
//         settransaction(response.data)
//     })
//   },[])    
  
//   const getTotal = () => {
//     let total = 0;
//     transaction.forEach(tr => {
//       if (tr.income > 0) {
//         total += tr.income;
//       } else {
//         total -= tr.expense;
//       }
//     })
//     return total;
//   }
//   return (
//     <>
    
//   <main>
//   <Sidebar />
//     <div className="relative md:ml-64 bg-blueGray-100">
//       <AdminNavbar />
//       {/* Header */}
//       <MaterialHeader /> 
//       <section className="pb-18 relative block bg-white">
//       <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
//       <br /> <br /> <br /> <br /> 
//       <section>
//       <div className="container px-6 mx-auto">
//         <div className="flex flex-wrap">
//           <div className="w-1/3 px-6 ml={120} ">
//               <Link to="/AddnewconstMaterial">
//                 <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
//                       type="submit" >
//                       Add New Material
//                 </button> <br /><br />
//               </Link>
//           </div>
//           <div className="w-1/3 px-6">
//               <Link to="/AddconstMaterial">
//                 <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
//                       type="submit" >
//                       Add Material
//                 </button> <br /><br />
//               </Link>  
//           </div>
//           <div className="w-1/3 px-6 ml={120} ">
//               <Link to="/SupplyconstMaterial">
//                 <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
//                       type="submit" >
//                       Supply Material
//                 </button> <br /><br />
//               </Link>
//           </div>
//         </div>
//       </div>
//       <div className={ " flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " + "bg-white" } >
//         <div className="rounded-t mb-0 px-4 py-3 border-0">
//           <div className="flex flex-wrap items-center">
//             <div className="relative w-full px-4 max-w-full flex-grow flex-1  ">
//               <h3
//                 className={ "font-bold text-lg " + "text-emerald"  } >
//                 Petty Cash Account
//               </h3>
//             </div>
//           </div>
//         </div>
//         <div className="block w-full overflow-x-auto">
//           {/* Projects table */}
          
//           <table className="items-center w-full bg-transparent border-collapse">
//             <thead>
//                 <tr>
//                   <td> </td>
//                   <td> </td>
//                   <td> </td> 
//                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                       <b>Cash in Hand: </b>
//                   </td>
//                   <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                       <b>{getTotal()}</b>
//                   </td>
//                 </tr>
//                 <tr
//                   className={
//                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
//                     "bg-blueGray-50 text-blueGray-500 border-blueGray-100" }>
//                 <th className={ "px-12 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
//                     Date 
//                 </th>
//                 <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
//                     Receipt No  
//                 </th>
//                 <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
//                     Description  
//                 </th>
//                 <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
//                     Income  
//                 </th>
//                 <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
//                     Expense  
//                 </th>

//               </tr>
//             </thead>
//             <tbody>
//             {transaction.map((record)=>{
//                 const dt = new Date(record.date);
//                 const year = dt.getFullYear() + '/';
//                 const month = ('0' + (dt.getMonth() + 1)).slice(-2) + '/';
//                 const day = ('0' + dt.getDate()).slice(-2);

//                 return(
//               <tr>
//                 <th className ="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
//                   <span className ={ "ml-3 font-bold " + "text-blueGray-600"}>
//                     {year + month + day}
//                   </span>
//                 </th>
//                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                     {record.receiptno}
//                 </td>
//                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                     {record.description}
//                 </td>
//                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                     {record.income}
//                 </td>
//                 <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                     {record.expense}
//                 </td>
//               </tr>
//                 )
              
//             })} 
            
//             </tbody>
//           </table>
//         </div>
//       </div>
//       </section> 
//         </div>
//         <FooterAdmin />
//         </section>
        
//         </div>
//       </main>
      
//     </>
//   );
// }
