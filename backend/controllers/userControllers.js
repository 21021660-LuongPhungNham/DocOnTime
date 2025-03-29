import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";
import userDoctorModels from "../models/userDoctorModels.js";  // Chỉ giữ 1 import đúng

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

export { signUpUser, userLogin };
