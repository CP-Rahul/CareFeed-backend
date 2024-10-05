const express = require('express');

const hospitalRoutes = require('./hospital');

const router = express.Router();

router.use('/hospital', hospitalRoutes);

module.exports = router;