const CrudRepository = require("./crud-repositiry");
const Hospital = require('../models/hospital');

class HospitalRepository extends CrudRepository {
    constructor() {
        super(Hospital);
    }
}

module.exports = HospitalRepository;