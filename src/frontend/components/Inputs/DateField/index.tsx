
import DatePicker from "react-datepicker";





export default function Datefield(Props: DateFieldInterface){
    const {label} = Props
    return <div> 

        <div>
            <span>
                {label}
            </span>
        </div>
    </div>
}