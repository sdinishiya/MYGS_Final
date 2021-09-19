import React from "react";
import { Link } from "react-router-dom";

// components

import CardStats from "components/Cards/CardStats.js";

export default function ConstMaterialHeader() {
  return (
    <>
      {/* Header */}
      <div className=" bg-emerald-450 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card 1 */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <Link to="/AddnewconstMaterial">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                            Materials
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                            Construction Materials
                            </span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                            <div className={ "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500" }>
                                <i className="far fa-chart-bar" ></i>
                            </div>
                        </div>
                   </div>
                   </Link>
                 </div>
               </div>
             </div>
            {/* card2 */}
            <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <Link to="/AddnewagriMaterial">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                            Materials
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                            Agriculture Materials
                            </span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                            <div className={ "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-emerald-400" }>
                                <i className="far fa-chart-bar" ></i>
                            </div>
                        </div>
                   </div>
                   </Link>
                 </div>
               </div>
             </div>
             {/* card 3 */}
             <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <Link to="/AddnewotherMaterial">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                            Materials
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                            Other Materials
                            </span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                            <div className={ "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500" }>
                                <i className="far fa-chart-bar" ></i>
                            </div>
                        </div>
                   </div>
                   </Link>
                 </div>
               </div>
             </div><br/><br/><br/><br/><br/>
              <div classname="align-left lg:w-10/12">
                <Link to="/AddnewconstMaterial">
                    <button className="bg-emerald-400 text-white active:bg-emerald-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="submit" >
                            Add New Material
                    </button> 
                  </Link>
                  <Link to="/AddconstMaterial">
                    <button className="bg-emerald-400 text-white active:bg-emerald-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="submit" >
                            Add Material
                    </button> 
                  </Link>
                  <Link to="/ConstMaterial">
                    <button className="bg-emerald-400 text-white active:bg-emerald-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="submit" >
                            View Added Material
                    </button> 
                  </Link>
                  <Link to="/SupplyconstMaterial">
                    <button className="bg-emerald-400 text-white active:bg-emerald-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="submit" >
                            Distrubute Material    
                    </button>
                  </Link>
                  <Link to="/ViewSuppliedconstMaterial">
                    <button className="bg-emerald-400 text-white active:bg-emerald-300 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="submit" >
                            View Distrubuted Material
                    </button> 
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
