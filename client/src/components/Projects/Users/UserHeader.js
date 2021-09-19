import React from "react";
import { Link } from "react-router-dom";

// components

import CardStats from "components/Cards/CardStats.js";

export default function ProjectUserHeader() {
  return (
    <>
      {/* Header */}
      <div className=" bg-emerald-450 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card 1 */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-4/12 px-">
              <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                <Link to="UserPastProject">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                            Project
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                            Past Projects
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
             </div>
            {/* card2 */}
            <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                <Link to="UserPresentProjects">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                            Project
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                            On Going Projects
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
             {/* card 3 */}
             <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                <Link to="UserFutureProject">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                            Project
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                            Future Projects
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

            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
