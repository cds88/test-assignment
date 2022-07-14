

import { Spinner, Flex } from "@chakra-ui/react";

export const useLoading =(loading)=>{

    if (loading) {
        throw new Promise((resolve, reject) => {
          return <div><Spinner/></div>;
        });
      }

}