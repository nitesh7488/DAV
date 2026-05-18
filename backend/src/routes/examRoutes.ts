import { Router } from 'express';
import { getStudentMarks, enterMarks } from '../controllers/examController';

const router = Router();

router.get('/student/:studentId', getStudentMarks);
router.post('/marks', enterMarks);

export default router;
