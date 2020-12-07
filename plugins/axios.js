import axios from "axios";

export const request = axios.create({
    baseURL: "https://conduit.productionready.io"
})

export default (context) => {
    request.interceptors.request.use(function (config) {
        const { userInfo } = context.store.state;
        if (userInfo && userInfo.token) {
            config.headers.Authorization = `Token ${userInfo.token}`
        }
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    })
}