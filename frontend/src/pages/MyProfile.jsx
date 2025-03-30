import axios from "axios";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ✅ Import CSS để hiển thị đẹp hơn
import { AppContext } from "../context/AppContext";
import { assets } from './../assets/assets';

const MyProfile = () => {
  const { userData, setUserData, token, UrlBE, fetchUserProfile } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);

  const userProfileUpdate = async () => {
    try {
      const formData = new FormData();

      formData.append('name', userData.name);
      formData.append('phone', userData.phone);
      formData.append('email', userData.email);
      formData.append('address', JSON.stringify(userData.address));
      formData.append('gender', userData.gender);
      formData.append('birth', userData.birth);

      image && formData.append('image', image);

      const { data } = await axios.post(`${UrlBE}/api/user/update_profile`, formData, {
        headers: { token }
      });

      console.log("Dữ liệu cập nhật:", Object.fromEntries(formData));

      if (data.success) {
        toast.success(data.message);
        await fetchUserProfile();
        setUserData(data.user);
        setIsEdit(false);
        setImage(null);
      }
      else {
        toast.error(data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return userData && (
    <div className="max-w-lg flex flex-col gap-2 text-sm">

      {isEdit ? (
        <label htmlFor="image">
          <div className="inline-block cursor-pointer relative">
            {/* hien thi anh xem truoc hoac anh hien tai */}
            <img className="w-36 rounded opacity-75" src={image ? URL.createObjectURL(image) : userData.image} alt="" />
            <img className="w-10 absolute bottom-12 right-12" src={image ? '' : assets.upload_icon} alt="" />
          </div>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" className="hidden" />
        </label>
      ) : (
        <img className="w-36 rounded-full" src={userData.image} alt="" />
      )}

      {
        isEdit
          ? <input className="bg-gray-50 text-3xl font-medium mt-4 max-w-60" type="text"
            value={userData.name || ""}
            onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name || "Chưa cập nhật"}</p>
      }
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3">THÔNG TIN LIÊN HỆ</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email:</p>
          {
            isEdit
              ? <input className="text-blue-500" type="email"
                value={userData.email || ""}
                onChange={e => setUserData(prev => ({ ...prev, email: e.target.value }))} />
              : <p className="text-blue-500">{userData.email || "Chưa có email"}</p>
          }

          <p className="font-medium">Điện thoại:</p>
          {
            isEdit
              ? <input className="bg-gray-100 max-w-52" type="text"
                value={userData.phone || ""}
                onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className="text-blue-500">{userData.phone || "Chưa có số điện thoại"}</p>
          }

          <p className="font-medium">Địa chỉ:</p>
          {
            isEdit
              ? <input className="bg-gray-50" type="text"
                value={userData.address?.line || ""}
                onChange={(e) => setUserData(prev => ({
                  ...prev,
                  address: { ...prev.address, line: e.target.value }
                }))} />
              : <p className="text-gray-500">{userData.address?.line || "Chưa có địa chỉ"}</p>
          }
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">THÔNG TIN CÁ NHÂN</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Giới tính:</p>
          {
            isEdit
              ? <select className="max-w-20 bg-gray-100"
                value={userData.gender || ""}
                onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}>
                <option value="">Chọn</option>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>
              : <p className="text-gray-400">{userData.gender || "Chưa cập nhật"}</p>
          }

          <p className="font-medium">Ngày sinh:</p>
          {
            isEdit ? (
              <input
                className="max-w-28 bg-gray-100"
                type="date"
                value={userData.birth || ""}
                onChange={(e) => setUserData({ ...userData, birth: e.target.value })}
              />
            ) : (
              <p className="text-gray-400">{userData.birth || "Chưa cập nhật"}</p>
            )
          }

        </div>
      </div>
      <div className="mt-10">
        {
          isEdit
            ? <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              onClick={userProfileUpdate}>Lưu</button>
            : <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              onClick={() => setIsEdit(true)}>Chỉnh sửa</button>
        }
      </div>
    </div>
  );
};

export default MyProfile;
