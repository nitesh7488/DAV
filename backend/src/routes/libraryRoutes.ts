import express from 'express';
import {
  addBook,
  getBooks,
  issueBook,
  returnBook,
  getStudentIssues,
  getAllIssues,
} from '../controllers/libraryController';

const router = express.Router();

router.get('/books', getBooks);
router.get('/issues/student/:studentId', getStudentIssues);

// Admin/Librarian routes
router.post('/books', addBook);
router.post('/issues', issueBook);
router.post('/issues/return', returnBook);
router.get('/issues', getAllIssues);

export default router;
