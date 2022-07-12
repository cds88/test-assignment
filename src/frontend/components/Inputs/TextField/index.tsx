
import {  Input  } from '@chakra-ui/react'





export default function TextField(Props:TextFieldInterface){
    const {label} = Props
    return <div  className='w-full' > 
            <div>
                <span>
                    {label}
                </span>
            </div>
            <Input width={'100%'} background='white'/>
        </div>
}