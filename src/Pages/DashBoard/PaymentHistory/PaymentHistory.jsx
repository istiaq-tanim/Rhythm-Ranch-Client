import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import PaymentHistoryRow from "./PaymentHistoryRow";

const PaymentHistory = () => {
    const { user } = useAuth()
    const [payment, setPayment] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/paymentHistory?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setPayment(data))
    }, [user.email])

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