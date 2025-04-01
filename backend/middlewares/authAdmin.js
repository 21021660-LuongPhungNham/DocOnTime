import jwt from 'jsonwebtoken';

// Middleware xác thực quyền Admin
const authAdmin = async (req, res, next) => {
    try {
        const token = req.headers.atoken;
        if (!token) {
            return res.json({ success: false, message: 'Không được phép! hãy đăng nhập lại!' });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        if (!(decodedToken.email === process.env.ADMIN_EMAIL && decodedToken.password === process.env.ADMIN_PASSWORD)) {
            return res.json({ success: false, message: 'Không được phép!' });
        }

        next();
    } catch (error) {
        console.error('lỗi xác thực.:', error);
        res.json({ success: false, message: 'lỗi máy chủ nội bộ'});
    }
};

export default authAdmin;
