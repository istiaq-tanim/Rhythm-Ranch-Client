import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2'
const ManageUserRow = ({ user, index, refetch }) => {
    const { _id, email, name, role } = user
    const [isButtonDisabledAdmin, setIsButtonDisabledAdmin] = useState(false);
    const [isButtonDisabledInstructor,setIsButtonDisabledInstructor]=useState(false)
    const handleAdmin = (id, name) => {
        setIsButtonDisabledAdmin(true);
        setIsButtonDisabledInstructor(false)
        fetch(`https://summer-camp-server-steel.vercel.app/users/admin/${id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                  
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${name} is new Admin`,
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })

    }
    const handleInstructor = (id, name) => {
        setIsButtonDisabledInstructor(true);
        setIsButtonDisabledAdmin(false)
        fetch(`https://summer-camp-server-steel.vercel.app/users/instructor/${id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${name} is new Instructor`,
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })

    }

    const handelDelete = (id) =>
    {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-server-steel.vercel.app/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <tr className="text-center">
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{role || "student"}</td>
            <td><button disabled={isButtonDisabledAdmin} onClick={() => handleAdmin(_id, name)} className="btn btn-info">Admin</button></td>
            <td><button disabled={isButtonDisabledInstructor} onClick={() => handleInstructor(_id, name)} className="btn btn-info">Instructor</button></td>
            <td onClick={()=> handelDelete(_id)} className="text-xl text-red-500"><button><FaTrash></FaTrash></button></td>
        </tr>
    );
};

export default ManageUserRow;