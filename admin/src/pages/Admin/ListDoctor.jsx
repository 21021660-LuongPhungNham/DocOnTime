import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';

const ListDoctor = () => {
  const { doctors, aToken, getAllDoctors, changeDoctorStatus } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

  return (
    <div className="p-5 max-h-[90vh]">
      <h1 className="text-lg font-medium mb-4 text-center">All Doctors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

        {doctors.length > 0 ? (
          doctors.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border cursor-pointer">
              <img className="bg-indigo-50 w-full object-cover transition-all duration-300 hover:bg-[#59aecd]" src={item.image} alt={item.name} />
              <div className="m-3">
                <p className="text-lg font-medium text-gray-800">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.speciality}</p>
                <div className="flex items-center gap-2 mt-2 text-sm">
                  <input onChange={() => changeDoctorStatus(item._id)} type="checkbox" checked={item.available} readOnly className="w-4 h-4 accent-blue-600" />
                  <p className={item.available ? "text-blue-600" : "text-red-600"}>
                    {item.available ? "Available" : "Unavailable"}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No doctors available.</p>
        )}

      </div>
    </div>
  );
};

export default ListDoctor;
