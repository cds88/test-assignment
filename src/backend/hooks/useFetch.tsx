import { useEffect } from "react"




export const useFetch =(fetcher)=>{



    useEffect(()=>{
        fetcher()
    },[])







}