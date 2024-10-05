const { HospitalService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createHospital(req, res) {
    try {
        const hospital = await HospitalService.createHospital(req.body);
        SuccessResponse.data = hospital
        return res
                .status(201)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function getAllHospitals(req, res) {
    try {
        const hospital = await HospitalService.getAllHospitals();
        SuccessResponse.data = hospital;
        return res
                .status(200)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function getHospital(req, res) {
    try {
        const hospital = await HospitalService.getHospital(req.params.id);
        SuccessResponse.data = hospital;
        return res
                .status(200)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function updateHospital(req, res) {
    try {
        const hospital = await HospitalService.updateHospital({
            dataToUpdate: req.body.dataToUpdate, 
            id: req.params.id
        });
        SuccessResponse.data = hospital;
        return res
                .status(200)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function deleteHospital(req, res) {
    try {
        const hospital = await HospitalService.deleteHospital(req.params.id);
        SuccessResponse.data = hospital;
        return res
                .status(200)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

module.exports = {
    createHospital,
    getAllHospitals,
    getHospital,
    updateHospital,
    deleteHospital
}