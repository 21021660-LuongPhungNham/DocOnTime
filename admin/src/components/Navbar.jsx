import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { aToken, setAToken } = useContext(AdminContext);
    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
        if (aToken) {
            setAToken('');
            localStorage.removeItem('aToken');
        }
    }

    return (
        <nav className="bg-[#bfebf9] text-white p-4 shadow-md flex justify-between items-center">
            {/* Logo & Vai trò */}
            <div className="flex items-center space-x-3 sm:px-10 text-sm">
                <img className="w-24 sm:w-28" src={assets.logo} alt="Logo" />
                <p className="bg-white text-gray-800 px-4 py-1 border border-gray-400 rounded-full shadow-md font-medium">
                    {aToken ? "Quản trị viên" : "Bác sĩ"}
                </p>
            </div>

            {/* Nút Logout */}
            <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
            >
                Đăng xuất
            </button>
        </nav>
    );
}

export default Navbar;
