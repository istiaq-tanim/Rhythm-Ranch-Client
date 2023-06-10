import useCourses from "../../../hooks/useCourses";
import ManageClassesRow from "./ManageClassesRow";

const ManageClasses = () => {
    const [courses,refetch] = useCourses()
    console.log(courses)
    return (
        <div>
            <h3 className="text-center text-3xl">Manage Classes</h3>
            <div className="overflow-x-auto mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>Class Name</th>
                            <th>Class Image</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seat</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            courses.map((item,index) => <ManageClassesRow key={item._id} refetch={refetch} item={item} index={index}></ManageClassesRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;