import axios from "axios";
import {setInterceptors} from "@/api/common/interceptors";

function createInstance() {
    const instance = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
    });
    return setInterceptors(instance);
}

const newInstance = createInstance();

function registerUser(userData) {
    return newInstance.post('signup', userData);
}

function loginUser(userData) {
    return newInstance.post('login', userData);
}

export {
    registerUser,
    loginUser,
};
