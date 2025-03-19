import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "../context/AdminContext";

const Login = () => {
    const [state, setState] = useState("Quản trị viên");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAToken, UrlBE } = useContext(AdminContext);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post(`${UrlBE}/api/admin/login`, { email, password });
            if (data.success) {
                localStorage.setItem('aToken', data.token);
                setAToken(data.token);
                toast.success("Đăng nhập thành công!");
            } else {
                toast.error("Thông tin đăng nhập không đúng!");
            }
        } catch (error) {
            console.error('Login failed:', error);
            toast.error(`Đăng nhập thất bại: ${error.response ? error.response.data.message : error.message}`);
        }
    };


    return (
        <form className="min-h-[80vh] flex justify-center items-center bg-gray-100" onSubmit={onSubmitHandler}>
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    <span className="text-blue-500">{state}</span>
                </h2>

                {/* Nhập email */}
                <div className="mb-4">
                    <label className="block text-gray-600 font-medium mb-1">Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="email"
                        required
                        placeholder="Nhập email của bạn"
                    />
                </div>

                {/* Nhập password */}
                <div className="mb-4">
                    <label className="block text-gray-600 font-medium mb-1">Mật khẩu</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="password"
                        required
                        placeholder="Nhập mật khẩu"
                    />
                </div>

                {/* Xử lý đăng nhập */}
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                    Đăng nhập
                </button>

                {/* Chuyển đổi giữa quản trị viên và bác sĩ */}
                {state === "Quản trị viên" ? (
                    <p className="text-sm mt-4 text-gray-600">
                        Bác sĩ đăng nhập?
                        <span className="text-primary underline cursor-pointer" onClick={() => setState("Bác sĩ")}>
                            {" "}Nhấp vào đây
                        </span>
                    </p>
                ) : (
                    <p className="text-sm mt-4 text-gray-600">
                        Quản trị viên đăng nhập?
                        <span className="text-primary underline cursor-pointer" onClick={() => setState("Quản trị viên")}>
                            {" "}Nhấp vào đây
                        </span>
                    </p>
                )}
            </div>
        </form>
    );
};

export default Login;
