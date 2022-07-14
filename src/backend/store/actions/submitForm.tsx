import axios from '@/backend/utils/axios'
export const performApiCall =async({onSuccess, onError, ...formData})=>{
    try{

        // const response  = await axios({
        //   method:'POST',
        //   url: import.meta.env.VITE_POST_URL,
        //   data: formData
        // })

        // const {data} = response
        onSuccess('data')
    }
    catch(error){
        onError(error)
    }
  }