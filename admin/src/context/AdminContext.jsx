import { createContext, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ?? '');
    const [doctors, setDoctors] = useState([]);

    const UrlBE = import.meta.env.VITE_BE_URL;

    const getAllDoctors = async () => {
        if (!aToken) {
            toast.error("Bạn chưa đăng nhập!");
            return;
        }

        try {
            const { data } = await axios.post(`${UrlBE}/api/admin/all_doctor`, {}, { headers: { aToken } });

            if (data.success) {
                setDoctors(data.doctors);
                console.log(data.doctors);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Lỗi khi lấy danh sách bác sĩ: " + error.message);
        }
    };

    const changeDoctorStatus = async (docId) => {
        if (!docId) {
            toast.error("Thiếu ID bác sĩ!");
            return;
        }

        if (!aToken) {
            toast.error("Bạn chưa đăng nhập!");
            return;
        }

        try {
            const { data } = await axios.post(`${UrlBE}/api/admin/doctor_status`, { docId }, { headers: { aToken } });
            if (data.success) {
                toast.success(data.message);
                getAllDoctors();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error.message);
            toast.error("Lỗi cập nhật trạng thái bác sĩ: " + error.message);
        }
    };

    const value = {
        aToken, setAToken, UrlBE, doctors, getAllDoctors, changeDoctorStatus
    };

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;
