import {fetcher} from './fetcher'

/**
 * All props passed to page are passed from here
 * @param setState state setter
 * @returns 
 */

export default function ({setState}){

        return {
            fetcher: fetcher,
            formInput : {
                onSubmit:e=>{
                  alert("e")
                }
              }            
        }
}