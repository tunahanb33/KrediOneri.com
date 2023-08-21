const router = require('express').Router();
const { getHouseLoansList, getConsumerLoansList, getVehicleStLoansList, getVehicleNdLoansList,  houseLoanEdit, consumerLoanEdit, vehicleLoanStEdit, vehicleLoanNdEdit } = require('../Controller/adminController');
router.get('/housingloan/list', getHouseLoansList);
router.post('/housingloan/edit', houseLoanEdit);

router.get('/consumerloan/list', getConsumerLoansList);
router.post('/consumerloan/edit', consumerLoanEdit);

router.get('/vehiclestloan/list', getVehicleStLoansList);
router.post('/vehiclestloan/edit', vehicleLoanStEdit);


router.get('/vehiclendloan/list', getVehicleNdLoansList);
router.post('/vehiclendloan/edit', vehicleLoanNdEdit);

module.exports = router;