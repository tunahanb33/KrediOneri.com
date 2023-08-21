import { useState } from "react";
function PaymentPlan({ paymentPlan }) {
    const slicedArray = paymentPlan.monthlyPayments.slice(0, 12);
    const [currentlyArray, setCurrentlyArray] = useState(slicedArray);
    const handleShowAllPlan = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if (currentlyArray.length == slicedArray.length)
            setCurrentlyArray(paymentPlan.monthlyPayments)
        else
            setCurrentlyArray(slicedArray)
    }
    return (
        <div className="text-[rgb(43,58,66)]">
            <table className="table-auto w-full text-center bg-white">
                <thead>
                    <tr>
                        <th className="py-4">Taksit</th>
                        <th>Anapara</th>
                        <th>Faiz</th>
                        <th>KKDF</th>
                        <th>BSMV</th>
                        <th>Bakiye</th>
                    </tr>
                </thead>
                <tbody className="border-t font-light">
                    {
                        currentlyArray.map((maturity) => {
                            return (
                                <tr key={maturity.currentMaturity}>
                                    <td className="py-2 border-r">
                                        <div className="relative">
                                            <span className="absolute left-2 font-bold">{maturity.currentMaturity}</span>
                                            <span>{maturity.monthlyInstallment} TL</span>
                                        </div></td>
                                    <td className="border-r">{maturity.mainPayment} TL</td>
                                    <td className="border-r">{maturity.loanPayment} TL</td>
                                    <td className="border-r">{maturity.kkdf} TL</td>
                                    <td className="border-r">{maturity.bsmv} TL</td>
                                    <td>{(maturity.remainBalance) <= 1 ? '0' : maturity.remainBalance.toLocaleString()} TL</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="text-center">
                <button onClick={handleShowAllPlan} className="bg-orange-600 text-white w-full py-1.5 rounded">{currentlyArray.length == slicedArray.length ? 'Tüm Planı Göster' : 'Planı Daralt'}</button>
            </div>
        </div>
    );
}

export default PaymentPlan;