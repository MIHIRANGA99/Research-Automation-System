import stdGroupModel from "../models/StudentGroup.model.js";

export const registerGroup = async (group) => {
    const newGroup = await new stdGroupModel(group)
    newGroup.save()
    return newGroup
}

export const getAllGroups = async () => {
    const groups = await stdGroupModel.find({})
    return groups
}

export const updateGroup = async (id, data) => {
    await stdGroupModel.findByIdAndUpdate(id, data)
    return stdGroupModel.findById(id)
}