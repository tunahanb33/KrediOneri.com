const { getBankViaSeoName, getHouseLoanDetail, getHouseLoanList, getConsumerLoanList, getVehicleLoanList } = require('../Services/dbServices');
const houseLoanPaymentPlan = require('../Utils/houseLoanPaymentPlan');
const monthlyInstallmentCalculator = require('../Utils/monthlyInstallmentCalculator');

const houseLoanList = async (req, res) => {
    let { amount, maturity } = req.query;
    if (!amount || !maturity) return res.status(400).json({ success: false, message: 'Invalid queries' });
    [amount, maturity] = [parseInt(amount), parseInt(maturity)];
    const matchedsLoanList = await getHouseLoanList(amount, maturity);
    const changedLoanList = matchedsLoanList.map((loan) => {
        const monthlyPayment = monthlyInstallmentCalculator(amount, maturity, (loan.interestRate / 100));
        const totalInterest = (monthlyPayment * maturity) - amount;
        const expenseAmount = amount * 0.005;
        const totalFeeAmount = loan.appraisementFee + loan.mortgageFee + expenseAmount;
        const totalAmount = totalInterest + amount + totalFeeAmount;
        return {
            ...loan._doc,
            amount,
            maturity,
            monthlyInstallment: monthlyPayment,
            totalInterest,
            expenseAmount,
            totalFeeAmount,
            totalAmount,
        }
    });
    res.status(200).json({ products: changedLoanList })
};

const housingLoanDetail = async (req, res) => {
    const { bankSeoName: seoName, maturity, amount } = req.query;
    if (!seoName || !maturity || !amount) return res.status(400).json({ success: false, message: 'Invalid queries' });
    const bank = await getBankViaSeoName(seoName);
    if (!bank) return res.status(400).json({ success: false, message: 'Invalid bankSeoName' });
    const matchedLoan = await getHouseLoanDetail(amount, maturity, bank);
    if (!matchedLoan) return res.status(400).json({ success: false, message: 'Not Found' });
    const interestRate = matchedLoan.interestRate / 100;
    const paymentPlan = { amount, maturity, interestRate, monthlyPayments: houseLoanPaymentPlan(amount, maturity, interestRate) };
    const monthlyInstallment = monthlyInstallmentCalculator(amount, maturity, interestRate);
    const totalInterestAmount = (monthlyInstallment * maturity) - amount;
    const expenseAmount = (amount * 0.005);
    const totalFeeAmount = matchedLoan.appraisementFee + matchedLoan.mortgageFee + expenseAmount;
    const totalAmount = totalInterestAmount + parseInt(amount) + totalFeeAmount;
    res.status(200).json({ productInfo: { ...matchedLoan._doc, expenseAmount, totalFeeAmount, amount, maturity, monthlyInstallment, totalInterestAmount, totalAmount }, paymentPlan });
};

const consumerLoanList = async (req, res) => {
    let { amount, maturity } = req.query;
    if (!amount || !maturity || maturity == 'null' || amount == 'null') return res.status(400).json({ success: false, message: 'Invalid queries' });
    [amount, maturity] = [parseInt(amount), parseInt(maturity)];
    const matchedsLoanList = await getConsumerLoanList(amount, maturity);
    const changedLoanList = matchedsLoanList.map((loan) => {
        const monthlyPayment = monthlyInstallmentCalculator(amount, maturity, (loan.interestRate / 100));
        const totalInterest = (monthlyPayment * maturity) - amount;
        const expenseAmount = amount * 0.005;
        const totalAmount = totalInterest + amount
        return {
            ...loan._doc,
            amount,
            maturity,
            monthlyInstallment: monthlyPayment,
            totalInterest,
            expenseAmount,
            totalAmount,
        }
    });
    res.status(200).json({ products: changedLoanList });
};

const vehicleLoanList = async (req, res) => {
    let { amount, maturity, type } = req.query;
    if (!amount || !maturity || !type || (type != '0' && type != '1')) return res.status(400).json({ success: false, message: 'Invalid queries' });
    [amount, maturity] = [parseInt(amount), parseInt(maturity)];
    const matchedsLoanList = await getVehicleLoanList(amount, maturity, type);
    const changedLoanList = matchedsLoanList.map((loan) => {
        const monthlyPayment = monthlyInstallmentCalculator(amount, maturity, (loan.interestRate / 100));
        const totalInterest = (monthlyPayment * maturity) - amount;
        const expenseAmount = amount * 0.005;
        const totalAmount = totalInterest + amount
        return {
            ...loan._doc,
            amount,
            maturity,
            monthlyInstallment: monthlyPayment,
            totalInterest,
            expenseAmount,
            totalAmount,
        }
    });
    res.status(200).json({ products: changedLoanList });
}

module.exports = {
    houseLoanList,
    housingLoanDetail,
    consumerLoanList,
    vehicleLoanList
}