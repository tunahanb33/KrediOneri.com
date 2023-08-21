function RecommendedLoans() {
    return (
        <div className="flex space-x-8 mt-12">
            {/* ITEM 1 */}
            {
                Array(4).fill(null).map((_, index) => {
                    return (
                        <div key={index} className="basis-1/4 p-5 flex flex-col border-2 border-gray-600 rounded-2xl">
                            <div className="flex">
                                {/* Header */}
                                <div className="w-full">
                                    <img width="100" src="https://cdn.hangikredi.com/images/bank/akbank-122-34.svg" />
                                    <div className="flex justify-between">
                                        <p>Konut Kredisi</p>
                                        <a className="underline" href="">Detay</a>
                                    </div>

                                </div>
                            </div>
                            {/* Input Areas */}
                            <div className="mt-6">
                                <div className="relative flex items-center mb-3">
                                    <input className="border w-full outline-none border-gray-500 rounded py-1 px-3 placeholder:text-xs placeholder:text-gray-800" placeholder="500.000" type="text"></input>
                                    <span className="absolute text-sm text-gray-400 right-3">TL</span>
                                </div>
                                <div>
                                    <select className="border w-full text-xs py-2 border-gray-500 rounded px-3">
                                        <option value="sa" className="text-xs text-gray-600">10 Yıl (120 Ay)</option>
                                    </select>
                                </div>
                            </div>
                            {/* Interests */}
                            <div className="my-3 flex flex-col space-y-2">
                                <div className="flex justify-between text-sm">
                                    <h6 className="text-gray-500">Faiz</h6>
                                    <span className="text-gray-800">% 2,90</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <h6 className="text-gray-500">Aylık Taksit</h6>
                                    <span className="text-gray-800">14.985
                                    <span className="text-[13px]">,08</span>
                                    <span className="text-[13px]"> TL</span>
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <h6 className="text-gray-500">Toplam Ödeme</h6>
                                    <span className="text-gray-800">1.806
                                    <span className="text-[13px]">,336</span>
                                    <span className="text-[13px]"> TL</span>
                                    </span>
                                </div>
                            </div>
                            {/* Button */}
                            <div>
                                <button className="border w-full rounded py-1 font-semibold text-[rgb(242,103,34)] border-[rgb(242,103,34)]">
                                    Hızlı Başvur
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default RecommendedLoans;