import { Flex } from "@chakra-ui/react"

import { Button } from "@chakra-ui/react"


const SubmitButton = Button
/**
 * Shipping details regarding form
 * @returns {React.Element}
 */
export default function ShippingDetails(Props){


    
    const {state : {parts, selectedMinifig, randoms}} = Props

    const minifigObject = randoms.find(random=>random.set_num== selectedMinifig)

    
    
    return <div className="p-10 flex flex-1" >

        <Flex background={'white'}  flex={1} borderRadius={10} flexDirection={'column'} padding={10} >
            <h2 className="uppercase font-bold text-2xl">Summary</h2>
            <img src={minifigObject?.set_img_url}  height={100} alt='selected minifig icon' style={{height:300}} />
            <div className="flex justify-center"><span>{minifigObject.name}</span>            </div>
            <span>There are {parts.length} parts in this minifig: </span>
            {
                parts?.map(part=> <div className="h-30 flex">
                    
                    <img src={part?.part?.part_img_url} height={30}  style={{height:50}}/> 
                    <div className="flex flex-col">
                        <span className="font-bold">{part?.part?.name}</span>
                        <span>{part?.part?.part_num}</span>
                    </div>

                </div>)
            }
            <div className="mt-auto flex justify-center p-5" >
                <SubmitButton type='submit' >
                    SUBMIT
                </SubmitButton>
            </div>
        </Flex>




    </div>
}