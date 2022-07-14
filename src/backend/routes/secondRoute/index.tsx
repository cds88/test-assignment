
import { makeRequest } from "./fetchers"

/**
 * All props passed to page are passed from here
 * @param setState state setter
 * @returns 
 */
export default function ({setState}) {

    return {
        fetcher: makeRequest,
          proceedButton:{
            onClick:()=>{
              setState(state=>({
                ...state,
                selectedPage: 3
              }))
            }
          }        
    }

}