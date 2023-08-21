import { useLocation } from "react-router-dom";
import useAxios from '../Hooks/useAxios';
import LoanListItem from "../components/Shared/LoanListItem";
import { useNavigate } from "react-router-dom";
function ConsumerLoansList() {
    const navigate = useNavigate();
    const params = new URLSearchParams(useLocation().search);
    const amount = params.get('amount');
    const maturity = params.get('maturity');
    const config = {
        method: 'get',
        url: `/housingloan?amount=${amount}&maturity=${maturity}`
    };
    const [results, errors, isLoading] = useAxios(config);
    if (errors)
        navigate('/');
    return (
        <div className="w-full flex flex-col space-y-5 items-center mt-12">
            <h3 className="font-bold text-xl">{(Number(amount)).toLocaleString()} TL {maturity} Ay Vadeli İhtiyaç Kredileri</h3>
            {/* ITEM 1 */}
            {
                isLoading ?
                    <div>Loading</div>
                    :
                    <>
                        {
                            results.products.map((loan) => {
                                return <LoanListItem key={loan.productId} amount={amount} maturity={maturity} loan={loan} />
                            })
                        }
                    </>
            }
        </div>
    );
}

export default ConsumerLoansList;