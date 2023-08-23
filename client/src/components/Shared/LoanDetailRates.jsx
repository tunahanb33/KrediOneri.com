function LoanDetailRates({ productInfo }) {
    const { interestRate, monthlyInstallment, totalAmount, totalInterestAmount, expenseAmount, appraisementFee, mortgageFee } = productInfo;
    const states = [
        {
            title: 'Faiz Oranı',
            value: `% ${interestRate}`
        },
        {
            title: 'Aylık Taksit',
            value: `${monthlyInstallment.toLocaleString()} TL`
        },
        {
            title: 'Toplam Ödeme',
            value: `${totalAmount.toLocaleString()} TL`
        },
        {
            title: 'Toplam Faiz',
            value: `${Number(totalInterestAmount.toFixed(2)).toLocaleString()} TL`
        },
        {
            title: 'Yıllık Maliyet Oranı',
            value: '%44,45'
        },
        {
            title: 'Banka Tahsis Ücreti',
            value: `${expenseAmount} TL`
        },
        {
            title: 'Ort. Ekspertiz Ücreti',
            value: `${appraisementFee?.toLocaleString()} TL`
        },
        {
            title: 'İpotek Ücreti',
            value: `${mortgageFee} TL`
        },
    ]
    return (
        <>
            {
                states.map((state, i) => {
                    {
                        return (
                            state.value &&
                            <div key={i} className='flex justify-between'>
                                <span className='font-light'>{state.title}</span>
                                <span className='font-bold'>{state.value}</span>
                            </div>

                        )
                    }
                })
            }
        </>
    );
}

export default LoanDetailRates;