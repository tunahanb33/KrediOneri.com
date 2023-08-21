const calculateCcCash = (req, res) => {
    console.log(req.body);
};

const titleDeedFee = (req, res) => {
    let { houseValueAmount } = req.body;
    if (!houseValueAmount) return res.status(400).json({success: false, message: 'Invalid queries'});
    houseValueAmount = parseInt(houseValueAmount);
    const feePayment = (houseValueAmount * (2 / 100));
    res.status(200).json({feePayment, totalDeedFee: (feePayment * 2)});
}

module.exports = {
    calculateCcCash,
    titleDeedFee
}