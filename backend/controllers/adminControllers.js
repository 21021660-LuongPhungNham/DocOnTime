import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import doctorModels from '../models/doctorModels.js';

// API them bac si
const addDoctors = async (req, res) => {
    try {
        const { name, speciality, experience, email, password, degree, about, fees, address } = req.body;
        const imageFile = req.file;

        // kiem tra dia chi
        let parsedAddress;
        try {
            parsedAddress = JSON.parse(address);
        } catch (error) {
            return res.status(400).json({ success: false, message: 'Địa chỉ không hợp lệ!' });
        }

        //kiem tra du lieu dau vao
        if (!name || !speciality || !email || !password || !degree || !about || fees === undefined || isNaN(Number(fees)) || !parsedAddress) {
            return res.status(400).json({ success: false, message: 'Dữ liệu không hợp lệ! Vui lòng điền đầy đủ thông tin!' });
        }

        // kiem tra mail
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: 'Email không đúng định dạng!' });
        }

        // mail da ton tai chua
        const existingDoctor = await doctorModels.findOne({ email });
        if (existingDoctor) {
            return res.status(400).json({ success: false, message: 'Email đã tồn tại! Vui lòng sử dụng email khác.' });
        }

        // do dai mat khau
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: 'Mật khẩu phải có ít nhất 8 ký tự!' });
        }

        // ma hoa maj khau
        const hashedPassword = await bcrypt.hash(password, 10);

        // Kiểm tra ảnh
        if (!imageFile) {
            return res.status(400).json({ success: false, message: 'Vui lòng tải lên ảnh bác sĩ!' });
        }

        let uploadedImage;
        try {
            // Nếu Multer sử dụng lưu file, dùng imageFile.path
            if (imageFile.path) {
                uploadedImage = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
            } else {
                // Nếu Multer lưu file trong memory (Buffer), dùng stream upload
                uploadedImage = await new Promise((resolve, reject) => {
                    const stream = cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
                        if (error) return reject(error);
                        resolve(result);
                    });
                    stream.end(imageFile.buffer);
                });
            }
        } catch (error) {
            console.error('Lỗi khi upload ảnh lên Cloudinary:', error);
            return res.status(500).json({ success: false, message: 'Không thể tải ảnh lên Cloudinary!' });
        }


        // tao di lieu bac si
        const doctorData = {
            name,
            email,
            image: uploadedImage.secure_url,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees: Number(fees),
            address: parsedAddress,
            date: new Date()
        };

        // luu vao database
        const newDoctor = new doctorModels(doctorData);
        await newDoctor.save();

        // tra ve data
        res.status(201).json({
            success: true,
            message: 'Thêm bác sĩ thành công!',
            doctor: {
                name: newDoctor.name,
                email: newDoctor.email,
                speciality: newDoctor.speciality,
                degree: newDoctor.degree,
                experience: newDoctor.experience,
                about: newDoctor.about,
                fees: newDoctor.fees,
                feesFormatted: newDoctor.fees.toLocaleString('vi-VN') + ' VNĐ', // Thêm định dạng tiền tệ
                address: newDoctor.address,
                image: newDoctor.image,
                date: newDoctor.date
            }
        });

    } catch (error) {
        console.error('Lỗi khi thêm bác sĩ:', error);
        res.status(500).json({ success: false, message: 'Lỗi hệ thống, vui lòng thử lại!' });
    }
};

// API login Admin

const AdminLogin = (req, res) => {
    try {
        const { email, password } = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign({ email, password }, process.env.JWT_SECRET);
            return res.json({ success: true, token });
        }

        return res.json({ success: false, message: 'Thông tin xác thực không hợp lệ!' });
    } catch (error) {
        console.error('Login error:', error);
        return res.json({ success: false, message: 'lỗi!' });
    }
};


// API de truy suat danh sach bac si tu MongoDB
const getAllDoctors = async (req, res) => {
    try {
        const doctorsList = await doctorModels.find({}).select('-password');

        res.json({ success: true, doctors: doctorsList });
    }
    catch (error) {
        console.error("Lỗi khi lấy danh sách bác sĩ:", error.message);
        res.json({ success: false, message: error.message });
    }
};

export { addDoctors, AdminLogin, getAllDoctors };

