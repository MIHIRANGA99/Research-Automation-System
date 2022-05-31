import PanelModel from "../models/Panel.model.js";

export const registerPanel = async (info) => {
    const newPanel = await new PanelModel(info)
    newPanel.save()
    return newPanel
}

export const getPanels = async () => {
    const panels = await PanelModel.find({})
    return panels
}

export const getOnePanel = async (id) => {
    const panel = await PanelModel.findById(id)
    return panel
}

export const updatePanel = async (id, payload) => {
    await PanelModel.findByIdAndUpdate(id, payload)
    return PanelModel.findById(id)
}

export const deletePanel = async (id) => {
    await PanelModel.findByIdAndDelete(id)
    return "Successfully Deleted!"
}