const router = require('express').Router();
const { calculateCcCash, titleDeedFee } = require('../Controller/calculationToolsController');
router.post('/CalculateCcCashAdvance', calculateCcCash);
router.post('/CalculateTitleDeedFee', titleDeedFee)


module.exports = router;