import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({

    userId: { type: String, required: true },
    docId: { type: String, required: true },
    slotDate: { type: String, required: true },
    slotTime: { type: String, required: true },
    docData: { type: Object, required: true },
    userData: { type: Object, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    cancel: { type: Boolean, default: false},
    payment: { type: Boolean, default: false},
    isComplete: {type: Boolean, default: false},
    paymentUrl: { type: String },
    orderCode: { type: String },
})

const appointmentModels = mongoose.models.appointment || mongoose.model('appointment', appointmentSchema);

export default appointmentModels