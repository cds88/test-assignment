import axios from '@/backend/utils/axios'


export const fetcher=async({state, setState})=>{

    await setState(state=>{
        state.loading= true
    })    
    const selectedMinifig = state.selectedMinifig
    
    try{

        const response = await axios({
            method:'GET',
            url: `/minifigs/${selectedMinifig}/parts/`
        })

        setState(state=>{
            state.parts = response.data.results
            state.loading = false
        })

    }
    catch(error){
        setState(state=>{
            state.loading = false
        })
    }
    

}