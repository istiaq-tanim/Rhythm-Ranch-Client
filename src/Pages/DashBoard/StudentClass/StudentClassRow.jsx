
import {  FaTrash, FaWallet } from 'react-icons/fa';
const StudentClassRow = ({item,index,refetch}) => {
    const { _id,class_name, image, instructor_name,  price, available_set }=item
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
                <th className='text-lg text-red-500'><FaTrash className='mx-auto'></FaTrash></th>
                <th className='text-lg text-green-300'><FaWallet className='mx-auto'></FaWallet></th>
            </tr>
    );
};

export default StudentClassRow;