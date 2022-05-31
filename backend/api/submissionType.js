import SubmissionType from "../models/SubmissionType.model.js"

export const addSubmissionType = async (data) => {
    const newST = new SubmissionType(data);
    await newST.save()
    return newST
}

export const getSubmissionTypes = async () => {
    const STList = await SubmissionType.find({});
    return STList
}

export const getOneSubmissionType = async (id) => {
    const ST = await SubmissionType.findById(id);
    return ST
}

export const updateSubmissionType = async (id, newData) => {
    const updatedST = await SubmissionType.findByIdAndUpdate(id, newData);
    return SubmissionType.findById(id)
}

export const deleteSubmissionType = async (id) => {
    const updatedST = await SubmissionType.findByIdAndDelete(id);
    return "Deleted Successfully!"
}