
import {  FaTrash, FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const StudentClassRow = ({item,index,refetch}) => {
    const { _id,class_name, image, instructor_name,  price, available_set }=item
    const handleDelete = (id) =>
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
                fetch(`http://localhost:5000/carts/${id}`, {
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
        <tr className="text-center ">
                <th>{index+1}</th> 
                <th>{class_name}</th>
                <th> <div className="mask">
                    <img src={image} className="object-fill w-12 h-12 mx-auto" alt="Avatar Tailwind CSS Component" />
                </div></th>
                <th>{instructor_name}</th>
                <th>{available_set}</th>
                <th>${price}</th>
                <th><button onClick={()=> handleDelete(_id)}><FaTrash className='mx-auto text-lg text-red-500'></FaTrash></button></th>
                <th><Link to={`/dashboard/payment/${_id}`} state={{ price: price }}><button><FaWallet className='text-lg text-green-300 mx-auto'></FaWallet></button></Link></th>
            </tr>
    );
};

export default StudentClassRow;