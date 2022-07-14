import FormBase from "@/frontend/components/Form/base";
import { Flex } from "@chakra-ui/react";
import MinifigParts from "@/frontend/components/MinifigParts";
import {useForm, FormProvider} from 'react-hook-form'
import { useLoading } from "@/backend/hooks/useLoading";
import { useToast } from "@chakra-ui/react";
import { useHead } from "@/backend/hooks/useHead";

import { performApiCall } from "@/backend/store/actions/submitForm";
export const defaultFormState = {
  name:'',
  surname: '',
  phone_number:'',
  email:'',
  birth:'',
  address:'',
  city:'',
  state:'',
  zip:''
}

/**
 * Third page which includes form and submission
 * Right container shows all parts from a chosen minifig
 * @param Props 
 * @returns 
 */
export default function ThirdPage(Props) {
  const {formInput, state, resetState} = Props
  const toast = useToast()
  const form = useForm<FormInterface>({
    defaultValues:defaultFormState
  })    

  const {handleSubmit} = form

  useLoading(state.loading)
  useHead("Leogofig Summary")

  return ( 
    <FormProvider {...form} >
        <form 
        onSubmit={handleSubmit(e=>{
            
            performApiCall({
              onSuccess:(data)=>{
                // perform operation with new returned data
                toast({
                  title:'Succesfully finalized shipment',
                  description:"You can proceed to buy more Minifigs",
                  status: 'success',
                  duration: 3000,
                  isClosable: true
                })

                resetState?.()
              },
              onError: (error)=>{
                // error - notify user about the issue
                toast({
                  title:'You have faced issues concerning finalizing shipment',
                  description:"Please try again later",
                  status: 'error',
                  duration: 3000,
                  isClosable: true
                })                
              }
            })

        })}
        className='w-full'>
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
            <Flex flex={2} className=' text-white' >
               <FormBase />
            </Flex>
            <Flex flex={1}  >
                <MinifigParts {...Props}/>
            </Flex>
          </Flex>
        </form>
    </FormProvider>
  );
}
