import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StaffSchema = new Schema({
    staff_id: {type: String, required: true},
    name: {type: String, required: true},
    faculty: {type: String, required: true},
    nic: {type: String, required: true},
    dob: {type: String, required: true},
    gender: {type: String, required: true},
    address: {type: String, required: true},
    phone_no: {type: String, required: true},
    email: {type: String, required: true},
    profession: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true}
});

const StaffModel = mongoose.model("Staff", StaffSchema);

export default StaffModel;