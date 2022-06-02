import Document from '../models/Document.model.js'

export const createDoc = async (info) => {
    const newDoc = new Document(info)
    await newDoc.save()
    return newDoc
}

export const getDocs = async () => {
    const allDocs = await Document.find({})
    return allDocs
}

export const getOneDoc = async (id) => {
    const oneDoc = await Document.findById(id)
    return oneDoc
}

export const updateDoc = async (id, info) => {
    await Document.findByIdAndUpdate(id, info)
    return Document.findById(id)
}

export const deleteDoc = async (id) => {
    await Document.findByIdAndDelete(id)
    return "Successfully deleted!"
}