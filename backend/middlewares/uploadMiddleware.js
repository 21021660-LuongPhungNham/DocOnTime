import multer from "multer";
import fs from "fs";

// luu file
const uploadDir = "uploads/";

// tao ms neu thu muc chua ton tai
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// cau hinh Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname); //...doi ten file tranh trung lap
    }
});

// khoi tao middleware upload
const upload = multer({ storage });

export default upload;
