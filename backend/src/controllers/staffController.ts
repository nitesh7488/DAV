import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

// Get all staff members (Admin view)
export const getAllStaff = async (req: Request, res: Response) => {
  try {
    const staff = await prisma.teacher.findMany({
      include: {
        user: { select: { email: true, role: true } },
        classes: true,
        subjects: true
      },
      orderBy: { employeeId: 'asc' }
    });
    res.status(200).json({ success: true, data: staff });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Add new staff member (linked to a User automatically)
export const addStaff = async (req: Request, res: Response) => {
  try {
    const { email, password, employeeId, firstName, lastName, qualification, joiningDate, designation, department } = req.body;
    
    let targetUserId = req.body.userId;

    // 1. Resolve or create User
    if (!targetUserId && email) {
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        targetUserId = existingUser.id;
      } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password || 'teacher123', salt);
        const newUser = await prisma.user.create({
          data: {
            email,
            password: hashedPassword,
            role: 'TEACHER'
          }
        });
        targetUserId = newUser.id;
      }
    }

    if (!targetUserId) {
      return res.status(400).json({ success: false, message: 'Email or User ID is mandatory for registration.' });
    }

    // 2. Create Teacher profile
    const staff = await prisma.teacher.create({
      data: {
        userId: targetUserId,
        employeeId: employeeId || `EMP-${Math.floor(100 + Math.random() * 900)}`,
        firstName,
        lastName,
        qualification: qualification || 'B.Ed / PG',
        joiningDate: joiningDate ? new Date(joiningDate) : new Date(),
        designation: designation || 'TGT Teacher',
        department: department || 'Academics'
      },
      include: {
        user: { select: { email: true, role: true } }
      }
    });
    
    res.status(201).json({ success: true, data: staff });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a staff member profile and cascade credentials
export const deleteStaff = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const staff = await prisma.teacher.findUnique({ where: { id } });
    if (!staff) {
      return res.status(404).json({ success: false, message: 'Staff profile not found.' });
    }

    // Deleting user will cascadedly purge teacher profile due to schema references!
    await prisma.user.delete({ where: { id: staff.userId } });

    res.status(200).json({ success: true, message: 'Staff member deleted successfully.' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
