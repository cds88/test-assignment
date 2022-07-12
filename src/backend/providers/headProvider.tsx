import {Helmet} from "react-helmet";
import { createContext, useState, Dispatch, SetStateAction } from "react";

export const defaultHead={
    title:"",
}


interface HeadInterface {
    title: string
}
interface HeadContextInterface {
    head: HeadInterface
    setHead:  Dispatch<SetStateAction<HeadInterface>>
}
export const defaultContext : HeadContextInterface = {
    head: defaultHead,
    setHead: (head: typeof defaultHead)=>{}
}
export const HeadContext = createContext<HeadContextInterface>(defaultContext)
export default function HeadProvider({children}){
    const [head, setHead] = useState(defaultHead)

    return <HeadContext.Provider value={{head, setHead}}> 
        <Helmet>
        <meta charSet="utf-8" />
        <title>{head.title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>   
        {children}
    </HeadContext.Provider>

}