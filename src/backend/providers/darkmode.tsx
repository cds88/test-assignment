
import { motion } from "framer-motion"
import { createContext, useState } from "react"

export interface DarkmodeContextInterface{

}
export const DarkmodeContext = createContext({
   
})
export default function DarkmodeProvider({children, ...Props}){
    const [state, setState] = useState(false)
    return   <DarkmodeContext.Provider value={state}>
    <motion.div >
    {children}
</motion.div>        
</DarkmodeContext.Provider>

}