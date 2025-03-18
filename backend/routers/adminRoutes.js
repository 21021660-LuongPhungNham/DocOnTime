import express from 'express';
import { addDoctors, AdminLogin } from '../controllers/adminControllers.js';
import authAdmin from '../middlewares/authAdmin.js';
import upload from '../middlewares/uploadMiddleware.js';

const adminRoutes = express.Router();

// Định tuyến API thêm bác sĩ
adminRoutes.post('/add_doctor',authAdmin, upload.single('image'), addDoctors);
adminRoutes.post('/login', AdminLogin)


export default adminRoutes;
