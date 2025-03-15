import validator from 'validator';
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';
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

        // kiem tra anh
        if (!imageFile || !imageFile.path) {
            return res.status(400).json({ success: false, message: 'Vui lòng tải lên ảnh bác sĩ!' });
        }

        // Upload anh len Cloudinary
        let uploadedImage;
        try {
            uploadedImage = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
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

export { addDoctors };
