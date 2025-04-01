import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String, default: "" },
    password: { type: String, required: true },
    address: { type: Object, default: { line: '' } },
    gender: { type: String, default: "not selected" },
    birth: { type: String, default: "not selected" },
    phone: { type: String, default: "1111111111" },
});

const userModels = mongoose.models.user || mongoose.model('user', userSchema)

export default userModels