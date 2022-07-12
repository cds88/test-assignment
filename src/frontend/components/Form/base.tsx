


import  Inputs from '../Inputs'

const NameInput = Inputs.TextField
const SurnameInput = Inputs.TextField
const PhoneNumberInput = Inputs.TextField
const EmailInput = Inputs.TextField
const DateOfBirthInput = Inputs.TextField
const AddressInput = Inputs.TextField
const CityInput = Inputs.TextField
const StateInput = Inputs.TextField
const ZipCodeInput = Inputs.TextField



export default function FormBase({...Props}){
    

 

    return <div className='flex justify-center flex-col w-full h-full p-20'> 
        <div className=''>
            <h3>Shipping Details</h3>
        </div>

        <div className="flex flex-row gap-5 w-full">
            <NameInput label="Name" />
            <SurnameInput label="Surname" />
        </div>
        <PhoneNumberInput label='Phone number'/>
        <EmailInput label='Email'/>
        <DateOfBirthInput label='Date of Birth'/>
        <AddressInput label='Address'/>
        <CityInput label='City'/>
        <div className='flex gap-5'>
            <StateInput label='State'/>
            <ZipCodeInput label='Zip Code'/>
        </div>       
    </div>
}