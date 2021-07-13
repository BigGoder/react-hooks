import axios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from "axios";

export interface SuccessFormat {
    success?: boolean;
    data?: any;
}

const handleError = (err: any) => {
    let msg = err.message || err.msg || "";
    alert(`请求失败，请重新刷新页面尝试：${msg}`);
};

const handleResponse = (response:AxiosResponse,resolve:Function) => {
    let res:SuccessFormat = response.data
    if(res.success){
        resolve(res.data)
    }else{
        handleError(res)
    }
}


class SDK {
    $http: AxiosInstance;

    constructor(config: AxiosRequestConfig) {
        this.$http = axios.create(config || {});
    }

    get(url: string, params?: object): Promise<SuccessFormat> {
        return new Promise((resolve, reject) => {
            this.$http
                .get(url, { params })
                .then((res) => handleResponse(res, resolve))
                .catch(handleError);
        });
    }

    post(url: string, data?: object): Promise<SuccessFormat> {
        return new Promise((resolve, reject) => {
            this.$http
                .post(url, data)
                .then((res) => handleResponse(res, resolve))
                .catch(handleError);
        });
    }
}

export default SDK