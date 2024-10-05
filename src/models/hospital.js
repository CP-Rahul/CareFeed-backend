const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HospitalSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true, unique: true },
    contact: {
      phone: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true },
    },
    admin_ids: [{ type: Schema.Types.ObjectId }],
    surgeries: [],
  },
  {
    timestamps: true,
  }
);

const Hospital = mongoose.model("Hospital", HospitalSchema);
module.exports = Hospital;
