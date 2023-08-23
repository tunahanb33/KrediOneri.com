import { Link } from "react-router-dom";
function LoanListItem({ loan, amount, maturity, navigateParam }) {
    const generateUri = () => {
        if (navigateParam.includes('tasit-kredisi')) return `/tasit-kredisi/${loan.bank.seoName}?amount=${amount}&maturity=${maturity}&${navigateParam.split('?')[1]}`
        return `/${navigateParam}/${loan.bank.seoName}?amount=${amount}&maturity=${maturity}`
    };
    return (
        <div className="flex bg-white w-[70%] justify-between items-center border border-gray-300 rounded shadow-lg p-5">
            <div>
                <img className="w-[160px] relative -left-6 h-[32px]" src={loan.bank.logoUri} alt="" />
                <span>{loan.creditName}</span>
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
                <div>
                    <h5 className="text-xs text-gray-500">Toplam Ödeme</h5>
                    <span className="font-semibold">{(Math.floor(loan.totalAmount)).toLocaleString()}
                        <span className="text-[12px]"> TL</span>
                    </span>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center">
                    <button className="border-2 text-orange-600 rounded py-1 border-orange-600 px-6">Hemen Başvur</button>
                    <Link to={generateUri()} className="text-[12px] underline font-medium mt-2" href="">Detay</Link>
                </div>
            </div>
        </div>
    );
}

export default LoanListItem;