const monthlyInstallmentCalculator = (amount, maturity, interestRate) => {
    // interestRate /= 100;
    const numerator = interestRate * Math.pow((1 + interestRate), maturity);
    const denominator = Math.pow((1 + interestRate), maturity) - 1;
    const installment = ((numerator / denominator) * amount).toFixed(2);
    return Number(installment);
}

module.exports = monthlyInstallmentCalculator;