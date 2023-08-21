import Header from "../../components/Shared/Header";
import Footer from "../../components/Shared/Footer";
import axios from "axios";
import { useState } from "react";
function CalculateCcCashAdvange() {
    const [amount, setAmount] = useState('');
    const [maturity, setMaturity] = useState('base');
    const [interestRate, setInterestRate] = useState('2.89');
    const handleAmountChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        if (/^\d+$/.test(value) || value == '')
            setAmount(parseInt(value).toLocaleString())
    };
    const handleInterestRateChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        if (/^\d+$/.test(value) || value == '') {
            if (value < 100)
                setInterestRate(value);
            else {
                setInterestRate(parseInt(value) / 100)
            }
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            amount: amount.replace(/\D/g, ""),
            maturity,
            interestRate
        }
        axios.post(`${import.meta.env.VITE_BASE_API_URL}/CalculationTools/CalculateCcCashAdvance`, body);
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
                                {/* FORM SECTION */}
                                <div>
                                    <form onSubmit={handleSubmit} className="w-[500px] rounded-lg mt-5 bg-white p-7 flex flex-col space-y-3">
                                        {/* TEXT INP */}
                                        <div className="flex flex-col space-y-1 text-[#989898]">
                                            <label className="text-[13px]">Nakit Avans Tutarı</label>
                                            <label className="relative w-full flex justify-center items-center">
                                                <input value={amount} onChange={handleAmountChange} placeholder="0" className="border outline-none px-2 text-black w-full py-1.5 rounded border-[#989898] border-opacity-75" type="text" />
                                                <span className="absolute right-3">TL</span>
                                            </label>
                                        </div>
                                        {/* SELECT OPT */}
                                        <div className="flex flex-col space-y-1 text-[#989898]">
                                            <label className="text-[13px]">Vade (Ay)</label>
                                            <label className="w-full flex justify-center items-center">
                                                <select value={maturity} onChange={(e) => setMaturity(e.target.value)} className="border outline-none w-full py-1.5 rounded border-[#989898] text-black border-opacity-75">
                                                    <option hidden value="base">Seçiniz</option>
                                                    {
                                                        Array(12).fill(null).map((_, index) => {
                                                            return <option key={index} value={index + 1}>{index + 1}</option>
                                                        })
                                                    }
                                                </select>
                                            </label>
                                        </div>
                                        {/* TEXT INP */}
                                        <div className="flex flex-col space-y-1 text-[#989898]">
                                            <label className="text-[13px]">Aylık Faiz Oranı</label>
                                            <label className="relative w-full flex justify-center items-center">
                                                <input value={interestRate} onChange={handleInterestRateChange} className="border outline-none px-2 text-black w-full py-1.5 rounded border-[#989898] border-opacity-75" type="text" />
                                                <span className="absolute right-3">%</span>
                                            </label>
                                        </div>
                                        {/* SUBMIT AREA */}
                                        <div>
                                            <button type="submit" className="bg-red-600 w-full py-3 font-medium rounded text-white">Hesapla</button>
                                        </div>
                                    </form>
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

export default CalculateCcCashAdvange;