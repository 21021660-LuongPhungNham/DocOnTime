import express from 'express';
import { signUpUser, userLogin } from '../controllers/userControllers.js';


const userRoutes = express.Router();

userRoutes.post('/signup', signUpUser);
userRoutes.post('/login', userLogin);


export default userRoutes;
