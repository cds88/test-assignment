import axios from 'axios'



const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
    

})


instance.interceptors.request.use(function(config){
    
    config.headers.Authorization = `key ${import.meta.env.VITE_API_KEY}`

    return config
})


export default instance 