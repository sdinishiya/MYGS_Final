import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios';

// components

import Navbarloglanding from "components/Navbars/Navbarlanding";
import Footer from "components/Footers/Footer.js";
import { useTranslation } from "react-i18next";

export default function LogLanding() {
  const {t,i18n}= useTranslation()

  const [viewList,setviewList]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3001/noticeview").then((response)=>{
        setviewList(response.data)
        console.log("reach")
    })
  },[])

  return (
    <>
      <Navbarloglanding transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
              "url(" + require("assets/img/gs3.jpg").default + ")",
            }}
          >
            <span
    id="blackOverlay"
    className="w-full h-full absolute opacity-75 bg-black"
    />
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                      MEET YOUR GS
                  </h1>
                  <br/>
                  <h3 className="text-white font-semibold text-2xl">
                    {t("sub_title")}  
                  </h3>
                  <p className="mt-4 text-lg text-blueGray-200">
                    {t("sub_title_h3")}
                      
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
            {viewList.map((record)=>{
                            const dt = new Date(record.uploadDate);
                            const year = dt.getFullYear() + '/';
                            const month = ('0' + (dt.getMonth() + 1)).slice(-2) + '/';
                            const day = ('0' + dt.getDate()).slice(-2);

                            const dt1 = new Date(record.expDate);
                            const year1 = dt1.getFullYear() + '/';
                            const month1 = ('0' + (dt1.getMonth() + 1)).slice(-2) + '/';
                            const day1 = ('0' + dt1.getDate()).slice(-2);


              return( 
           
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">{record.topic} </h6>
                    <p className="mt-2 mb-4 text-black">
                      Deadline : {year1 + month1 + day1} | Posted: {year + month + day} 
                    </p>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      {record.description}
                    </p>
                  </div>
                </div>
              </div>
              )
            })}

            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-download text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  {t("download")}
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  {t("download_body")}
                </p>
                {/* <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p> */}
                 <Link to="/UserFormView" className="font-bold text-blueGray-700 mt-8">
                  {t("click")}
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <Link to="/UserFormView" className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-300">
                  <img
                    alt="..."
                    src={require("assets/img/img-form.jpg").default}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-emerald-300 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      {t("forms")}
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                     {t("form_body")}
                    </p>
                  </blockquote>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}>
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0">
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100">
              </polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <Link to="/UserPresentProject" className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-400">
                  <img
                    alt="..."
                    className="max-w-full rounded-lg"
                    src={require("assets/img/img-cons.jpg").default}/>
                  
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px">
                        <polygon
                        points="-30,95 583,95 583,65"
                        className="text-emerald-400 fill-current"> 
                        </polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                     {t("project")}
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      {t("project_details")}
                    </p>
                  </blockquote>
                </Link>   
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  {/* <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div> */}
                  <h3 className="text-3xl font-semibold">{t("project_name")}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    {t("project_name")} 
                  </p>
                  
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <Link to="UserPastProject" className="font-bold flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            {t("past")}
                          </h4>
                        </div>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="UserPresentProject" className="font-bold flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                           {t("current")}
                          </h4>
                        </div>
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="/UserFutureProject" className="font-bold flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            {t("future")}
                          </h4>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                {/* <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-download text-xl"></i>
                </div> */}
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  {t("resource_details")}
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                   {t("resource_details_body")}
                </p>
                <Link to="/Users/Const" className="font-bold text-blueGray-700 mt-8">
                  {t("click_resource")}
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <br/><br/><br/>
                <Link to="/Users/Const" className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-300">
                  <img
                    alt="..."
                    className="max-w-full rounded-lg"
                    src={require("assets/img/img-rec.png").default}/>
                  
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px">
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-emerald-300 fill-current">
                        </polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                     {t("resource")}
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      {t("resource_body")}
                    </p>
                  </blockquote>
                </Link> 
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <Link to="/UserView" className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-400">
                <img
                  alt="..."
                  className="max-w-full rounded-lg"
                  src={require("assets/img/img-book.jpg").default}/>
                
                <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-emerald-400 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      {t("appointment")}
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      {t("schedule_appointment")}
                    </p>
                  </blockquote>
              </Link>   
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  {/* <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div> */}
                  <h3 className="text-3xl font-semibold">{t("make_appointment")}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    {t("make_appointment_body")} 
                  </p>
                  <Link to="/UserView" className="font-bold text-blueGray-700 mt-8">
                    {t("click_make_appointment")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                {/* <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-download text-xl"></i>
                </div> */}
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  {t("donation")}
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  {t("donation_make")}
                </p>
                <Link to="/donate2" className="font-bold text-blueGray-700 mt-8">
                  {t("click_donation_make")}
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <br/><br/><br/>
              <Link to="/donate2" className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-300">
                <img
                  alt="..."
                  className="max-w-full rounded-lg"
                  src={require("assets/img/img-donate.jpg").default}/>
                
                <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-emerald-300 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      {t("donate")}
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      {t("donate_body")}
                    </p>
                  </blockquote>
              </Link> 
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}>
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0">
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <Link to="/chat" className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-400">
                <img
                  alt="..."
                  className="max-w-full rounded-lg"
                  src={require("assets/img/img-forum.jpg").default}/>
                <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-emerald-400 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      {t("forum")}
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      {t("forum_body")}
                    </p>
                  </blockquote>
              </Link>   
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
              
                  <h3 className="text-3xl font-semibold">{t("forum_discussion")}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                   {t("forum_discussion_body")} 
                  </p>
                  <Link to="/Pages/Forumpage" className="font-bold text-blueGray-700 mt-8">
                   {t("click_forum")}
                </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
