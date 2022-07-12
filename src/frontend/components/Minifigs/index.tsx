import MinifigComponent from "..//Minifig";
import { Flex } from "@chakra-ui/react";
export default function Minifigs({minifigs, setState, state, ...Props}){


 

        return <Flex direction={[
            'column',
            'column',
            'row'
        ]} > 
            {
                minifigs.map((minifig, index)=>{
                const selected = state.selectedMinifig ==minifig.set_num

                
                return <MinifigComponent 
                key={index}
                selected={selected}
                minifigWrapper={{
                    onClick:function(){
                        
                        setState(state=>{
                            state.selectedMinifig = minifig.set_num
                        })
                    }
                }}
                element={minifig}/>                    
                })
            }
        </Flex>
}