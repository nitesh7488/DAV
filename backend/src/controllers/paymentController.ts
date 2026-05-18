import { Request, Response } from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'dummy_key',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'dummy_secret',
});

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { amount, studentId, term } = req.body;
    
    // In a real app, you would verify the amount against the DB first
    // const feeRecord = await prisma.feePayment.findFirst(...)
    
    const options = {
      amount: amount * 100, // Razorpay works in paise
      currency: "INR",
      receipt: `rcpt_${studentId}_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Could not create order' });
  }
};

export const verifyPayment = async (req: Request, res: Response) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      studentId,
      amount,
      term
    } = req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || 'dummy_secret')
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      // Payment is verified
      // Save record to DB
      /*
      await prisma.feePayment.create({
        data: {
          amount: parseFloat(amount),
          status: 'SUCCESS',
          method: 'RAZORPAY',
          razorpayId: razorpay_payment_id,
          receiptNo: razorpay_order_id,
          studentId: studentId,
          term: term
        }
      });
      */
      
      res.status(200).json({ success: true, message: "Payment verified successfully" });
    } else {
      res.status(400).json({ success: false, message: "Invalid signature" });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Payment verification failed' });
  }
};
