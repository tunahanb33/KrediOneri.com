const router = require('express').Router();
const { houseLoanList, housingLoanDetail, consumerLoanList, vehicleLoanList } = require('../Controller/apiController');

router.get('/housingloan', houseLoanList);
router.get('/housingloan/detail', housingLoanDetail);

router.get('/consumerloan', consumerLoanList);

router.get('/vehicleloan', vehicleLoanList);

module.exports = router;