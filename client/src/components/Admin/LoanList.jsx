function LoanList({ listItem, setSelectedLoan, setShowDetailModal }) {
    const handleClick = () => {
        setShowDetailModal(true);
        setSelectedLoan(listItem);
    }
    return (
        <div className="flex bg-white mt-8 w-[70%] justify-between items-center border border-gray-300 rounded shadow-lg p-5">
            <div>
                <img className="w-[120px] h-[32px]" src={listItem.bank.logoUri} alt="" />
                <span>{listItem.creditName}</span>
            </div>
            <div className="flex justify-between space-x-12">
                <div className="text-center">
                    <h5 className="text-xs text-gray-500">Kredi Tutarı</h5>
                    <span className="font-semibold">{listItem.creditAmount.min} - {listItem.creditAmount.max.toLocaleString()} TL</span>
                </div>
                <div className="text-center">
                    <h5 className="text-xs text-gray-500">Kredi Vadesi</h5>
                    <span className="font-semibold">{listItem.creditTerm.min} - {listItem.creditTerm.max} Ay</span>
                </div>
                <div className="text-center">
                    <h5 className="text-xs text-gray-500">Kredi Vadesi</h5>
                    <span className="font-semibold">% {listItem.interestRate}</span>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center">
                    <button onClick={handleClick} className="border-2 text-orange-600 rounded py-1 border-orange-600 px-6">Görüntüle</button>
                </div>
            </div>
        </div>
    );
}

export default LoanList;