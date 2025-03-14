import { Link } from 'react-router-dom'
import { specialityData } from '../assets/assets'
const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800' >
            <h1 className='text-3xl font-bold text-gray-900'>Tìm kiếm theo chuyên khoa</h1>
    <p className='text-gray-600 text-lg text-center max-w-xl'>
        Dễ dàng duyệt danh sách bác sĩ uy tín, đặt lịch khám nhanh chóng và thuận tiện.
    </p>
            <div className='flex sm:justify-center gap-6 pt-5 overflow-scroll'>
                {specialityData.map((item, index) => (
                    <Link onClick={() => scrollTo(0, 0)} className='flex flex-col items-center  cursor-pointer  hover:translate-y-[-10px] transition-all duration-500'
                        key={index} to={`/doctors/${item.speciality}`}>
                        <img className='w-48 sm:w-28 mb-2 rounded-full' src={item.image} alt="" />
                        <p className=''>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu