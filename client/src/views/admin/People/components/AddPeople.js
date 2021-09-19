import React, {useState} from "react";
import {axiosInstance, BACKEND_API} from "../../../../axios/AxiosInstance";
import Sidebar from "../../../../components/Sidebar/Sidebar";
import AdminNavbar from "../../../../components/Navbars/AdminNavbar";
import FooterAdmin from "../../../../components/Footers/FooterAdmin";
import PeopleHeader from "./PeopleHeader";
import {useSnackbar} from "notistack";
import {useHistory} from "react-router";
import {NAVIGATION_ROUTES} from "../../../../navigation/constant/NavigationRoutes";

export const AddPeople = () => {
    const { enqueueSnackbar } = useSnackbar();
    const initialState = {
        regId: "",
        firstName: "",
        lastName: "",
        nic: "",
        dob: "",
        address: "",
        phone: "",
        homeNo: "",
        status: "",
        incomeStatus: ""
    }
    const [newDetails, setNewDetails] = useState(initialState)
    const [saveIsLoading, setSaveIsLoading] = useState(false)
    const history = useHistory();

    const handleSave = async () => {
        if (
            newDetails.regId === "" ||
            newDetails.firstName === "" ||
            newDetails.lastName === "" ||
            newDetails.dob === "" ||
            newDetails.address === "" ||
            newDetails.phone === "" ||
            newDetails.homeNo === "" ||
            newDetails.incomeStatus === "" ||
            newDetails.status === ""
        ) {
            enqueueSnackbar("Please fill in all fields", {
                variant: 'warning'
            });
            return;
        }

        setSaveIsLoading(true)
        await axiosInstance({
            method: "POST",
            url: BACKEND_API.ADD_PEOPLE,
            data: newDetails
        }).then(() => {
            enqueueSnackbar("Added Person", {
                variant: 'success'
            });
            history.push(NAVIGATION_ROUTES.peopleManagement)
            setNewDetails(initialState);
        }).catch((error) => {
            if (error.response) {
                enqueueSnackbar(error.response.data.message, {
                    variant: 'error'
                });
            } else {
                enqueueSnackbar("Something went wrong", {
                    variant: 'error'
                });
            }
        }).finally(() => {
            setSaveIsLoading(false);
        })
    }

    const handleChange = (event) => {
        setNewDetails({
            ...newDetails,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <main>
                <Sidebar />
                <div className="relative md:ml-64 bg-blueGray-100">
                    <AdminNavbar />
                    {/* Header */}
                    <PeopleHeader />
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
                                                        ADD NEW PEOPLE
                                                    </h1>
                                                    <div className="relative w-full mb-1 mt-1">
                                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                            Reg ID
                                                        </label>
                                                        <input type="text"
                                                               className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                               name="regId"
                                                               onChange={handleChange}
                                                               required
                                                               placeholder="Reg ID"/>
                                                    </div>
                                                    <div className="relative w-full mb-1 mt-2">
                                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                            NIC
                                                        </label>
                                                        <input type="text"
                                                               className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                               name="nic"
                                                               onChange={handleChange}
                                                               required
                                                               placeholder="NIC"/>
                                                    </div>
                                                    <div className="relative w-full mb-1 mt-2">
                                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                            First Name
                                                        </label>
                                                        <input type="text"
                                                               className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                               name="firstName"
                                                               onChange={handleChange}
                                                               required
                                                               placeholder="First Name"/>
                                                    </div>
                                                    <div className="relative w-full mb-1 mt-2">
                                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                            Last Name
                                                        </label>
                                                        <input type="text"
                                                               className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                               name="lastName"
                                                               onChange={handleChange}
                                                               required
                                                               placeholder="Last Name"/>
                                                    </div>
                                                    <div className="relative w-full mb-1 mt-2">
                                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                            Date of Birth
                                                        </label>
                                                        <input type="date"
                                                               name="dob"
                                                               onChange={handleChange}
                                                               required
                                                               className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                                                    </div>
                                                    <div className="relative w-full mb-1 mt-2">
                                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                                                            Address
                                                        </label>
                                                        <textarea
                                                            rows="2"
                                                            cols="80"
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                            name="address"
                                                            onChange={handleChange}
                                                            required
                                                            placeholder="Address..."
                                                        />
                                                    </div>
                                                    <div className="relative w-full mb-1 mt-2">
                                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                            Phone Number
                                                        </label>
                                                        <input type="text"
                                                               className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                               name="phone"
                                                               onChange={handleChange}
                                                               required
                                                               placeholder="Phone No"/>
                                                    </div>
                                                    <div className="relative w-full mb-1 mt-2">
                                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                            Home Number
                                                        </label>
                                                        <input type="text"
                                                               className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                               name="homeNo"
                                                               onChange={handleChange}
                                                               required
                                                               placeholder="Home No"/>
                                                    </div>
                                                    <div className="relative w-full mb-1 mt-2">
                                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                            Status
                                                        </label>
                                                        <input type="text"
                                                               className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                               name="status"
                                                               onChange={handleChange}
                                                               required
                                                               placeholder="Status"/>
                                                    </div>
                                                    <div className="relative w-full mb-1 mt-2">
                                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                            Income Status
                                                        </label>
                                                        <input type="text"
                                                               className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                               name="incomeStatus"
                                                               onChange={handleChange}
                                                               required
                                                               placeholder="Income Status"/>
                                                    </div>

                                                    <box>
                                                        <div className="text-center mt-6">
                                                            <button
                                                                className="bg-emerald-450 text-white active:bg-emerald-300 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                type="submit"
                                                                onClick={handleSave}
                                                                disabled={saveIsLoading}
                                                            > Add
                                                            </button>

                                                            <button
                                                                className="bg-red-100 text-white active:bg-red-100 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                type="button"
                                                                onClick={() => setNewDetails(initialState)}
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
