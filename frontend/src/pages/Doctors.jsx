import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext";

const Doctors = () => {

  const navigate = useNavigate();
  const { speciality } = useParams();

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(true)

  const { doctors } = useContext(AppContext)
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }
    else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div className="">
      <p className="text-gray-600">Duyệt qua các chuyên khoa của bác sĩ.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Lọc</button>
        <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden'}`}>
          <p onClick={() => speciality === 'Tiêu hóa' ? navigate('/doctors') : navigate('/doctors/Tiêu hóa')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap ${speciality === "Tiêu hóa" ? "bg-indigo-100 text-black" : ""}`}>Tiêu hóa</p>
          <p onClick={() => speciality === 'Truyền nhiễm' ? navigate('/doctors') : navigate('/doctors/Truyền nhiễm')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16  border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap ${speciality === "Truyền nhiễm" ? "bg-indigo-100 text-black" : ""}`}>Truyền nhiễm</p>
          <p onClick={() => speciality === 'Nhi khoa' ? navigate('/doctors') : navigate('/doctors/Nhi khoa')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap ${speciality === "Nhi khoa" ? "bg-indigo-100 text-black" : ""}`}>Nhi khoa</p>
          <p onClick={() => speciality === 'Thần kinh' ? navigate('/doctors') : navigate('/doctors/Thần kinh')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap ${speciality === "Thần kinh" ? "bg-indigo-100 text-black" : ""}`}>Thần kinh</p>
          <p onClick={() => speciality === 'Phụ khoa' ? navigate('/doctors') : navigate('/doctors/Phụ khoa')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap ${speciality === "Phụ khoa" ? "bg-indigo-100 text-black" : ""}`}>Phụ khoa</p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {
            filterDoc.map((item, index) => (
              <div onClick={() => navigate(`/appointment/${item._id}`)} key={index} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
                <img className="bg-blue-50 pointer-events-none w-full" src={item.image} alt="" />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-center text-green-500">
                    <p className="w-2 h-2 bg-green-500 rounded-full "></p>
                    <p>Trực tuyến</p>
                  </div>
                  <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                  <p className="text-gray-600 text-sm">{item.speciality}</p>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div >
  )
}

export default Doctors