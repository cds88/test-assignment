import { HeadContext } from "../providers/headProvider"
import { useContext, useEffect } from "react"


export const useHead =(title=null)=>{

    const {head, setHead} = useContext(HeadContext)
    useEffect(()=>{
        if(title) setHead(head=>({...head, title}))
    },[])
    return val=> setHead(head=> ({
        ...head,
        title: val
    }))
    

}