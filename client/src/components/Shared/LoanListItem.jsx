import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
function LoanListItem({ loan, amount, maturity }) {
    const [showInformation, setShowInformation] = useState(false);
    return (
        <div className="flex bg-white w-[70%] justify-between items-center border border-gray-300 rounded shadow-lg p-5">
            <div>
                <img className="w-[160px] relative -left-6 h-[32px]" src={loan.bank.logoUri} alt="" />
                <span>Konut Kredisi</span>
            </div>
            <div className="flex justify-between space-x-12">
                <div>
                    <h5 className="text-xs text-gray-500">Faiz oranı</h5>
                    <span className="font-semibold">%{loan.interestRate}</span>
                </div>
                <div>
                    <h5 className="text-xs text-gray-500">Aylık Taksit</h5>
                    <span className="font-semibold">{loan.monthlyInstallment.toString().split('.')[0]}
                        <span className="text-[12px]">,{loan.monthlyInstallment.toString().split('.')[1]}</span>
                        <span className="text-[12px]"> TL</span>
                    </span>
                </div>
                <div className="relative">
                    {
                        showInformation &&
                        <div className="absolute font-thin bg-[#eaf0f4] text-xs min-w-[250px] bottom-12 p-2 rounded text-[#4f676d]">
                            <h5 className="font-medium mb-1">Toplam Ödemeye Dahil Olan Ücretler</h5>
                            <div className="flex justify-between">
                                <span>Kredi Tutarı</span>
                                <span>{loan.amount.toLocaleString()} TL</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tahsis Ücreti</span>
                                <span>{loan.totalFeeAmount.toLocaleString()} TL</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Faiz Tutarı</span>
                                <span>{loan.totalInterest.toLocaleString()} TL</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Toplam Ödeme</span>
                                <span>{loan.totalAmount.toLocaleString()} TL</span>
                            </div>
                        </div>
                    }
                    <div className="flex items-center space-x-2">
                        <h5 className="text-xs text-gray-500">Toplam Ödeme</h5>
                        <div className="cursor-pointer" onMouseEnter={() => setShowInformation(false)} onMouseLeave={() => setShowInformation(false)}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                        </div>
                    </div>
                    <span className="font-semibold">{(Math.floor(loan.totalAmount)).toLocaleString()}
                        <span className="text-[12px]"> TL</span>
                    </span>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center">
                    <button className="border-2 text-orange-600 rounded py-1 border-orange-600 px-6">Hemen Başvur</button>
                    <Link to={`/konut-kredisi/akbank/?amount=${amount}&maturity=${maturity}`} className="text-[12px] underline font-medium mt-2" href="">Detay</Link>
                </div>
            </div>
        </div>
    );
}

export default LoanListItem;