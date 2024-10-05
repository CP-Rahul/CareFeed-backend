const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/error/app-error");

 function createHospital(req, res, next) {
    const { name, address, contact  } = req.body;

    if (!name || !address || !contact ) {
        ErrorResponse.error =  new AppError(400, 'Missing any of the following fields name or address or contact');
        return res
                .status(400)
                .json(ErrorResponse);
    }

    if (!contact.phone || !contact.email) {
       ErrorResponse.error = (400, 'Missing contact information like email or phone');
        return res
                .status(400)
                .json(ErrorResponse);
    }
    next();
}

function updateHospital(req, res, next) {
    const { name, address, contact } = req.body;

    if (!name && !address && !contact) {
        ErrorResponse.error =  new AppError(400, 'Any of the following field [ name or address or contact ] is required');
        return res
                .status(400)
                .json(ErrorResponse);
    }

    if (contact && !contact.phone && !contact.email) {
       ErrorResponse.error = (400, 'ANy of the following contact information email or phoneis required');
        return res
                .status(400)
                .json(ErrorResponse);
    }
    next();
}

module.exports = {
    createHospital,
    updateHospital
};
