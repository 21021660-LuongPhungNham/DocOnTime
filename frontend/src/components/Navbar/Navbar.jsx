
import { NavLink } from 'react-router-dom';
import { assets } from './../../assets/assets';
const Navbar = () => {
    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 bordor-b border-b-gray-400'>
            <img className='w-45 cursor-pointer' src={assets.logo} alt="" />
            <ul className='hiden md:flex gap-10 font-medium'>
                <NavLink>
                    <li className='py-1'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' />
                </NavLink>
                <NavLink>
                    <li className='py-1'>DOCTORS</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' />
                </NavLink>
                <NavLink>
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' />
                </NavLink>
                <NavLink>
                    <li className='py-1'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' />
                </NavLink>
            </ul>
            <div>
                <button className='font-medium'>Create account</button>
            </div>
        </div>


    )
}

export default Navbar