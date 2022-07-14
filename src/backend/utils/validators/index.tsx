/**
 * JSON objct consists of validators used by inputs to validate the app
 */
const Validators : Record<ValidatorTypes, (val: any)=> string | void> ={
    required: val=> {
        
        return !val && "Field required"
    },
    phone_number: val=> val &&  !/\d/.test(val) && 'Please enter a valid number',
    not_number: val=>val && /\d/.test(val) && "Please enter a non-numeric string",
    email: val=> val &&  !['@', '.'].every(x=>val.includes(x)) && "Please enter a valid email"
    
  }
  /**
   * Function which parses a array of validator names into a Validation condition loop
   * @param validator_names list of validator names destinated to perform validation
   * @returns 
   */
  export const get_validators =(validator_names : ValidatorTypes[] = [])=>{
    return val =>{
        for(const validator_name of validator_names) 
        {
            const result = Validators[validator_name](val)
            if(result) return result 
        }        
    }

  }
  