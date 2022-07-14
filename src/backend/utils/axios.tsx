import axios from 'axios'



const instance = axios.create({
    baseURL: 'https://rebrickable.com/api/v3/lego/',
    

})


instance.interceptors.request.use(function(config){
    
    config.headers.Authorization = `key ${import.meta.env.VITE_API_KEY}`

    return config
})


export default instance 