

import { Flex } from "@chakra-ui/react"


const MinifigWrapper = Flex
export default function MinifigComponent({element, minifigWrapper, selected, ...Props}){


            return <MinifigWrapper 
               className="  rounded-lg  p-10" 
                {...minifigWrapper}> 
                
                            <img 
                            src={element.set_img_url} 
                            height={100} 
                            style={{margin:20}} 
                            className={
                                `rounded-lg ${selected? 'shadow-lg': ''} shadow-orange-500`
                            }
                            />
                
                 </MinifigWrapper>


}