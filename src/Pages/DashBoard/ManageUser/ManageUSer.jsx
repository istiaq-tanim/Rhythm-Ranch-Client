import ManageUserRow from "./ManageUserRow";
import useAuth from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";

const ManageUSer = () => {
    const {user}=useAuth() 
    const [users,refetch]=useUser()
   
    const allUser=users.filter(item => item.email !== user.email)
    console.log(allUser)
    return (
        <div className="w-full">
            <h3 className="text-center text-3xl font-secondary font-bold">Manage All User</h3>
            <h3 className="text-center my-5 text-lg">All Users {users.length}</h3>

            <div className="overflow-x-auto w-[90%] mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action Admin</th>
                            <th>Action Instructor</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                          allUser.map( (user,index) => <ManageUserRow key={user._id} refetch={refetch} user={user} index={index}></ManageUserRow>)
                        }
                       
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUSer;