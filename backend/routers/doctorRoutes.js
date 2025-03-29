import express from 'express';
import { listDoctors } from '../controllers/doctorControllers.js';

const doctorRoutes = express.Router();

doctorRoutes.get('/list', listDoctors);

export default doctorRoutes;
