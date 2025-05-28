
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { assets } from './../assets/assets';
import { AppContext } from '../context/AppContext';
const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const { token, setToken, userData } = useContext(AppContext)

    const handleLogout = () => {
        localStorage.removeItem("token");
        setToken(null);
        navigate('/');
    };

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <div className='flex items-center gap-3'>
                <img onClick={() => setShowMenu(true)} className='w-6 md:hidden cursor-pointer' src={assets.menu_icon} alt="" />
                <img onClick={() => { navigate('/'); scrollTo(0, 0) }} className='w-24 cursor-pointer' src={assets.logo} alt="" />

                {/* .........mobile menu.......... */}
                <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img className='w-36' src={assets.logo} alt="" />
                        <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
                    </div>
                    <ul className='flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium'>
                        <NavLink onClick={() => setShowMenu(false)} to='/'><p className="px-4 py-2 rounded inline-block">Trang chủ</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className="px-4 py-2 rounded inline-block">Bác sĩ</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className="px-4 py-2 rounded inline-block">Liên hệ</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/about'><p className="px-4 py-2 rounded inline-block">Giới thiệu</p></NavLink>
                    </ul>
                </div>
            </div>

            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li id='home' className='py-1'>TRANG CHỦ</li>
                    <hr className='outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='doctors'>
                    <li className='py-1'>BÁC SĨ</li>
                    <hr className=' outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='contact'>
                    <li className='py-1'>LIÊN HỆ</li>
                    <hr className=' outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='about'>
                    <li className='py-1'>GIỚI THIỆU</li>
                    <hr className=' outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                {
                    token ? (
                        <div className="flex items-center gap-3 group relative cursor-pointer">
                            <img className="w-9 rounded-full" src={userData?.image ? userData.image : assets.new_acc}  alt="" />
                            <img className="w-3" src={assets.dropdown_icon} alt="" />
                            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-700 hidden z-20 group-hover:block">
                                <div className="min-w-48 bg-gray-50 shadow-lg rounded flex flex-col gap-5 p-5">
                                    <p onClick={() => navigate('/my-profile')} className="hover:text-black cursor-pointer">
                                        Tài khoản
                                    </p>
                                    <p onClick={() => navigate('/my-appointments')} className="hover:text-black cursor-pointer">
                                        Lịch hẹn
                                    </p>
                                    <p onClick={handleLogout} className="hover:text-black cursor-pointer">
                                        Đăng xuất
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button onClick={() => navigate('/login')} className="bg-primary text-white px-7 py-4 rounded-full">
                            Tạo tài khoản
                        </button>
                    )
                }


            </div>
        </div>


    )
}

export default Navbar