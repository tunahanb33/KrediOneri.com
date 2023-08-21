const monthlyInstallmentCalculator = require('../Utils/monthlyInstallmentCalculator');
const houseLoanPaymentPlan = (amount, maturity, interestRate) => {
    const monthlyPayments = [];
    const monthlyPayment = monthlyInstallmentCalculator(amount, maturity, interestRate);
    for (let i = 0; i < maturity; i++) {
        const mainPayment = Number((monthlyPayment - (amount * interestRate)).toFixed(2));
        const loanPayment = Number((monthlyPayment - mainPayment).toFixed(2));
        amount = Number((amount - mainPayment).toFixed(2));
        const payment = {
            currentMaturity: i + 1,
            monthlyInstallment: monthlyPayment,
            mainPayment,
            loanPayment,
            kkdf: 0,
            bsmv: 0,
            remainBalance: amount
        };
        monthlyPayments.push(payment);
    };
    return monthlyPayments;
}

module.exports = houseLoanPaymentPlan;