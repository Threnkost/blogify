import { Student } from '../models/students.js';

export const getStudents = async (req, res) => {
    
    try {
        const data = await Student.find({});
        res.status(200).json(data);
    }
    catch(err) {
        res.status(404).send(err.message);
    }

}

export const createStudent = async (req, res) => {

    const student = req.body;

    const newStudent = new Student(student);
    
    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    }
    catch(err) {
        res.status(409).send({ message: err.message });
    }

}