

interface ThirdPageProps extends DefaultPageProps{

    
}


type FormLabelStringTypes = 'name' | 'surname' | 'phone_number' | 'email' | 'date_of_birth' | 'address' | 'city' | 'state' | 'zip_code'



type FormStringsInterface = Record<FormLabelStringTypes, string> 

interface FormInterface extends FormStringsInterface {
 
}

