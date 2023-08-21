import { useState, useEffect } from "react";
function LoanEditModal({ selectedLoan, setShowDetailModal, updateLoanDetail }) {
    const [isEditMode, setIsEditMode] = useState(false);
    const selectedLoanDeepClone = JSON.parse(JSON.stringify(selectedLoan));
    const { productId, creditName, creditAmount, creditTerm, interestRate } = selectedLoanDeepClone;
    const [loanStates, setLoanStates] = useState({
        productId,
        creditName,
        creditAmount,
        creditTerm,
        interestRate
    });
    useEffect(() => {
        setLoanStates({
            productId,
            creditName,
            creditAmount,
            creditTerm,
            interestRate
        });
    }, [isEditMode]);
    function setNestedObjectValue(obj, path, value) {
        const keys = path.split('.');
        let current = obj;
        console.log(current);
        for (let i = 0; i < keys.length - 1; i++) {
            current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = Number(value);
        return { ...obj };
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditMode(!isEditMode);
        if (!isEditMode) return;
        for (const [key, value] of Object.entries(loanStates)) {
            selectedLoanDeepClone[key] = value;
        };
        updateLoanDetail(selectedLoanDeepClone);
    };
    return (
        <div className='flex justify-center backdrop-blur-sm items-center fixed inset-0'>
            <div className='bg-white p-20 rounded border border-gray-300'>
                <h3 className='my-3 text-2xl font-bold'>Kredi Detaylarını Düzenle</h3>
                <form>
                    <div className="mb-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Banka ID</label>
                        <div className="outline-none font-medium cursor-not-allowed shadow-sm bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">{selectedLoan.bank.id}</div>
                    </div>
                    <div className="mb-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Banka Adı</label>
                        <div className="outline-none font-medium cursor-not-allowed shadow-sm bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">{selectedLoan.bank.name}</div>
                    </div>
                    <div className="mb-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Banka Logo Path</label>
                        <div className="outline-none font-medium cursor-not-allowed shadow-sm bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">{selectedLoan.bank.logoUri}</div>
                    </div>
                    <hr className="my-5" />
                    {/* ITEM 1 */}
                    <div className="mb-3">
                        <label htmlFor="productId" className="block mb-2 text-sm font-medium text-gray-900">Kredi ID</label>
                        {
                            isEditMode ?
                                <input value={loanStates.productId} onChange={(e) => setLoanStates({ ...loanStates, productId: e.target.value })} id="productId" className="outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                :
                                <div className="outline-none cursor-not-allowed shadow-sm font-medium bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">{selectedLoan.productId}</div>
                        }
                    </div>
                    {/* ITEM 2 */}
                    <div className="mb-3">
                        <label htmlFor="productName" className="block mb-2 text-sm font-medium text-gray-900">Kredi Adı</label>
                        {
                            isEditMode ?
                                <input value={loanStates.creditName} onChange={(e) => setLoanStates({ ...loanStates, creditName: e.target.value })} id="productName" className="outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                :
                                <div className="outline-none cursor-not-allowed shadow-sm font-medium bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">{selectedLoan.creditName}</div>
                        }
                    </div>
                    {/* ITEM 3 */}
                    <div className="mb-3">
                        <label htmlFor="maturityMin" className="block mb-2 text-sm font-medium text-gray-900">Min Vade Süresi</label>
                        {
                            isEditMode ?
                                <input value={loanStates.creditTerm.min} onChange={(e) => setLoanStates(setNestedObjectValue(loanStates, 'creditTerm.min', (e.target.value)))} id="maturityMin" className="outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                :
                                <div className="outline-none cursor-not-allowed shadow-sm font-medium bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">{selectedLoan.creditTerm.min} </div>
                        }
                    </div>
                    {/* ITEM 4 */}
                    <div className="mb-3">
                        <label htmlFor="maturityMax" className="block mb-2 text-sm font-medium text-gray-900">Max Vade Süresi</label>
                        {
                            isEditMode ?
                                <input value={loanStates.creditTerm.max} onChange={(e) => setLoanStates(setNestedObjectValue(loanStates, 'creditTerm.max', (e.target.value)))} id="maturityMax" className="outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                :
                                <div className="outline-none cursor-not-allowed shadow-sm font-medium bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">{selectedLoan.creditTerm.max} </div>
                        }
                    </div>
                    {/* ITEM 5 */}
                    <div className="mb-3">
                        <label htmlFor="amountMin" className="block mb-2 text-sm font-medium text-gray-900">Min Tutar</label>
                        {
                            isEditMode ?
                                <input value={loanStates.creditAmount.min} onChange={(e) => setLoanStates(setNestedObjectValue(loanStates, 'creditAmount.min', (e.target.value)))} id="amountMin" className="outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                :
                                <div className="outline-none cursor-not-allowed shadow-sm font-medium bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">{selectedLoan.creditAmount.min} </div>
                        }
                    </div>
                    {/* ITEM 6 */}
                    <div className="mb-3">
                        <label htmlFor="amountMax" className="block mb-2 text-sm font-medium text-gray-900">Max Tutar</label>
                        {
                            isEditMode ?
                                <input value={loanStates.creditAmount.max} onChange={(e) => setLoanStates(setNestedObjectValue(loanStates, 'creditAmount.max', (e.target.value)))} id="amountMax" className="outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                :
                                <div className="outline-none cursor-not-allowed shadow-sm font-medium bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">{selectedLoan.creditAmount.max.toLocaleString()} </div>
                        }
                    </div>
                    {/* ITEM 7 */}
                    <div className="mb-3">
                        <label htmlFor="interestRate" className="block mb-2 text-sm font-medium text-gray-900">Faiz Oranı</label>
                        {
                            isEditMode ?
                                <input value={loanStates.interestRate} onChange={(e) => setLoanStates({ ...loanStates, interestRate: e.target.value })} id="interestRate" className="outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                :
                                <div className="outline-none cursor-not-allowed shadow-sm font-medium bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">{selectedLoan.interestRate}</div>
                        }
                    </div>
                    <div className="flex space-x-5">
                        <button onClick={() => setShowDetailModal(false)} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Kapat</button>
                        <button onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{isEditMode ? 'Değişiklikleri Kaydet' : 'Düzenle'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoanEditModal;