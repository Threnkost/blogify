import express from 'express';

import { getStudents, createStudent } from '../controllers/students.js';

const router = express.Router();

router.get("/", getStudents );

router.post("/", createStudent );

export default router;