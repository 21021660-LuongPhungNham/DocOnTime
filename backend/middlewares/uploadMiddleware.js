import multer from "multer";

// ...cau hinh luu tẹp tin
const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

// ....khoi tao middleware upload
const upload = multer({storage});

export default upload;