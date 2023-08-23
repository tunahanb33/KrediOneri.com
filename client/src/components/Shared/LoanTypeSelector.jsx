import { Link, useNavigate } from "react-router-dom";
import BaseTextInput from '../Calculators/BaseTextInput';
import BaseSelectMenu from '../Calculators/BaseSelectMenu';
import { useState } from "react";
import { house, consumer, vehicle } from '../../assets/jsons/loanTypeOptionRefferences.json';
function LoanTypeSelector({ type }) {
    const navigate = useNavigate();
    const selectOptionRefferences = {
        house,
        consumer,
        vehicle
    };
    const selectedOption = selectOptionRefferences[type];
    const [amount, setAmount] = useState('');
    const [option, setOption] = useState(selectedOption[0].key);
    const [carStatus, setCarStatus] = useState('0');
    const handleAmount = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (/^\d+$/.test(value) || value === "") {
            value = value == '' ? '' : parseInt(value).toLocaleString();
            setAmount(value);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const urlAmount = amount.replace(/\D/g, "");
        switch (type) {
            case 'house':
            case 'consumer':
                navigate(`sorgulama?amount=${urlAmount}&maturity=${option}`);
                break;
            case 'vehicle':
                navigate(`sorgulama?amount=${urlAmount}&maturity=${option}&type=${carStatus}`);
                break;
            default:
                break;
        }
    }
    return (
        <div className="flex justify-center">
            <div className="w-[800px]">
                {/* Head */}
                <div className="border">
                    <ul className="flex w-full bg-[#eaf0f4] justify-between items-center text-lg text-[#1a4762]/[40px] font-semibold text-center divide-x divide-[rgba(173,181,187,.3)]">
                        <li className="w-full flex">
                            <Link className={`${type == 'consumer' && 'active'} w-full py-1`} to="/ihtiyac-kredisi">İhtiyaç</Link>
                        </li>
                        <li className="w-full flex">
                            <Link className={`${type == 'house' && 'active '} w-full py-1`} to="/konut-kredisi">Konut</Link>
                        </li>
                        <li className="w-full flex">
                            <Link className={`${type == 'vehicle' && 'active'} w-full py-1`} to="/tasit-kredisi">Taşıt</Link>
                        </li>
                        <li className="w-full flex">
                            <Link className={`${type == 'kobi' && 'active'} w-full py-1`} to="/kobi-kredisi">Kobi</Link>
                        </li>
                    </ul>
                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="text-sm my-[16px]">
                        <div className="space-x-5 flex flex-wrap items-center justify-center">
                            <BaseTextInput value={amount} onChange={handleAmount} title="Kredi Tutarı" textInpDivClasses="mainLoan" textInpFormClasses="mainForm" indicator="TL" />
                            <BaseSelectMenu formClass="mainForm" divClass="mainLoan" value={option} onChange={setOption} items={selectedOption} title="Kredi Vadesi" />
                            {
                                type == 'vehicle' &&
                                <BaseSelectMenu formClass="mainForm" divClass="mainLoan" value={carStatus} onChange={setCarStatus} items={[{ key: '0', value: '0 Km' }, { key: '1', value: '2. El' }]} title="Araç Durumu" />

                            }
                            <button className="bg-[#ff6000] text-white px-[16px] w-1/3 mt-3 py-2 h-full rounded font-bold">Hesapla</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoanTypeSelector;