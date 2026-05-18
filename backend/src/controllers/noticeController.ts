import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get notices (filterable by role)
export const getNotices = async (req: Request, res: Response) => {
  try {
    const { targetRole } = req.query;
    
    // If targetRole is provided, find notices meant for ALL or that specific role
    const whereClause = targetRole ? {
      targetRoles: {
        hasSome: ['ALL', targetRole as string]
      }
    } : {};

    const notices = await prisma.notice.findMany({
      where: whereClause,
      orderBy: { date: 'desc' }
    });
    
    res.status(200).json({ success: true, data: notices });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create a new notice (Admin/Teacher)
export const createNotice = async (req: Request, res: Response) => {
  try {
    const { title, content, targetRoles, attachmentUrl, createdById } = req.body;
    
    const notice = await prisma.notice.create({
      data: {
        title,
        content,
        targetRoles,
        attachmentUrl,
        createdById
      }
    });
    
    res.status(201).json({ success: true, data: notice });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
