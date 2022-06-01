import stdGroupModel from "../models/StudentGroup.model.js";

export const registerGroup = async (group) => {
    const newGroup = await new stdGroupModel(group)
    newGroup.save()
    return newGroup
}