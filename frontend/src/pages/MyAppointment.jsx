import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const MyAppointment = () => {

    const { UrlBE, token } = useContext(AppContext);

    const [listAppointment, setListAppointment] = useState([]);
    const fetchUserAppointment = async () => {
        try {

            const { data } = await axios.get(`${UrlBE}/api/user/list_appointment`, { headers: { token } })
            console.log("Response from list_appointment:", data);
            console.log("Token:", token);


            if (data.success) {
                setListAppointment(data.appointments.reverse());
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (token) {
            fetchUserAppointment()
        }
    }, [token])

    return (
        <div>
            <p className="pb-3 mt-12 font-semibold border-b">Lịch hẹn</p>
            <div>
                {listAppointment.map((item, index) => (
                    <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b" key={index}>
                        <div>
                            <img className="w-32 bg-indigo-50" src={item.docData.image} alt="" />
                        </div>
                        <div className="flex-1 text-sm text-zinc-600">
                            <p className="text-neutral-800 font-semibold">{item.docData.name}</p>
                            <p>{item.speciality}</p>
                            <p className="text-zinc-800 font-medium mt-1">Địa chỉ:</p>
                            <p className="text-xs">{item.docData.address.line}</p>
                            <p className="text-xs mt-1">
                                <span className="text-sm text-neutral-800 font-medium">Ngày & giờ:</span>{' '}
                                <span className="text-blue-600 font-medium">{item.slotDate} | {item.slotTime}</span>
                            </p>
                        </div>
                        <div></div>
                        <div className="flex flex-col gap-2 justify-end">
                            <button className="text-sm text-stone-500 border rounded-full text-center sm:min-w-48 py-2 hover:bg-primary hover:text-white transition-all duration-300">Thanh toán trực tuyến</button>
                            <button className="text-sm text-stone-500 border rounded-full text-center sm:min-w-48 py-2 hover:bg-red-500 hover:text-white transition-all duration-300">Hủy lịch hẹn</button>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default MyAppointment