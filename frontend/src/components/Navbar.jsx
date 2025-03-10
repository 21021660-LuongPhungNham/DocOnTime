
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { assets } from './../assets/assets';
const Navbar = () => {

    const navigate = useNavigate();

    //const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <img onClick={() => { navigate('/'); scrollTo(0, 0) }} className='w-28 cursor-pointer' src={assets.logo} alt="" />
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>TRANG CHỦ</li>
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
                    token ?
                        <div className='flex items-center gap-2 group relative'>
                            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
                            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600  hidden group-hover:block'>
                                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                    <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>Tài khoản</p>
                                    <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>Lịch hẹn</p>
                                    <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Đăng xuất</p>
                                </div>
                            </div>
                        </div>
                        : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full'>Tạo tài khoản</button>

                }

            </div>
        </div>


    )
}

export default Navbar