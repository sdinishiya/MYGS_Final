import axios from 'axios';

// TLD Address
const BASE_URL = "http://localhost:3001"

export const axiosInstance = axios.create({
    // one minute timeout
    timeout: 60000
});

export const BACKEND_API = {
    SIGN_IN: BASE_URL + "/auth/login",
    REGISTER: BASE_URL + "/auth/sign-up",
    GET_PEOPLE: BASE_URL + "/people/",
    ADD_PEOPLE: BASE_URL + "/people/",
    GET_VOTERS: BASE_URL + "/people/getVoters",
    GET_COMPLAINTS: BASE_URL + "/complaint",

}


