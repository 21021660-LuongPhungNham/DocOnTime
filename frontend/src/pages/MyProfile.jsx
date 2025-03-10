import { useState } from "react";
import { assets } from "../assets/assets"

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Nyamu",
    img: assets.profile_pic,
    email: "nyamu@gmail.com",
    phone: "(+84) 012 345 6789",
    address: {
      line: "144 Xuan Thuy, Cau Giay, Ha Noi"
    },
    gender: "Nữ",
    birth: "01-03-2002",
  });

  const [isEdit, setIsEdit] = useState(true)

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36" src={userData.img} alt="" />
      {
        isEdit
          ? <input className="bg-gray-50 text-3xl font-medium mt-4 max-w-60" type="name" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
      }
      <hr className="bg-zinc-400 h-[1px] border-none"/>
      <div>
        <p className="text-neutral-500 underline mt-3">THÔNG TIN LIÊN HỆ</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          {
            isEdit
              ? <input className="text-blue-500" type="email" value={userData.email} onChange={e => setUserData(prev => ({ ...prev, email: e.target.value }))} />
              : <p className="text-blue-500">{userData.email}</p>
          }

          <p className="font-medium">Điện thoại:</p>
          {
            isEdit
              ? <input className="bg-gray-100 max-w-52" type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className="text-blue-500">{userData.phone}</p>
          }

          <p className="font-medium">Địa chỉ:</p>
          {
            isEdit
              ? <p>
                <input className="bg-gray-50" type="text" value={userData.address.line} onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line: e.target.value } }))} />
              </p>
              : <p className="text-gray-500">{userData.address.line}</p>
          }
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">THÔNG TIN CÁ NHÂN</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Giới tính:</p>
          {
            isEdit
              ? <select className="max-w-20 bg-gray-100" value={userData.gender} onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}>
                <option value="Male">Nam</option>
                <option value="Female">Nữ</option>
              </select>
              : <p className="text-gray-400">{userData.gender}</p>
          }
          <p className="font-medium">Ngày sinh:</p>
          {
            isEdit
              ? <input className="max-w-28 bg-gray-100" type="date" value={userData.birth} onChange={e => setUserData(prev => ({ ...prev, birth: e.target.value }))} />
              : <p className="text-gray-400">{userData.birth}</p>
          }
        </div>
      </div>
      <div className="mt-10">
        {
          isEdit
            ? <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300" onClick={() => setIsEdit(false)}>Lưu</button>
            : <button className="border border-primary px-8 py-2  rounded-full hover:bg-primary hover:text-white transition-all duration-300" onClick={() => setIsEdit(true)}>Chỉnh sửa</button>
        }
      </div>
    </div >
  )

};

export default MyProfile;
