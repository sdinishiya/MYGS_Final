
import React from "react";
import { Link } from "react-router-dom";

// components


export default function NoticeHeader() {
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
                    <Link to="/AddNotice">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                            Notices
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                            Add New Notices
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
                    <Link to="/AddMessage">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                            SMS
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                            Send General Messages
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
                    <Link to="/MessageView">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                            View
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                            View Past SMS Messages
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

            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
