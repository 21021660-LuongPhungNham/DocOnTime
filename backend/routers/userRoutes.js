import express from 'express';
import { cancelAppointment, fetchUserAppointments, getUserProfile, scheduleAppointment, signUpUser, userLogin, UserPayment, userProfileUpdate, webhookHandler, CheckPaymentStatus } from '../controllers/userControllers.js';
import authUser from '../middlewares/authUser.js';
import upload from './../middlewares/uploadMiddleware.js';


const userRoutes = express.Router();

userRoutes.post('/signup', signUpUser);
userRoutes.post('/login', userLogin);

userRoutes.get('/get_profile', authUser, getUserProfile);

userRoutes.post('/update_profile', upload.single('image'), authUser, userProfileUpdate);
userRoutes.post('/book_appointment', authUser, scheduleAppointment);

userRoutes.get('/list_appointment', authUser, fetchUserAppointments);

userRoutes.post('/cancel_appointment', authUser, cancelAppointment);

userRoutes.post('/payment_payos', authUser, UserPayment);
userRoutes.post('/webhook', webhookHandler);
userRoutes.post('/check_payment_status', authUser, CheckPaymentStatus);

export default userRoutes;
