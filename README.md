# DocOnTime - Hệ sinh thái y tế thông minh

**DocOnTime** là nền tảng đặt lịch khám bệnh trực tuyến giúp kết nối bệnh nhân và bác sĩ một cách hiệu quả, nhanh chóng và hiện đại. Hệ thống hỗ trợ đăng ký tài khoản, tìm bác sĩ, đặt lịch hẹn, thanh toán trực tuyến, và tư vấn từ xa.

## Công nghệ sử dụng
MongoDB: Cơ sở dữ liệu NoSQL lưu trữ thông tin người dùng, bác sĩ, lịch hẹn, ...

Express.js: Framework backend xây dựng API RESTful.

React.js: Frontend giao diện người dùng tương tác hiện đại, responsive.

Node.js: Runtime backend để chạy server và xử lý logic.

MERN Stack: Kết hợp các công nghệ trên tạo nên ứng dụng full-stack.

## Tính năng nổi bật
- [x] Đăng ký, đăng nhập với phân quyền (bệnh nhân & bác sĩ)
- [x] Hồ sơ bác sĩ & bệnh nhân chi tiết
- [x] Tìm kiếm & lọc bác sĩ theo chuyên khoa
- [x] Đặt lịch khám, hủy lịch, theo dõi lịch sử
- [x] Tích hợp thanh toán trực tuyến qua PayOS
- [x] Chatbot tư vấn sức khỏe (đang phát triển)
- [x] Giao diện responsive trên cả máy tính & điện thoại

## Cài đặt nhanh
1. **Clone repo về máy**

```bash
git clone https://github.com/21021660-LuongPhungNham/DocOnTime.git
cd DocOnTime

2. **Cài đặt dependencies**
**Backend**
cd ../backend
npm install
**Frontend**
cd ../frontend
npm install
3.**Tạo file .env trong thư mục backend**
DATABASE_URL=your_mongodb_connection_string
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
JWT_SECRET=your_jwt_secret
PAYOS_CLIENT_ID=your_payos_client_id
PAYOS_API_KEY=your_payos_api_key
PAYOS_CHECKSUM_KEY=your_payos_checksum_key
CURRENCY=VND
4.**Khởi động dự án**
**Backend**
npm run server
**Frontend**
npm run dev




