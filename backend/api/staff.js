import Staff from '../models/Staff.model.js'

export const addStaff = async (member) => {
    const newMember = new Staff(member);
    await newMember.save();
    return newMember;
}

export const getAllStaff = async () => {
    const staff = await Staff.find({});
    return staff;
}

export const getOneStaff = async(id) => {
    const staff = await Staff.findOne({staff_id: id})
    return staff;
}

export const updateStaff = async (id, newData) => {
    await Staff.findByIdAndUpdate(id, newData)
    const updatedStaff = Staff.findById(id)
    return updatedStaff;
}

export const deleteStaff = async (id) => {
    await Staff.findByIdAndDelete(id);
}