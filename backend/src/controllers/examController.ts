import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get marks for a student
export const getStudentMarks = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const marks = await prisma.mark.findMany({
      where: { studentId },
      include: { subject: true }
    });
    res.status(200).json({ success: true, data: marks });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Enter marks (Teacher/Admin)
export const enterMarks = async (req: Request, res: Response) => {
  try {
    const { examName, marksObtained, totalMarks, grade, studentId, subjectId } = req.body;
    
    const mark = await prisma.mark.create({
      data: {
        examName,
        marksObtained,
        totalMarks,
        grade,
        studentId,
        subjectId
      }
    });
    
    res.status(201).json({ success: true, data: mark });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
