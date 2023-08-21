function LoanFormCmp({ creditForm, handleChange, maturityHandleChange, maturities, handleSubmit, isVehicle, formCarStatus, vehicleHandleChange }) {
    return (
        <form onSubmit={handleSubmit} className="text-sm my-[16px]">
            <div className="space-x-5 flex flex-wrap">
                <div className="basis-[30%]">
                    <input value={creditForm.amount} onChange={handleChange} className="border outline-none py-[6px] w-full px-[16px] rounded border-gray-400" type="text" placeholder="Kredi Tutarı" />
                </div>
                <div className="basis-[30%]">
                    <select placeholder="Kredi Vadesi" value={creditForm.maturity} onChange={maturityHandleChange} className="border outline-none w-full py-[6px] px-[16px] rounded border-gray-400">
                        {
                            maturities.map((maturity) => <option key={maturity.value} value={maturity.value}>{maturity.name}</option>)
                        }
                    </select>
                </div>
                {
                    isVehicle &&
                    <div className="basis-[30%]">
                        <select placeholder="Kredi Vadesi" value={creditForm.vehicle.value} onChange={vehicleHandleChange} className="border outline-none w-full py-[6px] px-[16px] rounded border-gray-400">
                            {
                                formCarStatus.map((carStatus) => <option key={carStatus.value} value={carStatus.value}>{carStatus.name}</option>)
                            }
                        </select>
                    </div>
                }
                <div className={isVehicle ? 'w-full mt-3 flex justify-center' : 'basis-[30%]'}>
                    <button className={`${isVehicle ? 'w-1/3' : 'w-full'} bg-[#ff6000] text-white  px-[16px] py-2 h-full rounded font-bold`}>Hesapla</button>
                </div>
            </div>
            <p className="text-xs mt-3 mx-[60px] text-center">
                Avantajlı faiz oranları ile ihtiyaç kredisi hesaplamak ve bankalara tüketici kredisi başvurusunda bulunmak KrediOneri.com’da güvenli ve ücretsiz!
            </p>
        </form>
    );
}

export default LoanFormCmp;