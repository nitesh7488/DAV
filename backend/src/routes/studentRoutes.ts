import { Router } from 'express';
import { getStudents, getStudentById, createStudent, markAttendance, deleteStudent } from '../controllers/studentController';

const router = Router();

router.get('/', getStudents);
router.post('/', createStudent);
router.get('/:id', getStudentById);
router.delete('/:id', deleteStudent);
router.post('/attendance', markAttendance);

export default router;
