const mtvVehicleData = require('../database/Static/mtvVehicleData');

const getMatchedMtvValue = (type, vehicleyear, option, vehicleValue) => {
    try {
        if (type == '1') return mtvVehicleData[type][vehicleValue][vehicleyear][option];
        else if (type == '3') return mtvVehicleData[type][vehicleyear]
        else return mtvVehicleData[type][vehicleyear][option]
    } catch (error) {
        console.log(error);
    }
};

module.exports = getMatchedMtvValue;