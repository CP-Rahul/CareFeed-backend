const { HospitalRepository } = require('../repository');
const AppError = require('../utils/error/app-error');

const hospitalRepository = new HospitalRepository();

async function createHospital(data) {
    try {
        const hospital = await hospitalRepository.create(data);
        return hospital;
    } catch (error) {
        if(error.errorResponse.code === 11000) {
            throw new AppError(400, 'Duplicate entries is not allowed, please check the following fields' + JSON.stringify(error.errorResponse.keyValue));
        }
        throw new AppError(500, 'Something went wrong while creating hospital')
    }
}

async function getAllHospitals() {
    try {
        const hospital = await hospitalRepository.getAll();
        return hospital;
    } catch (error) {
        throw error
    }
}

async function getHospital(id) {
    try {
        const hospital = await hospitalRepository.get(id);
        return hospital;
    } catch (error) {
        throw error
    }
}

async function updateHospital({id, dataToUpdate}) {
    try {
        const hospital = await hospitalRepository.update(id, dataToUpdate);
        return hospital;
    } catch (error) {
        throw error
    }
}

async function deleteHospital(id) {
    try {
        const hospital = await hospitalRepository.delete(id);
        return hospital;
    } catch (error) {
        throw error
    }
}


module.exports = {
    createHospital,
    getAllHospitals,
    getHospital,
    updateHospital,
    deleteHospital
}