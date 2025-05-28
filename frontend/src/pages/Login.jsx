import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const { UrlBE, token, setToken } = useContext(AppContext);

  const [state, setState] = useState('Đăng ký')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {

      if (state === 'Đăng ký') {
        const { data } = await axios.post(`${UrlBE}/api/user/signup`, { name, password, email })

        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }

      } else {
        const { data } = await axios.post(`${UrlBE}/api/user/login`, { password, email })

        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      }

    } catch (error) {
      console.error("Lỗi chi tiết:", error.response?.data || error);
      toast.error(error.response?.data?.message || "Có lỗi xảy ra, vui lòng thử lại!");
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex justify-center items-center bg-gray-100">
      <div className="flex flex-col gap-4 items-start p-8 w-[340px] sm:w-96 bg-white border rounded-xl shadow-lg text-gray-700">

        <h2 className="text-2xl font-semibold text-center w-full">
          {state === "Đăng ký" ? "Tạo tài khoản" : "Đăng nhập"}
        </h2>
        <p className="text-sm text-gray-500 w-full text-center">
          Vui lòng {state === "Đăng ký" ? "đăng ký" : "đăng nhập"} để đặt lịch hẹn
        </p>
        {/* ..name... */}
        {state === "Đăng ký" && (
          <div className="w-full">
            <label className="block font-medium text-gray-600 mb-1">Họ và tên</label>
            <input className="border border-gray-300 rounded-md w-full p-2 focus:ring-2 focus:ring-blue-400 outline-none" type="text" onChange={(e) => setName(e.target.value)} value={name} required />
          </div>
        )}

        {/* Email */}
        <div className="w-full">
          <label className="block font-medium text-gray-600 mb-1">Email</label>
          <input className="border border-gray-300 rounded-md w-full p-2 focus:ring-2 focus:ring-blue-400 outline-none" type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>

        {/* nhap password */}
        <div className="w-full">
          <label className="block font-medium text-gray-600 mb-1">Mật khẩu</label>
          <input className="border border-gray-300 rounded-md w-full p-2 focus:ring-2 focus:ring-blue-400 outline-none" type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
        </div>

        {/* nut dang ky */}
        <button type="submit" className="w-full bg-blue-500 text-white text-base font-medium py-3 rounded-md hover:bg-blue-600 transition">
          {state === "Đăng ký" ? "Tạo tài khoản" : "Đăng nhập"}
        </button>

        {/* chuyen doi giua dang nhap, dang ky */}
        {state === "Đăng ký" ? (
          <p className="text-sm text-gray-600">
            Đã có tài khoản?{" "}
            <span className="text-blue-500 underline cursor-pointer" onClick={() => setState("Đăng nhập")}>
              Đăng nhập
            </span>
          </p>
        ) : (
          <p className="text-sm text-gray-600">
            Chưa có tài khoản?{" "}
            <span className="text-blue-500 underline cursor-pointer" onClick={() => setState("Đăng ký")}>
              Đăng ký ngay
            </span>
          </p>
        )}

      </div>
    </form>
  );
};


export default Login