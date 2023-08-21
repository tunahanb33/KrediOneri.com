function AdminLoanTypeSelector({ handleClick, activeType }) {
    return (
        <div className='flex text-center space-x-2 w-full'>
            <div className={`${activeType == 'banks' && 'border-t-8 shadow-2xl border-orange-600 border-2'} w-full border-gray-600 rounded border bg-white`}>
                <button onClick={() => handleClick('banks')} className='py-2 w-full'>Bankalar</button>
            </div>
            <div className={`${activeType == 'consumerLoans' && 'border-t-8 shadow-2xl border-orange-600 border-2'} w-full border-gray-600 rounded border bg-white`}>
                <button onClick={() => handleClick('consumerLoans')} className='py-2 w-full h-full'>İhtiyaç Kredileri</button>
            </div>
            <div className={`${activeType == 'houseLoans' && 'border-t-8 shadow-2xl border-orange-600 border-2'} w-full border-gray-600 rounded border bg-white`}>
                <button onClick={() => handleClick('houseLoans')} className='py-2 w-full h-full'>Konut Kredileri</button>
            </div>
            <div className={`${activeType == 'vehicleStLoans' && 'border-t-8 shadow-2xl border-orange-600 border-2'} w-full border-gray-600 rounded border bg-white`}>
                <button onClick={() => handleClick('vehicleStLoans')} className='py-2 w-full h-full'>0 Km Taşıt Kredileri</button>
            </div>
            <div className={`${activeType == 'vehicleNdLoans' && 'border-t-8 shadow-2xl border-orange-600 border-2'} w-full border-gray-600 rounded border bg-white`}>
                <button onClick={() => handleClick('vehicleNdLoans')} className='py-2 w-full h-full'>2. El Taşıt Kredileri</button>
            </div>
        </div>
    );
}

export default AdminLoanTypeSelector;