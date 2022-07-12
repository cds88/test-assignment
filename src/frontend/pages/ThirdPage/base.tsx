import FormBase from "../../components/Form/base";
import { Flex } from "@chakra-ui/react";
import ShippingDetails from "../../components/ShippingDetails";
import {useForm} from 'react-hook-form'



type FormLabelStringTypes = 'name' | 'surname' | 'phone_number' | 'email' | 'date_of_birth' | 'address' | 'city' | 'state' | 'zip_code'



export type FormStringsInterface = Record<FormLabelStringTypes, string> 

export interface FormInterface extends FormStringsInterface {
 
}


export default function ThirdPage(Props) {
    const {formInput} = Props

    const form = useForm<FormInterface>({

    })    
    const handleSubmit=(e)=>{
        alert("QWE")
    }
  return (
    <form onSubmit={handleSubmit} className='w-full'>
        <Flex
          height={"100vh"}
          
          flex={1}
          flexDirection={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
            "row",
            "row",
          ]}
        >
          <Flex flex={2} className='bg-primary-main text-white' >
            {" "}
            <FormBase />{" "}
          </Flex>
          <Flex flex={1}  >
                <ShippingDetails/>
          </Flex>
        </Flex>
    </form>
  );
}
