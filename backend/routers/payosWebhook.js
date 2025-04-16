import express from 'express';
import appointmentModels from '../models/appointmentModels';

const router = express.Router();
router.post('/webhook', async (req, res) => {
    try {
        const { orderCode, status } = req.body;
        const appointment = await appointmentModels.findOne({ orderCode });

        if (!appointment) return res.send('Appointment not found');

        if (status === 'PAID') {
            appointment.payment = true;
            await appointment.save();
        }

        res.send('OK');
    } catch (err) {
        res.send('Webhook error');
    }
});

export default router;
