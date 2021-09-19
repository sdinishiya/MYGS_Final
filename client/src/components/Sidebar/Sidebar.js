/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";
import {useHistory} from "react-router";
import {NAVIGATION_ROUTES} from "../../navigation/constant/NavigationRoutes";

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    const history = useHistory();
    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    {/* Brand */}
                    <Link
                        className="md:block text-center md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-10"
                        to="/landing"
                    >
                        Meet Your GS
                    </Link>
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                            <NotificationDropdown />
                        </li>
                        <li className="inline-block relative">
                            <UserDropdown />
                        </li>
                    </ul>
                    {/* Collapse */}
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                            collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link
                                        className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                        to="/"
                                    >
                                        MeetYourGS
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() => setCollapseShow("hidden")}
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Form */}
                        <form className="mt-6 mb-4 md:hidden">
                            <div className="mb-3 pt-0">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                                />
                            </div>
                        </form>

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        {/* Heading */}
                        <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            Admin Layout Pages
                        </h6>
                        {/* Navigation */}

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/admin/dashboard") !== -1
                                            ? "text-emerald-500 hover:text-emerald-500"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/admin/dashboard"
                                >
                                    <i
                                        className={
                                            "fas fa-tv mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin/dashboard") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    />{" "}
                                    Dashboard
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/admin/settings") !== -1
                                            ? "text-emerald-500 hover:text-emerald-500"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/admin/settings"
                                >
                                    <i
                                        className={
                                            "fas fa-user mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin/settings") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    />{" "}
                                    GS Profile
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/noticeView") !== -1
                                            ? "text-emerald-500 hover:text-emerald-500"
                                            : "text-blueGray-700 hover:text-blueGray-500") }
                                    to="/noticeView">
                                    <i
                                        className={
                                            "fas fa-table mr-2 text-sm " +
                                            (window.location.href.indexOf("/noticeView") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")}>
                                    </i>{" "}
                                    General Notices
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf(NAVIGATION_ROUTES.peopleManagement) !== -1
                                            ? "text-emerald-500 hover:text-emerald-500"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to={NAVIGATION_ROUTES.peopleManagement}
                                >
                                    <i
                                        className={
                                            "fas fa-users mr-2 text-sm " +
                                            (window.location.href.indexOf(NAVIGATION_ROUTES.peopleManagement) !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    />{" "}
                                    People Management
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className={ "text-xs uppercase py-3 font-bold block " + (window.location.href.indexOf("/ViewScheduled") !== -1
                                        ? "text-emerald-500 hover:text-emerald-500"
                                        : "text-blueGray-700 hover:text-blueGray-500")}
                                    to="/ViewScheduled"
                                >
                                    <i  className={ "fas fa-calendar-check mr-2 text-sm " + (window.location.href.indexOf("/ViewScheduled") !== -1 ? "opacity-75"
                                        : "text-blueGray-300") }> </i>{" "}
                                    Appointments
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/admin/Finance") !== -1
                                            ? "text-emerald-500 hover:text-emerald-500"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/ViewDonation"
                                >
                                    <i
                                        className={
                                            "fas fa-donate mr-2 text-sm " +
                                            (window.location.href.indexOf("/ViewDonation") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    ></i>{" "}
                                    Finance
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/FormTemplateView") !== -1
                                            ? "text-emerald-500 hover:text-emerald-500"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/FormTemplateView"
                                >
                                    <i
                                        className={
                                            "fas fa-file mr-2 text-sm " +
                                            (window.location.href.indexOf("/FormTemplateView") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    ></i>{" "}
                                    Offical Forms
                                </Link>
                            </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/maps") !== -1
                      ? "text-emerald-500 hover:text-emerald-500"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/PresentProjects"
                >
                  <i
                    className={
                      "fas fa-book mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/maps") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Projects
                </Link>
              </li>

                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/admin/maps") !== -1
                                            ? "text-emerald-500 hover:text-emerald-500"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/admin/maps"
                                >
                                    <i
                                        className={
                                            "fas fa-hands-helping mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin/maps") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    ></i>{" "}
                                    Business Support
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/AddnewconstMaterial") !== -1
                                            ? "text-emerald-500 hover:text-emerald-500"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/AddnewconstMaterial"
                                >
                                    <i
                                        className={
                                            "fas fa-shopping-cart mr-2 text-sm " +
                                            (window.location.href.indexOf("/AddnewconstMaterial") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    ></i>{" "}
                                    Resource & Materials
                                </Link>
                            </li>
                        </ul>

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        {/* Heading */}
                        <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                            Information Handling
                        </h6>
                        {/* Navigation */}

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/AddForum") !== -1
                                            ? "text-emerald-500 hover:text-emerald-500"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/AddForum"
                                >
                                    <i
                                        className={
                                            "fas fa-comments mr-2 text-sm " +
                                            (window.location.href.indexOf("/AddForum") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    ></i>{" "}
                                    Forum Discussion
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf(NAVIGATION_ROUTES.chat) !== -1
                                            ? "text-emerald-500 hover:text-emerald-500"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to={NAVIGATION_ROUTES.chat}
                                >
                                    <i
                                        className={
                                            "fas fa-comment-dots mr-2 text-sm " +
                                            (window.location.href.indexOf(NAVIGATION_ROUTES.chat) !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    ></i>{" "}
                                    Query Details
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf(NAVIGATION_ROUTES.complaints) !== -1
                                            ? "text-emerald-500 hover:text-emerald-500"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to={NAVIGATION_ROUTES.complaints}
                                >
                                    <i
                                        className={
                                            "fas fa-address-card mr-2 text-sm " +
                                            (window.location.href.indexOf(NAVIGATION_ROUTES.complaints) !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    />{" "}
                                    Complaint Handling
                                </Link>
                            </li>

                            {/* <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/auth/login"
                >
                  <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Login
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/auth/register"
                >
                  <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>{" "}
                  Register
                </Link>
              </li> */}
                        </ul>

                        {/* Divider */}
                        {/* <hr className="my-4 md:min-w-full" /> */}
                        {/* Heading */}
                        {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              No Layout Pages
            </h6> */}
                        {/* Navigation */}

                        {/* <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/landing"
                >
                  <i className="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Landing Page
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/profile"
                >
                  <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Profile Page
                </Link>
              </li>
            </ul> */}

                        {/* Divider */}
                        {/* <hr className="my-4 md:min-w-full" /> */}
                        {/* Heading */}
                        {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Documentation
            </h6> */}
                        {/* Navigation */}
                        {/* <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/colors/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fas fa-paint-brush mr-2 text-blueGray-300 text-base"></i>
                  Styles
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-css3-alt mr-2 text-blueGray-300 text-base"></i>
                  CSS Components
                </a>
              </li>

             

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-js-square mr-2 text-blueGray-300 text-base"></i>
                  Javascript
                </a>
              </li>

              
              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-react mr-2 text-blueGray-300 text-base"></i>
                  React
                </a>
              </li>

            
            </ul> */}
                    </div>
                </div>
            </nav>
        </>
    );
}
