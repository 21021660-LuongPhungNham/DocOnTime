import express from 'express';
import { addDoctors, AdminLogin, getAllDoctors } from '../controllers/adminControllers.js';
import { updateDoctorStatus } from '../controllers/doctorControllers.js';
import authAdmin from '../middlewares/authAdmin.js';
import upload from '../middlewares/uploadMiddleware.js';

const adminRoutes = express.Router();

// Định tuyến API thêm bác sĩ
adminRoutes.post('/add_doctor', authAdmin, upload.single('image'), addDoctors);
adminRoutes.post('/login', AdminLogin)
adminRoutes.post('/all_doctor', authAdmin, getAllDoctors)
adminRoutes.post('/doctor_status', authAdmin, updateDoctorStatus)

export default adminRoutes;
