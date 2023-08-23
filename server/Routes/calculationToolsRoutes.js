const router = require('express').Router();
const { calculateMTV, calculateTitleDee, calculateBridgeToll, calculateTrafficPenalty } = require('../Controller/calculationToolsController');

router.get('/calculatemtv', calculateMTV);
router.get('/calculatetitledeedfee', calculateTitleDee);
router.get('/calculatebridgetoll', calculateBridgeToll);
router.get('/calculatetrafficpenalty', calculateTrafficPenalty);


module.exports = router;