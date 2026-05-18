import { Router } from 'express';
import { getAllStaff, addStaff, deleteStaff } from '../controllers/staffController';

const router = Router();

router.get('/', getAllStaff);
router.post('/', addStaff);
router.delete('/:id', deleteStaff);

export default router;
