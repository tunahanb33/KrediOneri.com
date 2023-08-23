import Header from "../../components/Shared/Header";
import Footer from "../../components/Shared/Footer";
import { useState } from "react";
import BaseSelectMenu from '../../components/Calculators/BaseSelectMenu';
import useAxios from "../../Hooks/useAxios";
function CalculateBridgeToll() {
    const [results, errors, isLoading] = useAxios({ method: 'get', url: '/calculationtools/calculatebridgetoll' });
    const uniqueBridgeNames = [...new Set(results.map(m => m.BridgeName))].map((bridgeName, index) => ({ key: index, value: bridgeName }));
    const [bridgeName, setBridgeName] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [filteredResults, setFilteredResults] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowResults(true);
        setFilteredResults(results.filter(m => m.BridgeName == uniqueBridgeNames.find(m => m.key == bridgeName).value));
    }
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
                                    <h2 className="text-3xl font-bold text-white">Köprü ve Otoyol Geçiş Ücretleri Hesaplama 2023</h2>
                                </div>
                                <div className="w-[500px]">
                                    {
                                        isLoading ?
                                            <div>Loading...</div>
                                            :
                                            <form onSubmit={handleSubmit} className="rounded-lg mt-5 bg-white p-7 flex flex-col space-y-3">
                                                <BaseSelectMenu formClass="mtvForm" divClass="mtvFormDiv" value={bridgeName} onChange={setBridgeName} items={uniqueBridgeNames} title="Araç Tipi Seçiniz" />
                                                {/* SUBMIT AREA */}
                                                <div>
                                                    <button type="submit" className="bg-red-600 w-full py-3 font-medium rounded text-white">Hesapla</button>
                                                </div>
                                            </form>
                                    }
                                    {/* Result Area */}
                                    {
                                        showResults &&
                                        <div className="mt-5">
                                            <div className="bg-white p-7 text-[#737373]">
                                                {
                                                    filteredResults.map((result, index) => {
                                                        return (
                                                            <div key={index} className="flex py-2 justify-between border-b pb-3">
                                                                <span>{result.VehicleName} :</span>
                                                                <span className="font-extrabold">{result.IsEnabled ? `${result.Toll} TL` : 'Geçemez'}</span>
                                                            </div>)

                                                    })
                                                }
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

export default CalculateBridgeToll;