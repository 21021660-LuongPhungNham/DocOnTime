import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';

const Sidebar = () => {
    const { aToken } = useContext(AdminContext);

    return (
        <div className="mt-2 min-h-screen bg-white border-r">
            {aToken && (
                <ul className="mt-3 text-[#515151]">
                    <li>
                        <NavLink to="/dashboard" className={({ isActive }) =>
                            `flex items-center gap-3 py-3 px-4 md:px-6 md:min-w-72 cursor-pointer rounded-r-lg transition-all duration-300 ${
                                isActive ? 'bg-[#F2F3FF] border-r-4 ' : 'hover:bg-gray-200'
                            }`
                        }>
                            <img className="w-6 h-6" src={assets.home_icon} alt="Dashboard" />
                            <p>Dashboard</p>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/list-appointment" className={({ isActive }) =>
                            `flex items-center gap-3 py-3 px-4 md:px-6 md:min-w-72 cursor-pointer rounded-r-lg transition-all duration-300 ${
                                isActive ? 'bg-[#F2F3FF] border-r-4 ' : 'hover:bg-gray-200'
                            }`
                        }>
                            <img className="w-6 h-6" src={assets.appointment_icon} alt="Appointment" />
                            <p>Appointment</p>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/add-doctor" className={({ isActive }) =>
                            `flex items-center gap-3 py-3 px-4 md:px-6 md:min-w-72 cursor-pointer rounded-r-lg transition-all duration-300 ${
                                isActive ? 'bg-[#F2F3FF] border-r-4 ' : 'hover:bg-gray-200'
                            }`
                        }>
                            <img className="w-6 h-6" src={assets.add_icon} alt="Add Doctor" />
                            <p>Add Doctor</p>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/list-doctor" className={({ isActive }) =>
                            `flex items-center gap-3 py-3 px-4 md:px-6 md:min-w-72 cursor-pointer rounded-r-lg transition-all duration-300 ${
                                isActive ? 'bg-[#F2F3FF] border-r-4 ' : 'hover:bg-gray-200'
                            }`
                        }>
                            <img className="w-6 h-6" src={assets.group_icon} alt="Doctors List" />
                            <p>Doctors List</p>
                        </NavLink>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Sidebar;
