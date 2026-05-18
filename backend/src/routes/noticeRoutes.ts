import { Router } from 'express';
import { getNotices, createNotice } from '../controllers/noticeController';

const router = Router();

router.get('/', getNotices);
router.post('/', createNotice);

export default router;
