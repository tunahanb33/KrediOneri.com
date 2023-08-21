import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import HouseLoan from './views/HouseLoan';
import HouseLoansList from './views/HouseLoansList';
import HouseLoanBankDetail from './views/HouseLoanBankDetail';
import VehicleLoan from './views/VecihleLoan';
import ConsumerLoan from './views/ConsumerLoan';
import Admin from './views/Admin';
import CalculateCcCashAdvange from './views/CalculateTools/CalculateCcCashAdvange';
import CalculateTitleDeedFee from './views/CalculateTools/CalculateTitleDeedFee';
import ConsumerLoansList from './views/ConsumerLoansList';
function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/konut-kredisi' element={<HouseLoan />}>
          <Route path='sorgulama' element={<HouseLoansList />} />
        </Route>
        <Route path='/konut-kredisi/:bankName' element={<HouseLoanBankDetail />} />
        <Route path='/tasit-kredisi' element={<VehicleLoan />}></Route>
        <Route path='/ihtiyac-kredisi' element={<ConsumerLoan />}>
          <Route path='sorgulama' element={<ConsumerLoansList />} />
        </Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/taksitli-nakit-avans-hesaplama' element={<CalculateCcCashAdvange />} />
        <Route path='/tapu-harci-hesaplama' element={<CalculateTitleDeedFee />} />
      </Routes>
    </div>
  );
}

export default App;