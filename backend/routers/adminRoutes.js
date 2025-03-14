import express from 'express';
import { addDoctors } from '../controllers/adminControllers.js';
import upload from '../middlewares/uploadMiddleware.js';

const adminRoutes = express.Router();

// .....dinh tuyen duong them bac si
adminRoutes.post('/add_doctor', upload.single('image'), addDoctors);

export default adminRoutes;