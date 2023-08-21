import Header from "../../components/Shared/Header";
import Footer from "../../components/Shared/Footer";
import axios from "axios";
import { useState } from "react";
function CalculateTitleDeedFee() {
    const [houseValue, setHouseValue] = useState('');
    const [showResultArea, setShowResultArea] = useState(false);
    const [rates, setRates] = useState({});
    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        if (/^\d+$/.test(value) || value == '') {
            if (value == '')
                return setHouseValue(value)
            setHouseValue(parseInt(value).toLocaleString());
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowResultArea(false);
        const houseValueAmount = houseValue.replace(/\D/g, "");
        await new Promise(resolve => setTimeout(resolve, 500));
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/CalculationTools/CalculateTitleDeedFee`, { houseValueAmount });
            setRates(data);
            setShowResultArea(true);
        } catch (error) {
            console.log(error);
        }

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
                                        <div className="flex flex-col space-y-1 text-[#989898]">
                                            <label className="text-[13px]">Konutun Değeri</label>
                                            <label className="relative w-full flex justify-center items-center">
                                                <input value={houseValue} onChange={handleChange} placeholder="0" className="border outline-none px-2 text-black w-full py-1.5 rounded border-[#989898] border-opacity-75" type="text" />
                                                <span className="absolute right-3">TL</span>
                                            </label>
                                        </div>
                                        {/* SUBMIT AREA */}
                                        <div>
                                            <button type="submit" className="bg-red-600 w-full py-3 font-medium rounded text-white">Hesapla</button>
                                        </div>
                                    </form>
                                    {/* Result Area */}
                                    {
                                        showResultArea &&
                                        <div className="mt-5">
                                            <div className="bg-white p-7 text-[#737373]">
                                                <div className="flex justify-between border-b pb-3">
                                                    <span>Alıcının Ödeyeceği Tapu Harcı :</span>
                                                    <span className="font-extrabold">{rates.feePayment.toLocaleString()} TL</span>
                                                </div>
                                                <div className="flex justify-between border-b py-3">
                                                    <span>Satıcının Ödeyeceği Tapu Harcı :</span>
                                                    <span className="font-extrabold">{rates.feePayment.toLocaleString()} TL</span>
                                                </div>
                                                <div className="flex justify-between border-b py-3">
                                                    <span>Toplam Tapu Harcı :</span>
                                                    <span className="font-extrabold">{rates.totalDeedFee.toLocaleString()} TL</span>
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