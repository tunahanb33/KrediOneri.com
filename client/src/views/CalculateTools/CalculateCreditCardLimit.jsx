import Header from "../../components/Shared/Header";
import Footer from "../../components/Shared/Footer";
import { useState } from "react";
import BaseSelectMenu from '../../components/Calculators/BaseSelectMenu';
import BaseTextInput from '../../components/Calculators/BaseTextInput';
function CalculateCreditCardLimit() {
    const cardStateOptions = [{ key: 0, value: 'evet' }, { key: 1, value: 'hayır' }];
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [cardState, setCardState] = useState(cardStateOptions[0].key);
    const handleValue = (e) => {
        let val = e.target.value.replace(/\D/g, "");
        if (/^\d+$/.test(val) || val === "") {
            val = val ? parseInt(val).toLocaleString() : ''
            setValue(val);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let val = value.replace(/\D/g, "");
        setShowResult(true);
        if (cardState == '0') return setResult(parseInt(val) * 4)
        setResult(parseInt(val) * 2);
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
                                    <h2 className="text-3xl font-bold text-white">Kredi Kartı Limit Hesaplama</h2>
                                </div>
                                <div className="w-[500px]">

                                    <form onSubmit={handleSubmit} className="rounded-lg mt-5 bg-white p-7 flex flex-col space-y-3">
                                        <BaseSelectMenu formClass="mtvForm" divClass="mtvFormDiv" value={cardState} onChange={setCardState} items={cardStateOptions} title="Daha Önce Hiç Kredi Kartınız Oldu Mu?" />
                                        <BaseTextInput value={value} onChange={handleValue} title="Aylık Net Geliriniz" textInpDivClasses="titleDeeFormDiv" textInpFormClasses="titleDeeForm" indicator="TL" />
                                        {/* SUBMIT AREA */}
                                        <div>
                                            <button type="submit" className="bg-red-600 w-full py-3 font-medium rounded text-white">Hesapla</button>
                                        </div>
                                    </form>

                                    {/* Result Area */}
                                    {
                                        showResult &&
                                        <div className="mt-5">
                                            <div className="bg-white p-7 text-[#737373]">
                                                <div className="flex py-2 justify-between border-b pb-3">
                                                    <span>Tüm Kredi Kartlarınızın Toplam Üst Limiti :</span>
                                                    <span className="font-extrabold">{result} TL</span>
                                                </div>
                                                {
                                                    cardState == '1' &&
                                                    <div className="flex py-2 justify-between border-b pb-3">
                                                        <span>Gelecek Sene Tüm Kartlarınızın Toplam Üst Limiti :</span>
                                                        <span className="font-extrabold">{result * 2} TL</span>
                                                    </div>
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

export default CalculateCreditCardLimit;