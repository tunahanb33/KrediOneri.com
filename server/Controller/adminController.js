const { getAllHouseLoans, getAllConsumerLoans, houseLoanUpdateViaObjectId, consumerLoanUpdateViaObjectId, getAllVehicleStLoans, getAllVehicleNdLoans, vehicleStLoanUpdateViaObjectId, vehicleNdLoanUpdateViaObjectId } = require('../Services/dbServices');
const getHouseLoansList = async (req, res) => {
    const data = await getAllHouseLoans();
    res.status(200).json(data);
};

const getConsumerLoansList = async (req, res) => {
    const data = await getAllConsumerLoans();
    res.status(200).json(data);
};

const consumerLoanEdit = async (req, res) => {
    const { ...contentBody } = req.body;
    delete contentBody._id;
    delete contentBody.bank;
    try {
        const data = await consumerLoanUpdateViaObjectId(req.body._id, contentBody);
        if (!data)
            return res.status(400).json({ success: false, message: 'OK' });
        res.status(200).json({ success: true, message: 'OK' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal Error' });
    }

}
const houseLoanEdit = async (req, res) => {
    const { ...contentBody } = req.body;
    delete contentBody._id;
    delete contentBody.bank;
    try {
        const data = await houseLoanUpdateViaObjectId(req.body._id, contentBody);
        if (!data)
            return res.status(400).json({ success: false, message: 'OK' });
        res.status(200).json({ success: true, message: 'OK' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal Error' });
    }

}

const getVehicleStLoansList = async (req, res) => {
    const data = await getAllVehicleStLoans();
    res.status(200).json(data);
};
const getVehicleNdLoansList = async (req, res) => {
    const data = await getAllVehicleNdLoans();
    res.status(200).json(data);
};

const vehicleLoanStEdit = async (req, res) => {
    const { ...contentBody } = req.body;
    delete contentBody._id;
    delete contentBody.bank;
    try {
        const data = await vehicleStLoanUpdateViaObjectId(req.body._id, contentBody);
        if (!data)
            return res.status(400).json({ success: false, message: 'OK' });
        res.status(200).json({ success: true, message: 'OK' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal Error' });
    }
}
const vehicleLoanNdEdit = async (req, res) => {
    const { ...contentBody } = req.body;
    delete contentBody._id;
    delete contentBody.bank;
    try {
        const data = await vehicleNdLoanUpdateViaObjectId(req.body._id, contentBody);
        if (!data)
            return res.status(400).json({ success: false, message: 'OK' });
        res.status(200).json({ success: true, message: 'OK' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal Error' });
    }
}

module.exports = {
    getHouseLoansList,
    getConsumerLoansList,
    houseLoanEdit,
    consumerLoanEdit,
    getVehicleStLoansList,
    getVehicleNdLoansList,
    vehicleLoanStEdit,
    vehicleLoanNdEdit
};