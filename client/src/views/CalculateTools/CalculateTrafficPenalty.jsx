import Header from "../../components/Shared/Header";
import Footer from "../../components/Shared/Footer";
import { useState } from "react";
import BaseSelectMenu from '../../components/Calculators/BaseSelectMenu';
import useAxios from "../../Hooks/useAxios";
function CalculateTrafficPenalty() {
    const [results, errors, isLoading] = useAxios('/calculationtools/calculatetrafficpenalty');
    const penaltyNames = results.map((m, index) => ({ key: index, value: m.Penalty }));
    const [showResults, setShowResults] = useState(false);
    const [filteredResult, setFilteredResult] = useState({});
    const [penalty, setPenalty] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        setFilteredResult(results.find(m => m.Penalty == (penaltyNames.find(m => m.key == penalty).value)));
        setShowResults(true);
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
                                    <h2 className="text-3xl font-bold text-white">Trafik Cezası Fiyatları ve Erken Ödeme Hesaplama 2023</h2>
                                </div>
                                <div className="w-[500px]">
                                    {
                                        isLoading ?
                                            <div>Loading...</div>
                                            :
                                            <form onSubmit={handleSubmit} className="rounded-lg mt-5 bg-white p-7 flex flex-col space-y-3">
                                                <BaseSelectMenu formClass="mtvForm" divClass="mtvFormDiv" value={penalty} onChange={setPenalty} items={penaltyNames} title="Ceza" />
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
                                                <div className="flex py-2 justify-between border-b pb-3">
                                                    <span>Ceza Tutarı :</span>
                                                    <span className="font-extrabold">{filteredResult.PenaltyAmount} TL</span>
                                                </div>
                                                <div className="flex py-2 justify-between border-b pb-3">
                                                    <span>%25 İndirimli Tutar :</span>
                                                    <span className="font-extrabold">{filteredResult.PenaltyAmount * 0.75} TL</span>
                                                </div>
                                                <div className="mt-5">
                                                    <h4 className="text-2xl font-extrabold">Ceza Detayları</h4>
                                                    <div className="flex py-2 justify-between border-b pb-3">
                                                        <span>Ceza Kodu :</span>
                                                        <span className="font-extrabold">{filteredResult.PenaltyCode}</span>
                                                    </div>
                                                    <div className="flex py-2 justify-between border-b pb-3">
                                                        <span>Ceza Puanı :</span>
                                                        <span className="font-extrabold">{filteredResult.PenaltyPoint ?? 'Yok'}</span>
                                                    </div>
                                                    <div className="flex py-2 justify-between border-b pb-3">
                                                        <span>Cezanın Kısaltılmış İsmi :</span>
                                                        <span className="font-extrabold">{filteredResult.PenaltyName}</span>
                                                    </div>
                                                </div>
                                                <div className="mt-5">
                                                    <h4 className="text-xl font-extrabold">Ceza Açıklaması</h4>
                                                    <div className="flex py-2 justify-between border-b pb-3">
                                                        <span>{filteredResult.PenaltyDescription}</span>
                                                    </div>
                                                </div>
                                                <div className="mt-5">
                                                    <h4 className="text-xl font-extrabold">Diğer Hususlar</h4>
                                                    <div className="flex py-2 justify-between border-b pb-3">
                                                        <span>{filteredResult.OtherCases}</span>
                                                    </div>
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

export default CalculateTrafficPenalty;