import express from 'express';
import { getUserProfile, signUpUser, userLogin, userProfileUpdate } from '../controllers/userControllers.js';
import authUser from '../middlewares/authUser.js';
import upload from './../middlewares/uploadMiddleware.js';


const userRoutes = express.Router();

userRoutes.post('/signup', signUpUser);
userRoutes.post('/login', userLogin);
userRoutes.get('/get_profile', authUser, getUserProfile);
userRoutes.post('/update_profile', upload.single('image'), authUser, userProfileUpdate);

export default userRoutes;
