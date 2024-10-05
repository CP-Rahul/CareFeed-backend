const express = require('express');
const { HospitalController } = require('../../controller');
const { HospitalMiddleware } = require('../../middlewares');

const router = express.Router();

router.post('/', 
        HospitalMiddleware.createHospital,
        HospitalController.createHospital
);
router.get('/', 
    HospitalController.getAllHospitals
);
router.get('/:id', 
    HospitalController.getHospital
);
router.patch('/:id', 
    HospitalMiddleware.updateHospital,
    HospitalController.updateHospital
);
router.delete('/:id', 
    HospitalController.deleteHospital
);

module.exports = router;