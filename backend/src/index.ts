import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic Route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'School ERP API is running perfectly.' });
});

// Import Routes (To be created)
import paymentRoutes from './routes/paymentRoutes';
import authRoutes from './routes/authRoutes';
import studentRoutes from './routes/studentRoutes';
import staffRoutes from './routes/staffRoutes';
import noticeRoutes from './routes/noticeRoutes';
import examRoutes from './routes/examRoutes';
import inquiryRoutes from './routes/inquiryRoutes';
import libraryRoutes from './routes/libraryRoutes';

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/library', libraryRoutes);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
