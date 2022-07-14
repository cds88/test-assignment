import { Button } from "@chakra-ui/react";

import React, {FunctionComponent, useEffect} from 'react'
import { useHead } from "@/backend/hooks/useHead";

export const withProceed= TheButton=>Props=>{
  return <TheButton colorScheme={"linkedin"}  borderRadius={30} textTransform='uppercase' padding={'1.6em 8em'}  boxShadow={'1px 2px 20px black'} {...Props}/>
}

const ProceedButton = withProceed(Button);

/**
 * First page of the applications
 * Has no particular functionality besides letting the user 
 * switch to the next level, thus there is no particular reason to keep
 * it inside as a route
 * @param proceedButton proceed button HTML params
 * @returns {React.ReactElement}
 */
export default function FirstPage(Props: FirstPageProps) { 
  const { proceedButton, ...props  }  = Props
  useHead('Welcome !')
  return (
    <div style={{
      
       height:'100%',
       display: 'flex',
       flexDirection: 'column'
      
    }} 

    
    className='flex justify-center w-full h-full items-center text-white'>
      <h2   className="text-4xl font-extrabold uppercase">Lego minifigs mystery box</h2>
      <div className="flex justify-center p-10">
        <ProceedButton  {...proceedButton} >
          let's go!
        </ProceedButton>
      </div>
    </div>
  );
}

 