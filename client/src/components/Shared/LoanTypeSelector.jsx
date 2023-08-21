import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import FormComponent from "./LoanFormCmp";
function LoanTypeSelector({ formOptionMaturities: maturities, isVehicle, formCarStatus }) {
    const navigate = useNavigate();
    const [creditForm, setCreditForm] = useState({
        amount: '',
        maturity: '12',
        vehicle: {
            isActive: isVehicle || false,
            value: '0'
        }
    });
    const handleChange = (event) => {
        const value = event.target.value.replaceAll('.', '');
        if (/^[0-9]+$/.test(value))
            setCreditForm({ ...creditForm, amount: Number(value).toLocaleString() });
    };
    const maturityHandleChange = (event) => {
        setCreditForm({ ...creditForm, maturity: event.target.value });
    };
    const vehicleHandleChange = (event) => {
        setCreditForm({ ...creditForm, vehicle: { isActive: true, value: event.target.value } });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const amount = creditForm.amount.replaceAll('.', '');
        if (creditForm.vehicle.isActive) return navigate(`sorgulama/?amount=${amount}&maturity=${creditForm.maturity}&type=${creditForm.vehicle.value}`)
        navigate(`sorgulama/?amount=${amount}&maturity=${creditForm.maturity}`)
    };
    return (
        <div className="flex justify-center">
            <div className="w-[800px]">
                {/* Head */}
                <div className="border">
                    <ul className="flex w-full bg-[#eaf0f4] justify-between items-center text-lg text-[#1a4762]/[40px] font-semibold text-center divide-x divide-[rgba(173,181,187,.3)]">
                        <li className="w-full flex">
                            <NavLink className="w-full py-1" to="/ihtiyac-kredisi">İhtiyaç</NavLink>
                        </li>
                        <li className="w-full flex">
                            <NavLink className="w-full py-1" to="/konut-kredisi">Konut</NavLink>
                        </li>
                        <li className="w-full flex">
                            <NavLink className="w-full py-1" to="/tasit-kredisi">Taşıt</NavLink>
                        </li>
                        <li className="w-full flex">
                            <NavLink className="w-full py-1" to="/kobi-kredisi">Kobi</NavLink>
                        </li>
                    </ul>
                    <div className="px-[8px]">
                        <FormComponent vehicleHandleChange={vehicleHandleChange} formCarStatus={formCarStatus} isVehicle={isVehicle} handleSubmit={handleSubmit} maturities={maturities} maturityHandleChange={maturityHandleChange} handleChange={handleChange} creditForm={creditForm} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoanTypeSelector;