import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new admission inquiry (Public Forms)
export const createInquiry = async (req: Request, res: Response) => {
  try {
    const { studentName, parentName, phone, email, grade, location, visitDate, message } = req.body;
    
    if (!studentName || !parentName || !phone || !email || !grade) {
      return res.status(400).json({ success: false, message: 'Missing required parameters: studentName, parentName, phone, email, and grade are mandatory.' });
    }

    const inquiry = await prisma.inquiry.create({
      data: {
        studentName,
        parentName,
        phone,
        email,
        grade,
        location: location || null,
        visitDate: visitDate || null,
        message: message || null,
        status: 'PENDING'
      }
    });
    
    res.status(201).json({ success: true, data: inquiry });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Retrieve all inquiries (Admin Portal dashboard)
export const getInquiries = async (req: Request, res: Response) => {
  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: 'desc' }
    });
    
    res.status(200).json({ success: true, data: inquiries });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update status of a specific inquiry (Admin interaction)
export const updateInquiryStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    if (!status) {
      return res.status(400).json({ success: false, message: 'Missing status payload.' });
    }

    const updatedInquiry = await prisma.inquiry.update({
      where: { id },
      data: { status }
    });
    
    res.status(200).json({ success: true, data: updatedInquiry });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
