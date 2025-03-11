import { assets } from "../assets/assets";

const Header = () => {
    return (
        <div className="relative flex flex-col md:flex-row items-center justify-start rounded-lg px-6 md:px-10 lg:px-20 py-16 md:py-[10vw] overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <img src={assets.header_img} alt="" className="w-full h-full object-cover rounded-lg" />
            </div>

            <div className="relative z-10 flex flex-col items-start justify-center gap-4 text-white text-left max-w-lg ml-0">
                <p className="text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight">
                    DocOnTime<br /><span className="text-3xl text-slate-500">Hệ sinh thái y tế thông minh tiện lợi</span>
                </p>
                <p className="text-sm md:text-base font-light">
                    Dễ dàng tìm kiếm và lựa chọn bác sĩ phù hợp,
                    <br />đặt lịch khám nhanh chóng và thuận tiện.
                </p>
                <a href="#speciality"
                    className="flex items-center gap-3 bg-white hover:bg-[#26b7ec] text-black rounded-full px-6 py-3 text-sm md:text-base font-medium shadow-lg hover:scale-105 transition-all duration-300">
                    Đặt lịch ngay
                    <img className="w-5" src={assets.arrow_icon} alt="Arrow Icon" />
                </a>
            </div>
        </div>
    );
};

export default Header;
