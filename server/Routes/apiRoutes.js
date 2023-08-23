const router = require('express').Router();
const { houseLoanList, housingLoanDetail, consumerLoanList, vehicleLoanList, consumerLoanDetail, vehicleLoanDetail } = require('../Controller/apiController');

router.get('/housingloan', houseLoanList);
router.get('/housingloan/detail', housingLoanDetail);

router.get('/consumerloan', consumerLoanList);
router.get('/consumerloan/detail', consumerLoanDetail);

router.get('/vehicleloan', vehicleLoanList);
router.get('/vehicleloan/detail', vehicleLoanDetail);

module.exports = router;