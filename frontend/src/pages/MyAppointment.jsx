import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointment = () => {

    const { doctors } = useContext(AppContext)

    return (
        <div>
            <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">Lịch hẹn</p>
            <div>
                {doctors.slice(0, 5).map((item, index) => (
                    <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b" key={index}>
                        <div>
                            <img src={item.image} alt="" />
                        </div>
                        <div>
                            <p>{item.name}</p>
                            <p>{item.speciality}</p>
                            <p>Địa chỉ:</p>
                            <p>{item.address.line1}</p>
                            <p><span>Ngày & giờ:</span> 25, July, 2024 | 8:30 PM</p>
                        </div>
                        <div>

                        </div>
                        <div>
                            <button>Thanh toán trức tuyến</button>
                            <button>Hủy lịch hẹn</button>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default MyAppointment