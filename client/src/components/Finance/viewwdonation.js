// import React from "react";
// import { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import axios from "axios";

// // components
// import AdminNavbar from "components/Navbars/AdminNavbar.js";
// import Sidebar from "components/Sidebar/Sidebar.js";
// import FinanceHeader from "components/Finance/FinanceHeader.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";


// export default function ViewDonation() {
//   return (
//     <>
    
//   <main>
//   <Sidebar />
//     <div className="relative md:ml-64 bg-blueGray-100">
//       <AdminNavbar />
//       {/* Header */}
//       <FinanceHeader />
//       <section className="pb-18 relative block bg-white">
//       <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
//         <br /> <br /> <br /> <br /> 
//         <section className="relative block py-18 lg:pt-0 ">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
//               <div className="w-full lg:w-10/12 px-4">
//               <Link to="/CashReceive">
//                 <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
//                       type="submit" >
//                       Add Income
//                 </button> <br /><br />
//               </Link>
//                 <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
//                     <div className="rounded-t mb-0 px-4 py-3 border-0">
//                       <div className="flex flex-wrap items-center">
//                         <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//                           <h3 className="font-semibold text-base text-blueGray-700">
//                             Page visits
//                           </h3>
//                         </div>
//                         <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
//                           <button
//                             className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                             type="button"
//                           >
//                             See all
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="block w-full overflow-x-auto">
//                       {/* Projects table */}
//                       <table className="items-center w-full bg-transparent border-collapse">
//                         <thead>
//                           <tr>
//                             <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                               Page name
//                             </th>
//                             <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                               Visitors
//                             </th>
//                             <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                               Unique users
//                             </th>
//                             <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                               Bounce rate
//                             </th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
//                               /argon/
//                             </th>
//                             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                               4,569
//                             </td>
//                             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                               340
//                             </td>
//                             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                               <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
//                               46,53%
//                             </td>
//                           </tr>
//                           <tr>
//                             <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
//                               /argon/index.html
//                             </th>
//                             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                               3,985
//                             </td>
//                             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                               319
//                             </td>
//                             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                               <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
//                               46,53%
//                             </td>
//                           </tr>
//                           <tr>
//                             <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
//                               /argon/charts.html
//                             </th>
//                             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                               3,513
//                             </td>
//                             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                               294
//                             </td>
//                             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                               <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
//                               36,49%
//                             </td>
//                           </tr>
//                           <tr>
//                             <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
//                               /argon/tables.html
//                             </th>
//                             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                               2,050
//                             </td>
//                             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                               147
//                             </td>
//                             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                               <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
//                               50,87%
//                             </td>
//                           </tr>
//                           <tr>
//                             <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
//                               /argon/profile.html
//                             </th>
//                             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                               1,795
//                             </td>
//                             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                               190
//                             </td>
//                             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                               <i className="fas fa-arrow-down text-red-500 mr-4"></i>
//                               46,53%
//                             </td>
//                           </tr>
//                           <tr>
//                             <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
//                               /argon/profile.html
//                             </th>
//                             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                               1,795
//                             </td>
//                             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                               190
//                             </td>
//                             <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                               <i className="fas fa-arrow-down text-red-500 mr-4"></i>
//                               46,53%
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
          
//         </section>
        
//         </div>
//         <FooterAdmin />
//         </section>
        
//         </div>
//       </main>
      
//     </>
//   );
// }
import React from "react";
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FinanceHeader from "components/Finance/FinanceHeader.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";


export default function Fund() {
    const [searchTerm,setSearchTerm]=useState("");
  const [transaction,settransaction]=useState([])
  // const classes = useStyles();


  useEffect(()=>{
    axios.get("http://localhost:3001/transaction").then((response)=>{
        settransaction(response.data)
    })
  },[])    
  
  const getTotal = () => {
    let total = 0;
    transaction.forEach(tr => {
      if (tr.income > 0) {
        total += tr.income;
      } else {
        total -= tr.expense;
      }
    })
    return total;
  }
  return (
    <>
    
  <main>
  <Sidebar />
    <div className="relative md:ml-64 bg-blueGray-100">
      <AdminNavbar />
      {/* Header */}
      <FinanceHeader /> 
      <section className="pb-18 relative block bg-white">
      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
      <br /> <br /> <br /> <br /> 
      <section>
      <div className="container px-6 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-1/3 px-6 ml={120} ">
              <Link to="/AddReceivedfund">
                <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="submit" >
                      Add Received Fund
                </button> <br /><br />
              </Link>
          </div>
          <div className="w-1/3 px-6">
              <Link to="/AllocateFund">
                <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="submit" >
                      Allocate Fund
                </button> <br /><br />
              </Link>  
          </div>
        </div>
      </div>
      <div className={ " flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " + "bg-white" } >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1  ">
              <h3
                className={ "font-bold text-lg " + "text-emerald"  } >
                Petty Cash Account
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
                <tr>
                  <td> </td>
                  <td> </td>
                  <td> </td> 
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <b>Cash in Hand: </b>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <b>{getTotal()}</b>
                  </td>
                </tr>
                <tr
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    "bg-blueGray-50 text-blueGray-500 border-blueGray-100" }>
                <th className={ "px-12 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                    Date 
                </th>
                <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                    Receipt No  
                </th>
                <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                    Description  
                </th>
                <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                    Income  
                </th>
                <th className={ "px-6 align-middle border " + "bg-blueGray-50 text-blueGray-500 border-blueGray-100"}>
                    Expense  
                </th>

              </tr>
            </thead>
            <tbody>
            {transaction.map((record)=>{
                const dt = new Date(record.date);
                const year = dt.getFullYear() + '/';
                const month = ('0' + (dt.getMonth() + 1)).slice(-2) + '/';
                const day = ('0' + dt.getDate()).slice(-2);

                return(
              <tr>
                <th className ="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span className ={ "ml-3 font-bold " + "text-blueGray-600"}>
                    {year + month + day}
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {record.receiptno}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {record.description}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {record.income}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {record.expense}
                </td>
              </tr>
                )
              
            })} 
            
            </tbody>
          </table>
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

