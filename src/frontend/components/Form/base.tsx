import Inputs from "../Inputs";

const NameInput = Inputs.TextField;
const SurnameInput = Inputs.TextField;
const PhoneNumberInput = Inputs.TextField;
const EmailInput = Inputs.TextField;
const DateOfBirthInput = Inputs.TextField;
const AddressInput = Inputs.TextField;
const CityInput = Inputs.TextField;
const StateInput = Inputs.TextField;
const ZipCodeInput = Inputs.TextField;




 

/**
 * Form Base for Minifig Shippings
 * @param param0 
 * @returns 
 */
export default function FormBase({ ...Props }) {
  return (
    <div className="flex justify-center flex-col w-full h-full p-20">
      <div className="flex py-5 font-extrabold">
        <h2 className="text-4xl uppercase">Shipping Details</h2>
      </div>

      <div className="flex flex-row gap-5 w-full">
        <NameInput label="Name" name='name' validators={[ 'required',  'not_number']}/>
        <SurnameInput label="Surname" name='surname' validators={['required', 'not_number']}  />
      </div>
      <PhoneNumberInput label="Phone number" name='phone_number' validators={[ 'phone_number','required']}/>
      <EmailInput label="Email" name='email'  validators={['required', 'email']}/>
      <DateOfBirthInput label="Date of Birth"  name='date_of_birth'/>
      <AddressInput label="Address" name='address' />
      <CityInput label="City" name='city' />
      <div className="flex gap-5">
        <StateInput label="State"  name='state'/>
        <ZipCodeInput label="Zip Code"  name='zip_code'/>
      </div>
    </div>
  );
}
