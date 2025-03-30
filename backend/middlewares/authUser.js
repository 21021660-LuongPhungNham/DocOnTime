import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    try {
        const token = req.headers.token;

        if (!token) {
            return res.json({ success: false, message: 'Không được phép! Hãy đăng nhập lại!' });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decodedToken);

        req.userId = decodedToken.userId;
        console.log("Assigned userId:", req.userId);

        next();
    } catch (error) {
        console.error('Lỗi xác thực:', error);
        res.json({ success: false, message: 'Token không hợp lệ hoặc đã hết hạn!' });
    }
};

export default authUser;
