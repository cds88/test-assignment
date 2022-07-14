import firstRoute from "./firstRoute";
import secondRoute from "./secondRoute";
import thirdRoute from "./thirdRoute";



export default function({setState, ...kwargs}){

    return {
        1: firstRoute({setState}),
        2: secondRoute({setState}),
        3: thirdRoute({setState})

    }
}