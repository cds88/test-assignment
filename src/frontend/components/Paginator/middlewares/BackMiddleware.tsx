

import { Button  } from "@chakra-ui/react"

import { withProceed } from "@/frontend/pages/FirstPage"

const BackButton = withProceed(Button)
export default function BackMiddleware({...props}){


    return <div className="fixed left-0 top-0 m-10 text-white"

  ><BackButton
  onClick={()=>{
    alert("QWE")
  props.setState(state=>{
    state
  })
}}  
  >TEST</BackButton></div>
}