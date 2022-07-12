import Minifigs from "../../components/Minifigs";

import { Button } from "@chakra-ui/react";
import { withProceed } from "../FirstPage/base";
import axios from 'axios'
import { useEffect } from "react";
const ProceedButton = withProceed(Button);


 

export default function SecondPageContent(Props){


    const { proceedButton, state, setState } = Props
    

    if(state.loading) {
    throw new Promise((resolve, reject)=>{
        return <div> </div>        
    })    
    }

    return  <div>
            <div className="flex justify-center font-bold p-10">
                <h2 className="text-white text-xl" >Choose your minifigs</h2>
            </div>
            <Minifigs minifigs={state.randoms} state={state} setState={setState}/>
            <div className="flex items-center justify-center content-center">
            <ProceedButton {...proceedButton}>Proceed to shipment</ProceedButton>
            </div>
        </div>
    
}