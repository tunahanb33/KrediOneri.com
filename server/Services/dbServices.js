const bankModel = require('../database/Schemas/Banks');
const houseLoansModel = require('../database/Schemas/HouseLoans');
const consumerLoansModel = require('../database/Schemas/ConsumerLoans');
const vehicleStLoansModel = require('../database/Schemas/VehicleStLoans');
const vehicleNdLoansModel = require('../database/Schemas/VehicleNdLoans');
const getBankViaSeoName = (seoName) => bankModel.findOne({ seoName });
const getHouseLoanDetail = (amount, maturity, bank) => houseLoansModel.findOne({ bank, 'creditTerm.min': { $lte: maturity }, 'creditTerm.max': { $gte: maturity }, 'creditAmount.min': { $lte: amount }, 'creditAmount.max': { $gte: amount } }).select('-_id -creditAmount -creditTerm').populate({ path: 'bank', select: 'name id atmCount branchCount workplaceCount description logoUri seoName -_id' });
const getConsumerLoanDetail = (amount, maturity, bank) => consumerLoansModel.findOne({ bank, 'creditTerm.min': { $lte: maturity }, 'creditTerm.max': { $gte: maturity }, 'creditAmount.min': { $lte: amount }, 'creditAmount.max': { $gte: amount } }).select('-_id -creditAmount -creditTerm').populate({ path: 'bank', select: 'name id atmCount branchCount workplaceCount description logoUri seoName -_id' });
const getVehicleLoanDetail = (amount, maturity, bank, type) => {
    if (type == '0') return vehicleStLoansModel.findOne({ bank, 'creditTerm.min': { $lte: maturity }, 'creditTerm.max': { $gte: maturity }, 'creditAmount.min': { $lte: amount }, 'creditAmount.max': { $gte: amount } }).select('-_id -creditAmount -creditTerm').populate({ path: 'bank', select: 'name id atmCount branchCount workplaceCount description logoUri seoName -_id' });
    return vehicleNdLoansModel.findOne({ bank, 'creditTerm.min': { $lte: maturity }, 'creditTerm.max': { $gte: maturity }, 'creditAmount.min': { $lte: amount }, 'creditAmount.max': { $gte: amount } }).select('-_id -creditAmount -creditTerm').populate({ path: 'bank', select: 'name id atmCount branchCount workplaceCount description logoUri seoName -_id' });
    }
const getHouseLoanList = (amount, maturity) => houseLoansModel.find({ 'creditTerm.min': { $lte: maturity }, 'creditTerm.max': { $gte: maturity }, 'creditAmount.min': { $lte: amount }, 'creditAmount.max': { $gte: amount } }).select('-_id -creditAmount -creditTerm').populate({ path: 'bank', select: 'name id atmCount branchCount workplaceCount description logoUri seoName -_id' });
const getAllHouseLoans = () => houseLoansModel.find().populate({ path: 'bank', select: 'name id logoUri' });
const getAllConsumerLoans = () => consumerLoansModel.find().populate({ path: 'bank', select: 'name id logoUri' });
const houseLoanUpdateViaObjectId = (id, content) => houseLoansModel.findByIdAndUpdate(id, content);
const consumerLoanUpdateViaObjectId = (id, content) => consumerLoansModel.findByIdAndUpdate(id, content);
const getAllVehicleStLoans = () => vehicleStLoansModel.find().populate({ path: 'bank', select: 'name id logoUri' });
const getAllVehicleNdLoans = () => vehicleNdLoansModel.find().populate({ path: 'bank', select: 'name id logoUri' });
const vehicleStLoanUpdateViaObjectId = (id, content) => vehicleStLoansModel.findByIdAndUpdate(id, content);
const vehicleNdLoanUpdateViaObjectId = (id, content) => vehicleNdLoansModel.findByIdAndUpdate(id, content);
const getConsumerLoanList = (amount, maturity) => consumerLoansModel.find({ 'creditTerm.min': { $lte: maturity }, 'creditTerm.max': { $gte: maturity }, 'creditAmount.min': { $lte: amount }, 'creditAmount.max': { $gte: amount } }).select('-_id -creditAmount -creditTerm').populate({ path: 'bank', select: 'name id atmCount branchCount workplaceCount description logoUri seoName -_id' });
const getVehicleLoanList = (amount, maturity, type) => {
    if (type == '0') return vehicleStLoansModel.find({ 'creditTerm.min': { $lte: maturity }, 'creditTerm.max': { $gte: maturity }, 'creditAmount.min': { $lte: amount }, 'creditAmount.max': { $gte: amount } }).select('-_id -creditAmount -creditTerm').populate({ path: 'bank', select: 'name id atmCount branchCount workplaceCount description logoUri seoName -_id' });
    return vehicleNdLoansModel.find({ 'creditTerm.min': { $lte: maturity }, 'creditTerm.max': { $gte: maturity }, 'creditAmount.min': { $lte: amount }, 'creditAmount.max': { $gte: amount } }).select('-_id -creditAmount -creditTerm').populate({ path: 'bank', select: 'name id atmCount branchCount workplaceCount description logoUri seoName -_id' });
}

module.exports = {
    getBankViaSeoName,
    getHouseLoanDetail,
    getHouseLoanList,
    getAllHouseLoans,
    getAllConsumerLoans,
    getAllVehicleStLoans,
    getAllVehicleNdLoans,
    houseLoanUpdateViaObjectId,
    consumerLoanUpdateViaObjectId,
    vehicleStLoanUpdateViaObjectId,
    vehicleNdLoanUpdateViaObjectId,
    getConsumerLoanList,
    getVehicleLoanList,
    getConsumerLoanDetail,
    getVehicleLoanDetail
}