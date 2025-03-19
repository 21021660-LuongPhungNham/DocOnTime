import React, { useState } from "react";
import { assets } from "../../assets/assets";

const AddDoctors = () => {
    const [preview, setPreview] = useState(null);


    return (
        <form className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">Thêm bác sĩ mới</h2>

            {/* Upload hinh anh bac si */}
            <div className="flex flex-col items-center">
                <label htmlFor="docId_img" className="cursor-pointer">
                    <img src={preview ? URL.createObjectURL(preview) : assets.new_acc} alt=""
                        className="w-32 h-32 object-cover rounded-full border-2 border-gray-300 hover:opacity-80 transition"
                    />
                </label>
                <input onChange={(e) => setPreview(e.target.files[0])} type="file" id="docId_img" hidden />
                <p className="text-sm text-gray-500 mt-2">Tải lên ảnh bác sĩ</p>
            </div>

            {/* Form nhap thong tin */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block font-medium text-gray-700">Họ & tên</label>
                    <input type="text" placeholder="Nhập họ và tên" required
                        className="outline-none w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block font-medium text-gray-700">Tên tài khoản</label>
                    <input type="text" placeholder="Tên tài khoản" required
                        className="outline-none w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block font-medium text-gray-700">Email</label>
                    <input type="email" placeholder="Nhập email" required
                        className="outline-none w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block font-medium text-gray-700">Mật khẩu</label>
                    <input type="password" placeholder="Nhập mật khẩu" required
                        className="outline-none w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block font-medium text-gray-700">Kinh nghiệm</label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
                        {[...Array(40)].map((_, index) => (
                            <option key={index + 1} value={index + 1}>{index + 1} năm</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block font-medium text-gray-700">Phí khám</label>
                    <input type="number" placeholder="Nhập phí khám" required
                        className="outline-none w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block font-medium text-gray-700">Chuyên khoa</label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
                        {["Tiêu hóa", "Truyền nhiễm", "Nhi khoa", "Thần kinh", "Phụ khoa"].map((speciality) => (
                            <option key={speciality} value={speciality}>{speciality}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block font-medium text-gray-700">Học vấn</label>
                    <input type="text" placeholder="Nhập học vấn" required
                        className="outline-none w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block font-medium text-gray-700">Địa chỉ</label>
                    <input type="text" placeholder="Nhập địa chỉ" required
                        className="outline-none w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block font-medium text-gray-700">Giới thiệu</label>
                    <textarea placeholder="Nhập thông tin về bác sĩ" rows={4} required
                        className="outline-none w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                </div>
            </div>

            {/* add doctor */}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
            >
                Thêm bác sĩ
            </button>
        </form>
    );
};

export default AddDoctors;
