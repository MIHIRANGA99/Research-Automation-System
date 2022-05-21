import Student from '../models/Student.model.js'

export const getAllStudents = async () => {
    const students = await Student.find({});
    return students;
}

export const getOneStudent = async(id) => {
    const student = await Student.findById(id);
    return student;
}

export const updateStudent = async (id, newData) => {
    await Student.findByIdAndUpdate(id, newData)
    const updatedStudent = Student.findById(id)
    return updatedStudent;
}

export const deleteStudent = async (id) => {
    await Student.findByIdAndDelete(id);
}