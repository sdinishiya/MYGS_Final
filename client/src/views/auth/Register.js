import React, {useState} from "react";
import {USER_TYPES} from "../../constants/CommonConstants";
import {axiosInstance, BACKEND_API} from "../../axios/AxiosInstance";
import { useSnackbar } from 'notistack';
import { useHistory } from "react-router";
import {NAVIGATION_ROUTES} from "../../navigation/constant/NavigationRoutes";

export default function Register() {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const initialState = {
      firstName: "",
      lastName: "",
      userType: USER_TYPES.ADMIN,
      phone: "",
      address: "",
      email: "",
      password: "",
      status: 1,
  }
  const [regDetails, setRegDetails] = useState(initialState);

  const handleChange = (event) => {
    setRegDetails({
      ...regDetails,
      [event.target.name]: event.target.value
    })
  }

  const handleSignUpAsAdmin = () => {
    setRegDetails({
      ...regDetails, userType: USER_TYPES.ADMIN
    })
  }

  const handleSignUpAsClient = () => {
    setRegDetails({
      ...regDetails, userType: USER_TYPES.CLIENT
    })
  }

  const handleSignUpAsGuest = () => {
    setRegDetails({
      ...regDetails, userType: USER_TYPES.GUEST
    })
  }

  const handleRegister = async () => {

    if (regDetails.firstName === "" ||
        regDetails.lastName === "" ||
        regDetails.email === "" ||
        regDetails.phone === "" ||
        regDetails.address === "" ||
        regDetails.password === "")
    {
      enqueueSnackbar("Please fill in all fields", {
        variant: 'warning'
      });
      return;
    }

    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(regDetails.email)) {
      enqueueSnackbar("Please enter valid email", {
        variant: 'warning'
      });
      return;
    }

    await axiosInstance({
      method: "POST",
      url: BACKEND_API.REGISTER,
      data: regDetails
    }).then(res => {
      enqueueSnackbar(res.data.message, {
        variant: 'success'
      });
      history.push(NAVIGATION_ROUTES.login);
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
    });
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign up as
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-3 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSignUpAsAdmin}
                  >
                    {/*<img*/}
                    {/*  alt="..."*/}
                    {/*  className="w-5 mr-1"*/}
                    {/*  src={require("assets/img/github.svg").default}*/}
                    {/*/>*/}
                    Admin
                  </button>
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-3 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSignUpAsClient}
                  >
                    {/*<img*/}
                    {/*  alt="..."*/}
                    {/*  className="w-5 mr-1"*/}
                    {/*  src={require("assets/img/google.svg").default}*/}
                    {/*/>*/}
                    Client
                  </button>
                  <button
                      className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleSignUpAsGuest}
                  >
                    {/*<img*/}
                    {/*    alt="..."*/}
                    {/*    className="w-5 mr-1"*/}
                    {/*    src={require("assets/img/google.svg").default}*/}
                    {/*/>*/}
                    Guest
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Signing up as {regDetails.userType.toUpperCase()} user</small>
                </div>
                <form>
                  <div className="relative w-full mb-2">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      First Name
                    </label>
                    <input
                      type="email"
                      name="firstName"
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="First Name"
                    />
                  </div>

                  <div className="relative w-full mb-2">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                      Last Name
                    </label>
                    <input
                        name="lastName"
                        onChange={handleChange}
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Last Name"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                        name="email"
                        onChange={handleChange}
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                      Phone
                    </label>
                    <input
                        name="phone"
                        onChange={handleChange}
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="phone no."
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                      Address
                    </label>
                    <input
                        name="address"
                        onChange={handleChange}
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="address"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                        name="password"
                        onChange={handleChange}
                        type="password"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                    />
                  </div>

                  {/*<div>*/}
                  {/*  <label className="inline-flex items-center cursor-pointer">*/}
                  {/*    <input*/}
                  {/*      id="customCheckLogin"*/}
                  {/*      type="checkbox"*/}
                  {/*      className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"*/}
                  {/*    />*/}
                  {/*    <span className="ml-2 text-sm font-semibold text-blueGray-600">*/}
                  {/*      I agree with the{" "}*/}
                  {/*      <a*/}
                  {/*        href="#pablo"*/}
                  {/*        className="text-lightBlue-500"*/}
                  {/*        onClick={(e) => e.preventDefault()}*/}
                  {/*      >*/}
                  {/*        Privacy Policy*/}
                  {/*      </a>*/}
                  {/*    </span>*/}
                  {/*  </label>*/}
                  {/*</div>*/}

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleRegister}
                    >
                      Create {regDetails.userType.toUpperCase()} Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
