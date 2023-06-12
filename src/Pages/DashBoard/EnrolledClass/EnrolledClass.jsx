import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import EnrollClassRow from "./EnrollClassRow";

const EnrolledClass = () => {
    const { user } = useAuth()
    const [enroll, setEnroll] = useState([])
    useEffect(() => {

        axios.get(`http://localhost:5000/enroll/${user.email}`)
            .then(res => setEnroll(res.data))

    }, [user.email])


    return (
        <div className="w-4/5 mx-auto">
            <h3 className="text-3xl text-center font-bold font-primary my-10">My Enrolled Classes</h3>
            <div className="overflow-x-auto mt-5 ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Class Image</th>
                            <th>Instructor Name</th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>


                        {
                            enroll.map((item, index) => <EnrollClassRow key={item._id} item={item} index={index}></EnrollClassRow>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default EnrolledClass;