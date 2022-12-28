import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
});

export const Student = mongoose.model("Student", studentSchema);