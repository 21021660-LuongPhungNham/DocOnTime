import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";
import userDoctorModels from "../models/userDoctorModels.js";
import { v2 as cloudinary } from 'cloudinary';
const signUpUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({ success: false, message: "Vui lòng điền đầy đủ thông tin" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Email không hợp lệ" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Mật khẩu phải có ít nhất 8 ký tự" });
        }

        const existingUser = await userDoctorModels.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: "Email đã tồn tại" });
        }

        // ma hoa mat khau
        const hashedPassword = await bcrypt.hash(password, 10);

        // tao nguoi dung ms
        const newUser = new userDoctorModels({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        // token dang nhap sau khi dang ky
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

        return res.status(201).json({ success: true, message: "Đăng ký thành công", token });
    } catch (error) {
        console.error("Lỗi đăng ký:", error);
        return res.json({ success: false, message: "Lỗi server, vui lòng thử lại sau" });
    }
};

// api cho nguoi dung

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({ success: false, message: "Vui lòng nhập email và mật khẩu" });
        }

        const user = await userDoctorModels.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "Người dùng không tồn tại" });
        }
        // so sanh mat khau
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Mật khẩu không chính xác" });
        }

        // Tao token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        return res.json({
            success: true,
            message: "Đăng nhập thành công",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        console.error("Lỗi đăng nhập:", error);
        return res.json({ success: false, message: "Lỗi server, vui lòng thử lại sau" });
    }
};

// api lay thong tin user

const getUserProfile = async (req, res) => {
    try {
        const userId = req.userId;

        if (!userId) {
            return res.json({ success: false, message: "Thiếu userId" });
        }

        const user = await userDoctorModels.findById(userId).select('-password');

        if (!user) {
            return res.json({ success: false, message: "Không tìm thấy người dùng" });
        }

        res.json({ success: true, user });
    } catch (error) {
        console.error("Lỗi khi tải user profile:", error);
        res.json({ success: false, message: "Lỗi server" });
    }
};

const userProfileUpdate = async (req, res) => {
    try {
        console.log("Dữ liệu nhận từ request:", req.body);
        console.log("File ảnh nhận được:", req.file);

        const { name, phone, address, birth, gender, email } = req.body;
        const userId = req.userId;
        const imgFile = req.file;

        if (!userId) {
            return res.json({ success: false, message: "Thiếu userId" });
        }

        if (!name || !phone || !birth || !gender || !email) {
            return res.json({ success: false, message: "Thiếu dữ liệu bắt buộc" });
        }

        const parsedAddress = (() => {
            try {
                return typeof address === "string" ? JSON.parse(address) : address;
            } catch (err) {
                console.error("Lỗi parse address:", err);
                res.json({ success: false, message: "Định dạng địa chỉ không hợp lệ" });
                return null;
            }
        })();

        if (!parsedAddress) return;

        const imageUrl = imgFile
            ? (await cloudinary.uploader.upload(imgFile.path, { resource_type: 'image' })).secure_url
            : undefined;

        console.log("UserId để cập nhật:", userId);
        const updateData = { name, phone, address: parsedAddress, birth, gender, email };
        if (imageUrl) updateData.image = imageUrl;

        const updatedUser = await userDoctorModels.findByIdAndUpdate(
            userId,
            updateData,
            { new: true }
        );

        if (!updatedUser) {
            return res.json({ success: false, message: "Không tìm thấy người dùng" });
        }

        res.json({ success: true, message: "Cập nhật thành công", user: updatedUser });

    } catch (error) {
        console.error("Lỗi cập nhật hồ sơ:", error);
        return res.json({ success: false, message: "Lỗi server" });
    }
};

export { getUserProfile, signUpUser, userLogin, userProfileUpdate };

