import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import PaymentHistoryRow from "./PaymentHistoryRow";
import axios from "axios";

const PaymentHistory = () => {
    const { user } = useAuth()
    const [payment, setPayment] = useState([])
    const token = localStorage.getItem("access-token")

    useEffect(() => {
        axios.get(`http://localhost:5000/paymentHistory?email=${user?.email}`, { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } })
            .then(res => setPayment(res.data))
    }, [token, user?.email])

    return (
        <div className="w-[90%] mx-auto">
            <h3>Payment History</h3>
            <div className="overflow-x-auto mt-5 ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payment.map((item, index) => <PaymentHistoryRow key={item._id} item={item} index={index}></PaymentHistoryRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;