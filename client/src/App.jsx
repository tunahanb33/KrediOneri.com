import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import HouseLoan from './views/HouseLoan';
import HouseLoansList from './views/HouseLoansList';
import HouseLoanBankDetail from './views/HouseLoanBankDetail';
import VehicleLoan from './views/VecihleLoan';
import ConsumerLoan from './views/ConsumerLoan';
import Admin from './views/Admin';
import CalculateTitleDeedFee from './views/CalculateTools/CalculateTitleDeedFee';
import ConsumerLoansList from './views/ConsumerLoansList';
import CalculateMtv from './views/CalculateTools/CalculateMtv';
import CalculateBridgeToll from './views/CalculateTools/CalculateBridgeToll';
import CalculateTrafficPenalty from './views/CalculateTools/CalculateTrafficPenalty';
import CalculateCcMinimumPayment from './views/CalculateTools/CalculateCcMinimumPayment';
import CalculateCreditCardLimit from './views/CalculateTools/CalculateCreditCardLimit';
import VehicleLoanList from './views/VehicleLoansList';
import ConsumerLoanBankDetail from './views/ConsumerLoanBankDetail';
import VehicleLoanBankDetail from './views/VehicleLoanBankDetail';
function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/konut-kredisi' element={<HouseLoan />}>
          <Route path='sorgulama' element={<HouseLoansList />} />
        </Route>
        <Route path='/konut-kredisi/:bankName' element={<HouseLoanBankDetail />} />
        <Route path='/ihtiyac-kredisi/:bankName' element={<ConsumerLoanBankDetail />} />
        <Route path='/tasit-kredisi/:bankName' element={<VehicleLoanBankDetail />} />
        <Route path='/tasit-kredisi' element={<VehicleLoan />}>
          <Route path='sorgulama' element={<VehicleLoanList />} />
        </Route>
        <Route path='/ihtiyac-kredisi' element={<ConsumerLoan />}>
          <Route path='sorgulama' element={<ConsumerLoansList />} />
        </Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/tapu-harci-hesaplama' element={<CalculateTitleDeedFee />} />
        <Route path='/mtv-hesaplama' element={<CalculateMtv />} />
        <Route path='/kopru-gecis-ucreti-hesaplama' element={<CalculateBridgeToll />} />
        <Route path='/trafik-cezasi-hesaplama' element={<CalculateTrafficPenalty />} />
        <Route path='/asgari-odeme-tutari-hesaplama' element={<CalculateCcMinimumPayment />} />
        <Route path='/kredi-karti-limit-hesaplama' element={<CalculateCreditCardLimit />} />
      </Routes>
    </div>
  );
}

export default App;