import { Flex } from "@chakra-ui/react"

import { Button } from "@chakra-ui/react"


const SubmitButton = Button
export default function ShippingDetails(){

    return <div className="p-10 flex flex-1" >

        <Flex background={'white'}  flex={1} borderRadius={10} flexDirection={'column'}  >
            <h3>Summary</h3>
            <div><img alt='minifig-icon'></img></div>
            <span>There are 4 parts in this minifig: </span>
            <div className="mt-auto flex justify-center p-5" >
                <SubmitButton >
                    SUBMIT
                </SubmitButton>
            </div>
        </Flex>




    </div>
}