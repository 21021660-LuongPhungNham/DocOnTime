import express from 'express';
import { fetchUserAppointments, getUserProfile, scheduleAppointment, signUpUser, userLogin, userProfileUpdate } from '../controllers/userControllers.js';
import authUser from '../middlewares/authUser.js';
import upload from './../middlewares/uploadMiddleware.js';


const userRoutes = express.Router();

userRoutes.post('/signup', signUpUser);
userRoutes.post('/login', userLogin);
userRoutes.get('/get_profile', authUser, getUserProfile);
userRoutes.post('/update_profile', upload.single('image'), authUser, userProfileUpdate);
userRoutes.post('/book_appointment', authUser, scheduleAppointment);
userRoutes.get('/list_appointment', authUser, fetchUserAppointments);

export default userRoutes;
