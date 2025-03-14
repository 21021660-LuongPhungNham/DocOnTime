import { assets } from "../assets/assets"

const About = () => {
  return (
    <div>

      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>GIỚI <span className="text-gray-700 font-medium">THIỆU</span></p>
      </div>

      <div className="flex flex-col my-10 md:flex-row gap-12">
        <img className="w-full md:max-w-[360px]" src={assets.about_image} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4">
          <p>Chào mừng bạn đến với ứng dụng đặt lịch hẹn trực tuyến – giải pháp hiện đại giúp bạn dễ dàng kết nối với các chuyên gia hàng đầu mà không phải mất thời gian chờ đợi lâu.</p>
          <p>Với giao diện thân thiện và quy trình đặt lịch đơn giản, ứng dụng cho phép bạn lựa chọn bác sĩ và chuyên khoa phù hợp, đặt lịch hẹn chỉ trong vài bước. Bạn cũng có thể theo dõi lịch hẹn, nhận nhắc nhở và thậm chí tham gia tư vấn trực tuyến ngay tại nhà, tiết kiệm thời gian và nâng cao hiệu quả chăm sóc sức khỏe.</p>
          <b className="text-gray-800">Mục tiêu hướng đến</b>
          <p>Chúng tôi hình dung một tương lai nơi chăm sóc sức khỏe trở nên dễ dàng tiếp cận với mọi người, loại bỏ thời gian chờ đợi kéo dài và kết nối bệnh nhân với bác sĩ phù hợp mọi lúc, mọi nơi. Sứ mệnh của chúng tôi là tạo ra một nền tảng y tế thông minh, an toàn và hiệu quả, góp phần nâng cao sức khỏe cho mỗi cá nhân.
</p>
        </div>
      </div>

      <div className="text-xl mt-4">
        <p>TẠI SAO <span className="text-gray-700 font-semibold">NÊN CHỌN CHÚNG TÔI</span></p>
      </div>

      <div className="flex flex-col md:flex-row text-sm mt-6">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transaction-all duration-300 text-gray-600 cursor-pointer">
          <b>Hiệu quả: </b>
          <p className="">Giảm thiểu thời gian chờ đợi, giúp bạn đặt lịch hẹn và nhận tư vấn y tế nhanh chóng, chính xác.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transaction-all duration-300 text-gray-600 cursor-pointer">
          <b>Tiện lợi:</b>
          <p className="">Dễ dàng đặt lịch hẹn tại nhà, theo dõi lịch trình và nhận nhắc nhở để không bỏ lỡ bất kỳ cuộc hẹn nào.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transaction-all duration-300 text-gray-600 cursor-pointer">
          <b>Cá nhân hóa:</b>
          <p className="">Nhận đề xuất bác sĩ phù hợp với nhu cầu của bạn, đảm bảo trải nghiệm chăm sóc sức khỏe tốt nhất.</p>
        </div>
      </div>

    </div>
  )
}

export default About