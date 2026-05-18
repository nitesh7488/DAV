import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

// Get all students (Admin/Teacher view)
export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await prisma.student.findMany({
      include: {
        user: { select: { email: true } },
        class: true,
      },
      orderBy: { admissionNo: 'asc' }
    });
    res.status(200).json({ success: true, data: students });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get single student by ID
export const getStudentById = async (req: Request, res: Response) => {
  try {
    const student = await prisma.student.findUnique({
      where: { id: req.params.id },
      include: {
        user: { select: { email: true } },
        class: true,
        attendances: { take: 10, orderBy: { date: 'desc' } },
        feePayments: { take: 5, orderBy: { paymentDate: 'desc' } },
        marks: { include: { subject: true } }
      }
    });
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }
    res.status(200).json({ success: true, data: student });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create a new student profile (linked to a User automatically)
export const createStudent = async (req: Request, res: Response) => {
  try {
    const { email, password, admissionNo, firstName, lastName, dateOfBirth, gender, bloodGroup, address, className, sectionName } = req.body;
    
    let targetUserId = req.body.userId;

    // 1. Resolve or create User
    if (!targetUserId && email) {
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        targetUserId = existingUser.id;
      } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password || 'student123', salt);
        const newUser = await prisma.user.create({
          data: {
            email,
            password: hashedPassword,
            role: 'STUDENT'
          }
        });
        targetUserId = newUser.id;
      }
    }

    if (!targetUserId) {
      return res.status(400).json({ success: false, message: 'Email or User ID is mandatory for registration.' });
    }

    // 2. Resolve or create Class
    let targetClassId = req.body.classId;
    const resolvedClassName = className || '10';
    const resolvedSectionName = sectionName || 'A';

    if (!targetClassId) {
      let activeClass = await prisma.class.findFirst({
        where: { name: resolvedClassName, section: resolvedSectionName }
      });
      if (!activeClass) {
        activeClass = await prisma.class.create({
          data: {
            name: resolvedClassName,
            section: resolvedSectionName
          }
        });
      }
      targetClassId = activeClass.id;
    }

    // 3. Create Student Profile
    const student = await prisma.student.create({
      data: {
        userId: targetUserId,
        admissionNo: admissionNo || `STU-${Math.floor(100 + Math.random() * 900)}`,
        firstName,
        lastName,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : new Date('2012-01-01'),
        gender: gender || 'Male',
        bloodGroup: bloodGroup || null,
        address: address || 'Mundro Campus, Bagoder',
        classId: targetClassId,
        parentId: req.body.parentId || null
      },
      include: {
        user: { select: { email: true } },
        class: true
      }
    });
    
    res.status(201).json({ success: true, data: student });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete student profile and cascades credentials
export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const student = await prisma.student.findUnique({ where: { id } });
    if (!student) {
      return res.status(404).json({ success: false, message: 'Student profile not found.' });
    }

    // Deleting the user cascadedly deletes the student profile due to Prisma relation setup!
    await prisma.user.delete({ where: { id: student.userId } });

    res.status(200).json({ success: true, message: 'Student purged successfully.' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Mark Attendance (simplified)
export const markAttendance = async (req: Request, res: Response) => {
  try {
    const { date, status, studentId, markedById } = req.body;
    const attendance = await prisma.attendance.create({
      data: {
        date: new Date(date),
        status,
        studentId,
        markedById
      }
    });
    res.status(201).json({ success: true, data: attendance });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
