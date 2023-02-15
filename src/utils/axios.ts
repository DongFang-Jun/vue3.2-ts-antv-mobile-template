import axios from "axios";
import { ROOT_URL } from "@/config/config";
import { showFailToast } from "vant";

let baseURL = "";

switch (import.meta.env.VITE_APP_TITLE) {
    case "production": {
        baseURL = ROOT_URL.production;
        break;
    }
    case "test": {
        baseURL = ROOT_URL.development;
        break;
    }
    default: {
        baseURL = ROOT_URL.development;
        break;
    }
}

const instance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json"
    }
});

instance.interceptors.response.use(res => {
    const data = res.data;
    const code = res.data.code;

    // 根据code进行错误捕捉处理
    switch (code) {
        case 200:
            return Promise.resolve(data);
        case 400:
            showFailToast(data.msg);
            return Promise.reject(data);
        case 403:
            showFailToast(data.msg);
            return Promise.reject(data);
        default: {
            return Promise.resolve(data);
        }
    }
});

export default instance;
