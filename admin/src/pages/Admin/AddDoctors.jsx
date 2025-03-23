import React, { useContext, useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from 'react-toastify';
import axios from 'axios';

const AddDoctors = () => {
    const [imgPre, setImgPre] = useState(null);
    const [preUrl, setpreUrl] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [experience, setExperience] = useState('1 năm');
    const [fees, setFees] = useState('');
    const [about, setAbout] = useState('');
    const [speciality, setSpeciality] = useState('Tiêu hóa');
    const [degree, setDegree] = useState('');
    const [address, setAddress] = useState('');

    const { UrlBE, aToken } = useContext(AdminContext);

    // Xử lý ảnh xem trước
    useEffect(() => {
        if (!imgPre) {
            setpreUrl(null);
            return;
        }
        const objectUrl = URL.createObjectURL(imgPre);
        setpreUrl(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [imgPre]);

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            if (!imgPre) {
                return toast.error("Vui lòng chọn ảnh");
            }

            const formData = new FormData();
            formData.append('image', imgPre);
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('experience', experience);
            formData.append('fees', Number(fees));
            formData.append('about', about);
            formData.append('speciality', speciality);
            formData.append('degree', degree);
            formData.append('address', JSON.stringify({ line: address }));

            formData.forEach((value, key) => {
                console.log(`${key} : ${value}`);
            });

            // Gửi request lên server
            const { data } = await axios.post(`${UrlBE}/api/admin/add_doctor`, formData, {headers: {aToken} }
            );

            if (data.success) {
                toast.success(data.message)
                setImgPre(false);
                setName('');
                setEmail();
                setPassword('');
                setExperience('');
                setFees('');
                setAbout('');
                setSpeciality('');
                setDegree('');
                setAddress('');
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error("Đã xảy ra lỗi, vui lòng thử lại!");
            console.error("Lỗi:", error);
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">Thêm bác sĩ mới</h2>

            {/* Upload hình ảnh bác sĩ */}
            <div className="flex flex-col items-center">
                <label htmlFor="doc_img" className="cursor-pointer">
                    <img src={preUrl || assets.new_acc} alt="Preview"
                        className="w-32 h-32 object-cover rounded-full border-2 border-gray-300 hover:opacity-80 transition"
                    />
                </label>
                <input onChange={(e) => setImgPre(e.target.files[0])} type="file" id="doc_img" hidden />
                <p className="text-sm text-gray-500 mt-2">Tải lên ảnh bác sĩ</p>
            </div>

            {/* Form nhập thông tin */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block font-medium text-gray-700">Họ & tên</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Nhập họ và tên" required
                        className="outline-none w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block font-medium text-gray-700">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Nhập email" required
                        className="outline-none w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block font-medium text-gray-700">Mật khẩu</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Nhập mật khẩu" required
                        className="outline-none w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block font-medium text-gray-700">Kinh nghiệm</label>
                    <select onChange={(e) => setExperience(e.target.value)} value={experience} className="outline-none w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
                        {[...Array(40)].map((_, index) => (
                            <option key={index + 1} value={`${index + 1} năm`}>{index + 1} năm</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block font-medium text-gray-700">Phí khám</label>
                    <input onChange={(e) => setFees(e.target.value)} value={fees} type="number" placeholder="Nhập phí khám" required
                        className="outline-none w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block font-medium text-gray-700">Chuyên khoa</label>
                    <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} className="outline-none w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
                        {["Tiêu hóa", "Truyền nhiễm", "Nhi khoa", "Thần kinh", "Phụ khoa", "Phục hồi chức năng"].map((sp) => (
                            <option key={sp} value={sp}>{sp}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block font-medium text-gray-700">Học vấn</label>
                    <input onChange={(e) => setDegree(e.target.value)} value={degree} type="text" placeholder="Nhập học vấn" required
                        className="outline-none w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div>
                    <label className="block font-medium text-gray-700">Địa chỉ</label>
                    <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" placeholder="Nhập địa chỉ" required
                        className="outline-none w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block font-medium text-gray-700">Giới thiệu</label>
                    <textarea onChange={(e) => setAbout(e.target.value)} value={about} placeholder="Nhập thông tin về bác sĩ" rows={4} required
                        className="outline-none w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                </div>

            </div>

            <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition">
                Thêm bác sĩ
            </button>
        </form>
    );
};

export default AddDoctors;
