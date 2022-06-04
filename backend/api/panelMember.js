import EvaluatePresentation from '../models/EvaluatePresen.model.js'
import EvaluateTopic from '../models/EvaluateTopic.model.js'
import Panel from '../models/Panel.model.js'
import Group from '../models/StudentGroup.model.js'

export const addEvaluDetails = async (value) => {
    const newEvaluation = new EvaluatePresentation(value);
    await newEvaluation.save();
    return newEvaluation;
}

export const addTopicEvaluDetails = async (value) => {
    const newEvaluation = new EvaluateTopic(value);
    await newEvaluation.save();
    return newEvaluation;
}

export const getPresenEvaluById = async(id) => {
    const detail = await EvaluatePresentation.findOne({groupID: id})
    return detail;
}

export const getGroupListById = async(id) => {
    let groupList = new Array();
    let detail = new Array();
    detail = await Panel.find({members: id})
    if(detail != ""){
        detail.forEach((data) => {
            data.allocatedGroups.forEach((group) => {
                groupList.push(group)
            })
        } )
    }
    return groupList;
}

export const getGroupDetailsById = async(id) => {
    const detail = await Group.findOne({_id: id})
    return detail;
}