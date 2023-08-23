const getMatchedMtvValue = require('../Utils/getMatchedMtvValue');
const BridgeTollData = require('../database/Static/BridgeTollData.json');
const TrafficPenaltyData = require('../database/Static/TrafficPenaltyData.json');
const calculateMTV = (req, res) => {
    const { type, vehicleyear, option, vehicleValue } = req.query;
    const yearlyAmount = getMatchedMtvValue(type, vehicleyear, option, vehicleValue);
    if (!yearlyAmount) return res.status(400).json({ success: false, message: 'Invalid values' });
    res.status(200).json({ yearlyAmount });
};

const calculateTitleDee = (req, res) => {
    const { houseValue } = req.query;
    if (!houseValue) return res.status(400).json({ success: false, message: 'Invalid queries' });
    return res.status(200).json({ feeAmount: (houseValue * 0.02) })
};

const calculateBridgeToll = async (req, res) => res.status(200).json(BridgeTollData);

const calculateTrafficPenalty = async (req, res) => res.status(200).json(TrafficPenaltyData);


module.exports = {
    calculateMTV,
    calculateTitleDee,
    calculateBridgeToll,
    calculateTrafficPenalty
}