import Header from "../../components/Shared/Header";
import Footer from "../../components/Shared/Footer";
import { useState } from "react";
import BaseTextInput from "../../components/Calculators/BaseTextInput";
import useAxios from "../../Hooks/useAxios";
function CalculateTitleDeedFee() {
    const [url, setUrl] = useState('');
    const [trigger, setTrigger] = useState(false);
    const [{ feeAmount }, __, _] = useAxios({ method: 'get', url }, trigger);
    const [houseValue, setHouseValue] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setTrigger(true);
        let value = houseValue.replace(/\D/g, "");
        setUrl(`/calculationtools/calculatetitledeedfee/?houseValue=${value}`);
    };
    const handleChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (/^\d+$/.test(value) || value == '') {
            value = value == '' ? '' : parseInt(value).toLocaleString();
            setHouseValue(value);
        };
    };
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
            <Header />
            {/*  Page content */}
            <main className="flex-grow">
                <section className="bg-gradient-to-b from-gray-100 to-white">
                    <div className="mx-auto px-4 sm:px-6 ">
                        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                            <div className="bg-gray-500 py-12 w-full flex flex-col items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-white">Kredi Kartı Taksitli Nakit Avans Hesaplama</h2>
                                </div>
                                <div className="w-[500px]">
                                    {/* FORM SECTION */}
                                    <form onSubmit={handleSubmit} className="rounded-lg mt-5 bg-white p-7 flex flex-col space-y-3">
                                        {/* TEXT INP */}
                                        <BaseTextInput value={houseValue} onChange={handleChange} title="Konutun Değeri" textInpDivClasses="titleDeeFormDiv" textInpFormClasses="titleDeeForm" indicator="TL" />
                                        {/* SUBMIT AREA */}
                                        <div>
                                            <button type="submit" className="bg-red-600 w-full py-3 font-medium rounded text-white">Hesapla</button>
                                        </div>
                                    </form>
                                    {/* Result Area */}
                                    {
                                        feeAmount &&
                                            <div className="mt-5">
                                                <div className="bg-white p-7 text-[#737373]">
                                                    <div className="flex justify-between border-b pb-3">
                                                        <span>Alıcının Ödeyeceği Tapu Harcı :</span>
                                                        <span className="font-extrabold">{feeAmount.toLocaleString()} TL</span>
                                                    </div>
                                                    <div className="flex justify-between border-b py-3">
                                                        <span>Satıcının Ödeyeceği Tapu Harcı :</span>
                                                        <span className="font-extrabold">{feeAmount.toLocaleString()} TL</span>
                                                    </div>
                                                    <div className="flex justify-between border-b py-3">
                                                        <span>Toplam Tapu Harcı :</span>
                                                        <span className="font-extrabold">{(feeAmount * 2).toLocaleString()} TL</span>
                                                    </div>
                                                </div>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

        </div>
    );
}

export default CalculateTitleDeedFee;