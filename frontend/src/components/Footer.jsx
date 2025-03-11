import { assets } from "../assets/assets"

const Footer = () => {
    return (
        <div className="md:mx-10">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

                {/* .......left......... */}
                <div className="">
                    <img className="mb-5 w-40" src={assets.logo} alt="" />
                    <p className="w-full md:w-2/3 text-gray-600 leading-6">Đặt lịch nhanh chóng, kết nối với các bác sĩ dễ dàng.</p>
                </div>

                {/* .......left......... */}
                <div className="text-center md:text-left">
                    <p className="text-lg font-semibold mb-3">CÔNG TY</p>
                    <ul className="flex flex-col gap-2 text-gray-600 scroll-smooth">
                        <li><a href="#home">Trang chủ</a></li>
                        <li><a href="/about">Giới thiệu</a></li>
                        <li><a href="/contact">Liên hệ</a></li>
                        <li><a href="/policy">Chính sách</a></li>
                    </ul>
                </div>

                {/* .......left......... */}
                <div className="text-center md:text-left">
                    <p className="text-lg font-semibold mb-3">LIÊN HỆ</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>📞 +84 012-3456-789</li>
                        <li>📧 123@gmail.com</li>
                    </ul>
                </div>
            </div>

            {/* .... */}
            <div className="mt-10">
                <hr />
                <p className="py-5 text-sm text-center text-gray-500">
                    © 2025 - All Rights Reserved
                </p>
            </div>
        </div>
    )
}

export default Footer