import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col md:flex-row bg-[#5da9c5] rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 items-center overflow-hidden">
            
            {/* ........left side.........  */}
            <div className="flex-1 py-10 md:py-16 lg:py-20 text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-snug">
                    Đặt lịch khám
                    <br /> <span className="mt-2 block">Với hơn 100 bác sĩ uy tín</span>
                </h1>
                <button 
                    onClick={() => { navigate('/login'); scrollTo(0, 0) }} 
                    className="bg-white text-gray-700 px-8 py-3 rounded-full mt-6 shadow-lg hover:bg-gray-200 hover:scale-105 transition-transform duration-300"
                >
                    Tạo tài khoản
                </button>
            </div>

            {/* ........right side...... */}
            <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
                <img className="w-full h-auto object-cover rounded-lg" src={assets.appointment_img} alt="Doctor" />
            </div>

        </div>
    );
};

export default Banner;
