

/**
 * All props passed to page are passed from here
 * @param setState state setter
 * @returns 
 */
export default function ({setState}){

    return {

        proceedButton: {
            onClick:async ()=>{
              await setState(state=>({
                ...state,
                selectedPage: 2
              }))
            }
        }
    }
}