import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageClassesRow = ({ item , refetch}) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const { _id,class_name, image, instructor_name, email, price, status, available_set } = item

    const handleApprove = (id) =>
    {
        setIsButtonDisabled(true)
        fetch(`http://localhost:5000/courses/${id}`,{
            method: "PATCH"
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                refetch()
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "Class is Approved",
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        })
    }

    const handleDeny = (id) =>
    {
        setIsButtonDisabled(true)
        fetch(`http://localhost:5000/courses/deny/${id}`,{
            method: "PATCH"
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                refetch()
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "Class is Denied",
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        })
    }
    return (
        
            <tr className="text-center">

                <th>{class_name}</th>
                <th> <div className="mask ">
                    <img src={image} className="object-fill w-12 h-12 mx-auto" alt="Avatar Tailwind CSS Component" />
                </div></th>
                <th>{instructor_name}</th>
                <th>{email}</th>
                <th>{available_set}</th>
                <th>${price}</th>
                <th>{status}</th>
                <th><button disabled={isButtonDisabled} onClick={() => handleApprove(_id)} className="btn btn-xs bg-sky-300">Approve</button></th>
                <th><button disabled={isButtonDisabled} onClick={() => handleDeny(_id)}  className="btn btn-xs bg-red-300">Deny</button></th>
                <th ><Link to={`/dashboard/feedback/${_id}`}><button className="btn btn-md text-xs bg-green-300">Send FeedBack</button></Link></th>
            </tr>
        
    );
};

export default ManageClassesRow;