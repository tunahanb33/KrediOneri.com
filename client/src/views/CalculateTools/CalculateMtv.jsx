import Header from "../../components/Shared/Header";
import Footer from "../../components/Shared/Footer";
import { useState } from "react";
import BaseSelectMenu from "../../components/Calculators/BaseSelectMenu";
import useAxios from "../../Hooks/useAxios";
import mtvRefferences from '../../assets/jsons/mtvRefferences.json';
function CalculateMtv() {
    const { vehicleTypes, minibusAges, displacements, motoDisplacements, caravanDisplacements, seatCounts, truckWeights, registrationDate, valueThresholds, vehicleAges } = mtvRefferences;
    const [vehicleType, setVehicleType] = useState(vehicleTypes[0].key);
    const [vehicleAge, setVehicleAge] = useState(vehicleAges[0].key);
    const [displacement, setDisplacement] = useState(displacements[0].key);
    const [motoDisplacement, setMotoDisplacement] = useState(motoDisplacements[0].key);
    const [registration, setRegistration] = useState(registrationDate[0].key);
    const [valueThreshold, setValueThreshold] = useState(valueThresholds[0].key);
    const [minibusAge, setMinibusAge] = useState(minibusAges[0].key);
    const [caravanDisplacement, setCaravanDisplacement] = useState(caravanDisplacements[0].key);
    const [seatCount, setSeatCount] = useState(seatCounts[0].key);
    const [truckWeight, setTruckWeight] = useState(truckWeights[0].key);
    const [url, setUrl] = useState('/calculationtools/calculatemtv?type=1&vehicleyear=age0&option=disp0&vehicleValue=0');
    let config = {
        method: 'get',
        url
    };
    const [{ yearlyAmount }, errors, isLoading] = useAxios(config);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (vehicleType == '1') {
            if (registration == 'reg1') return setUrl(`/calculationtools/calculatemtv?type=${vehicleType}&vehicleyear=${vehicleAge}&option=${displacement}&vehicleValue=${valueThreshold}`);
            else setUrl(`/calculationtools/calculatemtv?type=${vehicleType}&vehicleyear=${vehicleAge}&option=${displacement}&vehicleValue=0`);
        } else if (vehicleType == '2') setUrl(`/calculationtools/calculatemtv?type=${vehicleType}&vehicleyear=${vehicleAge}&option=${motoDisplacement}&vehicleValue=0`)
        else if (vehicleType == '3') setUrl(`/calculationtools/calculatemtv?type=${vehicleType}&vehicleyear=${minibusAge}&option=0&vehicleValue=0`)
        else if (vehicleType == '4') setUrl(`/calculationtools/calculatemtv?type=${vehicleType}&vehicleyear=${minibusAge}&option=${caravanDisplacement}&vehicleValue=0`)
        else if (vehicleType == '5') setUrl(`/calculationtools/calculatemtv?type=${vehicleType}&vehicleyear=${minibusAge}&option=${seatCount}&vehicleValue=0`)
        else if (vehicleType == '6') setUrl(`/calculationtools/calculatemtv?type=${vehicleType}&vehicleyear=${minibusAge}&option=${truckWeight}&vehicleValue=0`)

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
                                    <h2 className="text-3xl font-bold text-white">Motorlu Taşıtlar Vergisi (MTV) Hesaplama 2023</h2>
                                </div>
                                <div className="w-[600px]">
                                    {/* FORM SECTION */}
                                    <form onSubmit={handleSubmit} className="rounded-lg mt-5 items-center bg-white justify-center p-7 flex flex-wrap space-x-3">
                                        {/* SELECT OPT */}
                                        <>
                                            <BaseSelectMenu formClass="mtvForm" divClass="mtvFormDiv" value={vehicleType} onChange={setVehicleType} items={vehicleTypes} title="Araç Tipi Seçiniz" />
                                        </>
                                        {
                                            vehicleType == '1' &&
                                            <>
                                                <BaseSelectMenu formClass="mtvForm" divClass="mtvFormDiv" value={vehicleAge} onChange={setVehicleAge} items={vehicleAges} title="Aracın Yaşı" />
                                                <BaseSelectMenu formClass="mtvForm" divClass="mtvFormDiv" value={displacement} onChange={setDisplacement} items={displacements} title="Motor Silindir Hacmi" />
                                                <BaseSelectMenu formClass="mtvForm" divClass="mtvFormDiv" value={registration} onChange={setRegistration} items={registrationDate} title="Aracın İlk Tescil Tarihi" />
                                                {
                                                    registration == 'reg1' &&
                                                    <BaseSelectMenu formClass="mtvForm" divClass="mtvFormDiv" value={valueThreshold} onChange={setValueThreshold} items={valueThresholds} title="Araç Değeri (KDV Hâriç)" />
                                                }
                                            </>
                                        }
                                        {
                                            vehicleType == '2' &&
                                            <>
                                                <BaseSelectMenu formClass="mtvForm" divClass="mtvFormDiv" value={vehicleAge} onChange={setVehicleAge} items={vehicleAges} title="Aracın Yaşı" />
                                                <BaseSelectMenu formClass="mtvForm" divClass="mtvFormDiv" value={motoDisplacement} onChange={setMotoDisplacement} items={motoDisplacements} title="Motor Silindir Hacmi" />
                                            </>
                                        }
                                        {
                                            vehicleType == '3' &&
                                            <>
                                                <BaseSelectMenu formClass="mtvForm" divClass="mtvFormDiv" value={minibusAge} onChange={setMinibusAge} items={minibusAges} title="Aracın Yaşı" />
                                            </>
                                        }
                                        {
                                            vehicleType == '4' &&
                                            <>
                                                <BaseSelectMenu formClass="mtvForm" divClass="mtvFormDiv" value={minibusAge} onChange={setMinibusAge} items={minibusAges} title="Aracın Yaşı" />
                                                <BaseSelectMenu formClass="mtvForm" divClass="mtvFormDiv" value={caravanDisplacement} onChange={setCaravanDisplacement} items={caravanDisplacements} title="Motor Silindir Hacmi" />
                                            </>
                                        }
                                        {
                                            vehicleType == '5' &&
                                            <>
                                                <BaseSelectMenu formClass="mtvForm" divClass="mtvFormDiv" value={minibusAge} onChange={setMinibusAge} items={minibusAges} title="Aracın Yaşı" />
                                                <BaseSelectMenu formClass="mtvForm" divClass="mtvFormDiv" value={seatCount} onChange={setSeatCount} items={seatCounts} title="Koltuk Sayısı" />
                                            </>
                                        }
                                        {
                                            vehicleType == '6' &&
                                            <>
                                                <BaseSelectMenu formClass="mtvForm" divClass="mtvFormDiv" value={minibusAge} onChange={setMinibusAge} items={minibusAges} title="Aracın Yaşı" />
                                                <BaseSelectMenu formClass="mtvForm" divClass="mtvFormDiv" value={truckWeight} onChange={setTruckWeight} items={truckWeights} title="Toplam Ağırlık" />
                                            </>
                                        }

                                        {/* SUBMIT AREA */}
                                        <div className="w-full mt-3">
                                            <button type="submit" className="bg-red-600 w-full py-3 font-medium rounded text-white">Hesapla</button>
                                        </div>
                                    </form>
                                    {/* Result Area */}
                                    {
                                        isLoading ?
                                            <div className="min-h-[600px] bg-white">Yükleniyor..</div>
                                            :
                                            <div className="mt-5 flex flex-col space-y-5 text-[#737373] bg-white p-7 rounded-lg">
                                                <div className="flex justify-between">
                                                    <span>2023 Toplam MTV Tutarı:</span>
                                                    <span className="font-extrabold">{yearlyAmount * 2} TL</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Yıllık Toplam Tutar::</span>
                                                    <span className="font-extrabold">{yearlyAmount} TL</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>1. Taksit (1-31 Ocak):</span>
                                                    <span className="font-extrabold">{yearlyAmount / 2} TL</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>2. Taksit (1-31 Temmuz):</span>
                                                    <span className="font-extrabold">{yearlyAmount / 2} TL</span>
                                                </div>
                                                <div className="pt-5 flex justify-between">
                                                    <span>2023 Ek Ödeme Tutarı:</span>
                                                    <span className="font-extrabold">{yearlyAmount} TL</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>1. Taksit (1-31 Ağustos):</span>
                                                    <span className="font-extrabold">{yearlyAmount / 2} TL</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>2. Taksit (1-30 Kasım):</span>
                                                    <span className="font-extrabold">{yearlyAmount / 2} TL</span>
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

export default CalculateMtv;