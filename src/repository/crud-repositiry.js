class CrudRepository {
    constructor(model) {
        this.model = model
    }
    async create(data) {
        const res = await this.model.create(data);
        return res;
    }

    async getAll() {
        const res = await this.model.find();
        return res;
    }

    async get(id) {
        const res = await this.model.findById(id);
        return res;
    }

    async update(id, dataToUpdate) {
        const res = await this.model.findByIdAndUpdate(id, dataToUpdate);
        return res;
    }

    async delete(id) {
        const res = await this.model.findByIdAndDelete(id);
        return res;
    }
}

module.exports = CrudRepository;