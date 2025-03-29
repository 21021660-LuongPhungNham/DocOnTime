import doctorModels from '../models/doctorModels.js';

const updateDoctorStatus = async (req, res) => {
    try {
        const { docId } = req.body;

        // Kiem tra tinh hop le cua ID 
        if (!docId) {
            return res.json({ success: false, message: "Thiếu _id bác sĩ!" });
        }

        // lay thong tin bac si
        const docData = await doctorModels.findById(docId);
        if (!docData) {
            return res.json({ success: false, message: "Không tìm thấy bác sĩ!" });
        }

        // cap nhat trang thai
        const updatedDoctor = await doctorModels.findByIdAndUpdate(
            docId, { available: !docData.available }, { new: true }
        );

        res.json({ success: true, message: "Cập nhật trạng thái thành công!", doctor: updatedDoctor });
    }
    catch (error) {
        console.error("Lỗi cập nhật trạng thái bác sĩ:", error);
        res.json({ success: false, message: "Lỗi hệ thống, vui lòng thử lại!" });
    }
};


const listDoctors = async (req, res) => {
    try {
        const doctors = await doctorModels.find({}).select(['-password', '-email']);
        console.log("Doctors found:", doctors); // ✅ Kiểm tra dữ liệu từ DB
        res.json({ success: true, doctors });
    } catch (err) {
        console.error("Error fetching doctors:", err);
        res.json({ success: false, message: err.message });
    }
};


export { updateDoctorStatus, listDoctors };
