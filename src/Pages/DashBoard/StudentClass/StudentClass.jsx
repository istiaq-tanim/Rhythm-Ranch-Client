import useCarts from "../../../hooks/useCarts";
import StudentClassRow from "./StudentClassrow";



const StudentClass = () => {
    const [cart, refetch] = useCarts()
    return (
        <div className="w-[90%] mx-auto">
            <h3 className="text-center font-bold text-3xl">All Selected Classes</h3>
            <div className="overflow-x-auto mt-5 ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Class Image</th>
                            <th>Instructor Name</th>
                            <th>Available Seat</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((item,index) => <StudentClassRow refetch={refetch} key={item._id} index={index} item={item}></StudentClassRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )

};

export default StudentClass;