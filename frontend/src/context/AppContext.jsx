import axios from 'axios';
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currencySymbol = 'VNĐ';

    // Lấy token từ localStorage
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [userData, setUserData] = useState(false);
    const [doctors, setDoctors] = useState([]);

    const UrlBE = import.meta.env.VITE_BE_URL;

    // ✅ Lấy danh sách bác sĩ
    const getDoctorsData = async () => {
        try {
            const { data } = await axios.get(`${UrlBE}/api/doctor/list`);
            console.log("API Response:", data);  // ✅ Kiểm tra dữ liệu API
            console.log("Doctors Data:", data.doctors);  // ✅ Log danh sách bác sĩ

            if (data.success) {
                setDoctors(data.doctors);
                console.log("Updated Doctors State:", data.doctors);  // ✅ Kiểm tra xem state có cập nhật không
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            toast.error(error.message);
        }
    };


    useEffect(() => {
        getDoctorsData();
    }, [setDoctors]);  // ✅ Thêm `setDoctors` để chắc chắn nó re-render

    console.log("Doctors state:", doctors);

    // ✅ Lấy thông tin user
    const fetchUserProfile = async () => {
        try {
            const { data } = await axios.get(`${UrlBE}/api/user/get_profile`, {
                headers: { token }
            });

            if (data.success) {
                setUserData(data.user);
            } else {
                toast.error(data.message);
                setUserData(null);
            }
        } catch (error) {
            console.error("Lỗi khi lấy user profile:", error.response?.data || error.message);

            if (error.response?.status === 401) {
                toast.error("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại!");
                localStorage.removeItem("token");
                setToken("");
                setUserData(null);
            } else {
                toast.error("Lỗi từ server, vui lòng thử lại.");
            }
        }
    };

    useEffect(() => {
        if (token) {
            fetchUserProfile();
        } else {
            setUserData(null);
        }
    }, [token]);

    const value = {
        doctors, currencySymbol, UrlBE, token,
        setToken, userData, setUserData, fetchUserProfile
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default AppContextProvider;
