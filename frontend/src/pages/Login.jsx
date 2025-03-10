import { useState } from "react"

const Login = () => {


  const [state, setState] = useState('Đăng ký')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">{state === 'Đăng ký' ? "Tạo tài khoản" : "Đăng nhập"}</p>
        <p>Vui lòng {state === 'Đăng ký' ? "Đăng ký" : "Đăng nhập"} để đặt lịch hẹn</p>
        {
          state === 'Đăng ký' && <div className="w-full">
            <p>Họ và tên</p>
            <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="text" onChange={(e) => setName(e.target.value)} value={name} required />
          </div>
        }

        <div className="w-full">
          <p>Email</p>
          <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>
        <div className="w-full">
          <p>Mật khẩu</p>
          <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
        </div>
        <button type="submit" className=" rounded-md py-3 w-full bg-primary text-white text-base">{state === 'Đăng ký' ? "Tạo tài khoản" : "Đăng nhập"}</button>
        {
          state === 'Đăng ký'
            ? <p>Đã có tài khoản? <span onClick={() => setState('Đăng nhập')} className="text-primary underline cursor-pointer">Đăng nhập</span></p>
            : <p>Tạo tài khoản mới? <span onClick={() => setState('Đăng ký')} className="text-primary underline cursor-pointer">Nhấn vào đây</span></p>
        }
      </div>
    </form>
  )
}

export default Login