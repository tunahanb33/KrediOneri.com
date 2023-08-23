import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import LoanListItem from "../components/Shared/LoanListItem";
import { useEffect } from "react";
function VecihleLoansList() {
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(useLocation().search);
    const amount = queryParams.get('amount');
    const maturity = queryParams.get('maturity');
    const type = queryParams.get('type');
    const [results, errors, isLoading] = useAxios({ method: 'get', url: `/vehicleloan?amount=${amount}&maturity=${maturity}&type=${type}` }, !!(amount && maturity));
    useEffect(() => {
        if (!amount || !maturity)
            navigate('/tasit-kredisi')
    }, [amount, maturity, type]);
    return (
        <div className="w-full flex flex-col space-y-5 items-center mt-12">
            <h3 className="font-bold text-xl">{(Number(amount)).toLocaleString()} TL {maturity} Ay Vadeli Taşıt Kredileri</h3>
            {/* ITEM 1 */}
            {
                isLoading ?
                    <div>Loading</div>
                    :
                    <>
                        {
                            results.products.map((loan) => {
                                return <LoanListItem navigateParam={`tasit-kredisi?type=${type}`} key={loan.productId} amount={amount} maturity={maturity} loan={loan} />
                            })
                        }
                    </>
            }
        </div>
    );
}

export default VecihleLoansList;