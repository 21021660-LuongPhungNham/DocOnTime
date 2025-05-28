import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const MyAppointment = () => {

    const { UrlBE, token } = useContext(AppContext);

    const [listAppointment, setListAppointment] = useState([]);

    //   lay danh sach lich hen benh nhan
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

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const orderCode = queryParams.get('orderCode');

        if (orderCode) {
            checkPaymentStatus(orderCode);
        }
    }, []);

    // huy lich hen sau khi da dat
    const cancelAppointment = async (appointmentId) => {
        try {

            const { data } = await axios.post(`${UrlBE}/api/user/cancel_appointment`, { appointmentId }, { headers: { token } });

            if (data.success) {
                toast.success(data.message)
                fetchUserAppointment()
            } else {
                toast.error(data.message)
            }

        } catch (err) {
            console.error("Lỗi khi huỷ lịch hẹn:", err);
            toast.error("Đã xảy ra lỗi trong quá trình huỷ lịch. Vui lòng thử lại sau.");
        }
    };

    // xu ly payment
    const handlePayment = async (appointmentId) => {
        try {
            const { data } = await axios.post(`${UrlBE}/api/user/payment_payos`, { appointmentId }, {
                headers: { token }
            });

            if (data.success) {
                window.location.href = data.paymentUrl;
            } else {
                toast.error(data.message || "Không thể tạo link thanh toán");
            }
        } catch (err) {
            toast.error("Lỗi thanh toán: " + err.message);
        }
    };

    const checkPaymentStatus = async (orderCode) => {
        try {
            const { data } = await axios.post(`${UrlBE}/api/user/check_payment_status`, { orderCode }, {
                headers: { token }
            });

            if (data.success && data.status === 'PAID') {
                toast.success('Thanh toán thành công!');
                fetchUserAppointment(); // refresh danh sách
            } else {
                toast.warn('Thanh toán chưa hoàn tất!');
            }
        } catch (err) {
            console.error(err);
            toast.error(`Lỗi kiểm tra trạng thái thanh toán: ${err.response ? err.response.data.message : err.message}`);
        }
    };


    return (
        <div>
            <p className="pb-3 mt-12 font-semibold border-b">Lịch hẹn</p>
            <div>
                {listAppointment.map((item, index) => (
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 py-2 border-b" key={index}>
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

                        {/* ....xu ly huy lich hen.... */}
                        <div className="flex flex-col gap-2 justify-end">
                            {!item.cancel && (
                                <button onClick={() => handlePayment(item._id)} className="text-sm text-stone-500 border rounded-full text-center sm:min-w-48 py-2 hover:bg-primary hover:text-white transition-all duration-300">Thanh toán trực tuyến</button>
                            )}

                            {!item.cancel && (
                                <button className="text-sm text-stone-500 border rounded-full text-center sm:min-w-48 py-2 hover:bg-red-500 hover:text-white transition-all duration-300"
                                    onClick={() => { if (window.confirm("Bạn có chắc chắn muốn hủy lịch hẹn này không?")) { cancelAppointment(item._id); } }}>
                                    Hủy lịch hẹn
                                </button>
                            )}

                            {item.cancel && (
                                <div className="border border-red-500 rounded-full py-2 px-4 text-red-500 text-sm sm:min-w-48 text-center">
                                    Lịch hẹn đã bị hủy
                                </div>
                            )}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyAppointment