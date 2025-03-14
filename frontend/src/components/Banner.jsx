import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Banner = () => {
    const navigate = useNavigate();

    // Hàm xử lý điều hướng
    const handleLogin = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate("/login");
    };

    return (
        <section className="relative bg-[#5da9c5] rounded-lg p-6 sm:p-10 my-16 md:mx-8 flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">Đặt lịch khám ngay hôm nay</h2>
                <p className="text-white text-sm sm:text-base mt-3">Hơn 100 bác sĩ giàu kinh nghiệm luôn sẵn sàng hỗ trợ bạn.</p>
                <button onClick={handleLogin} className="bg-white text-gray-800 px-6 py-3 rounded-full mt-4 shadow-md hover:bg-gray-100 hover:scale-110 transition-all duration-300">Đăng nhập</button>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <img className="w-full max-w-[350px] object-cover rounded-lg transition duration-500 hover:scale-105" src={assets.appointment_img} alt="" />
            </div>
        </section>
    );
};

export default Banner;
