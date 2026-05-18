import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Add a new book
export const addBook = async (req: Request, res: Response) => {
  try {
    const { title, author, isbn, totalCopies } = req.body;
    
    // Check if book exists
    const existingBook = await prisma.book.findUnique({ where: { isbn } });
    if (existingBook) {
      return res.status(400).json({ message: 'Book with this ISBN already exists' });
    }

    const book = await prisma.book.create({
      data: {
        title,
        author,
        isbn,
        totalCopies,
        available: totalCopies,
      },
    });

    res.status(201).json({ message: 'Book added successfully', book });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add book', error });
  }
};

// Get all books
export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await prisma.book.findMany();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch books', error });
  }
};

// Issue a book to a student
export const issueBook = async (req: Request, res: Response) => {
  try {
    const { bookId, studentId } = req.body;

    const book = await prisma.book.findUnique({ where: { id: bookId } });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    if (book.available <= 0) {
      return res.status(400).json({ message: 'Book is currently out of stock' });
    }

    const student = await prisma.student.findUnique({ where: { id: studentId } });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Check if student already has this book issued and not returned
    const existingIssue = await prisma.bookIssue.findFirst({
      where: {
        bookId,
        studentId,
        status: 'ISSUED',
      },
    });

    if (existingIssue) {
      return res.status(400).json({ message: 'Student already has this book issued' });
    }

    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 7); // 7-day policy

    const issue = await prisma.$transaction([
      prisma.bookIssue.create({
        data: {
          bookId,
          studentId,
          dueDate,
          status: 'ISSUED',
        },
      }),
      prisma.book.update({
        where: { id: bookId },
        data: { available: book.available - 1 },
      }),
    ]);

    res.status(201).json({ message: 'Book issued successfully', issue: issue[0] });
  } catch (error) {
    res.status(500).json({ message: 'Failed to issue book', error });
  }
};

// Return a book
export const returnBook = async (req: Request, res: Response) => {
  try {
    const { issueId } = req.body;

    const issue = await prisma.bookIssue.findUnique({ where: { id: issueId }, include: { book: true } });
    if (!issue || issue.status !== 'ISSUED') {
      return res.status(404).json({ message: 'Active book issue not found' });
    }

    const returnDate = new Date();
    let fineAmount = 0;

    // Calculate fine if returned after due date (e.g., 10 rupees per day)
    if (returnDate > issue.dueDate) {
      const diffTime = Math.abs(returnDate.getTime() - issue.dueDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      fineAmount = diffDays * 10;
    }

    const updatedIssue = await prisma.$transaction([
      prisma.bookIssue.update({
        where: { id: issueId },
        data: {
          status: 'RETURNED',
          returnDate,
          fineAmount,
        },
      }),
      prisma.book.update({
        where: { id: issue.bookId },
        data: { available: issue.book.available + 1 },
      }),
    ]);

    res.status(200).json({ message: 'Book returned successfully', issue: updatedIssue[0] });
  } catch (error) {
    res.status(500).json({ message: 'Failed to return book', error });
  }
};

// Get books issued to a specific student
export const getStudentIssues = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const issues = await prisma.bookIssue.findMany({
      where: { studentId },
      include: { book: true },
      orderBy: { issueDate: 'desc' },
    });

    res.status(200).json(issues);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch student book issues', error });
  }
};

// Get all issued books (for admin/librarian)
export const getAllIssues = async (req: Request, res: Response) => {
  try {
    const issues = await prisma.bookIssue.findMany({
      include: {
        book: true,
        student: {
          include: { user: true, class: true }
        }
      },
      orderBy: { issueDate: 'desc' },
    });

    res.status(200).json(issues);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch all issues', error });
  }
};
