
import { Flex } from "@chakra-ui/react"

import FormBase from "./base"


export default function FormComponent ({state}){

    

    return <Flex height={"100vh"} background="green" 
    flex={1} 
    flexDirection={['column', 'column','column', 'column', 'column', 'column', 'row']}>

        <Flex  flex={2} 
            background="yellow" 
            
            
            > <FormBase/> </Flex>   

        <Flex flex={1}  background="blue"> qwe </Flex>

        
        
        
        


    </Flex>
}

