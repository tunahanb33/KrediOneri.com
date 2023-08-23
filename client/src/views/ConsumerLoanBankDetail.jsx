import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import LoanPieChart from '../components/Shared/LoanPieChart';
import LoanDetailRates from '../components/Shared/LoanDetailRates';
import { useState, useEffect } from 'react';
import PaymentPlan from '../components/Shared/PaymentPlan';
import GeneralInformation from '../components/Shared/GeneralInformation';
import useAxios from '../Hooks/useAxios';
function ConsumerLoanBankDetail() {
    const { bankName } = useParams();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(useLocation().search);
    const amount = queryParams.get('amount');
    const maturity = queryParams.get('maturity');
    const [results, errors, isLoading] = useAxios({ method: 'get', url: `/consumerloan/detail?bankSeoName=${bankName}&amount=${amount}&maturity=${maturity}` }, !!(amount && maturity));
    const [showPaymentPlan, setShowPaymentPlan] = useState(false);
    useEffect(() => {
        if (!amount || !maturity) navigate('/ihtiyac-kredisi')
    }, [amount, maturity]);
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
            <Header />
            {/*  Page content */}
            <main className="flex-grow">
                <section className="bg-gradient-to-b from-gray-200 to-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6">
                        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                            {
                                isLoading ?
                                    <div>Loading..</div>
                                    :
                                    <div>
                                        {/* head */}
                                        <div className='w-full flex space-x-5'>
                                            <div className='w-[35%] bg-white'>
                                                <LoanPieChart productInfo={results.productInfo} />
                                            </div>
                                            <div className='w-[65%] flex flex-col space-y-3 divide-y text-sm p-5 bg-white'>
                                                <LoanDetailRates productInfo={results.productInfo} />
                                            </div>
                                        </div>
                                        {/* alt props */}
                                        <div className='mt-5 w-full py-3'>
                                            <div className='flex text-center'>
                                                <div className={`${!showPaymentPlan && 'bg-white border-t-4 border-orange-500'} w-1/2 py-2`}>
                                                    <button className='w-full' onClick={() => setShowPaymentPlan(false)}>Genel Bilgiler</button>
                                                </div>
                                                <div className={`${showPaymentPlan && 'bg-white border-t-4 border-orange-500'} w-1/2 py-2`}>
                                                    <button className='w-full' onClick={() => setShowPaymentPlan(true)}>Ödeme Planı</button>
                                                </div>
                                            </div>
                                            {
                                                showPaymentPlan ?
                                                    <PaymentPlan paymentPlan={results.paymentPlan} />
                                                    :
                                                    <GeneralInformation />
                                            }
                                        </div>
                                    </div>

                            }
                        </div>
                    </div>
                </section>

            </main>

            <Footer />

        </div>
    );
}

export default ConsumerLoanBankDetail;