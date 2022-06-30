import axios,{AxiosResponse,AxiosError} from 'axios';

const instance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 10*1000
})

instance.interceptors.response.use(
    (res: AxiosResponse) => {
        if (String(res.status).indexOf('2') !== 0) {
            return {
                code: res.status,
                message: res.data.message || '请求异常，请刷新重试',
                result: false
            }
        }
        return Promise.reject(res.data)
    },
    (error: AxiosError) => {
        if (error && error.response) {
            // errorHandle(error.response.status, error.response)
            return Promise.reject(error.response)
        }
        console.log('网络请求失败, 请刷新重试')
        return Promise.reject(error)
    }

)