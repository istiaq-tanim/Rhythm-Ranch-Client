import axios from 'axios';
import useAuth from './../../../../hooks/useAuth';
import { useState } from 'react';
import MyClassRow from './MyClassRow';
const MyClass = () => {
    const { user } = useAuth()
    const [myClass,setMyClass]=useState([])
    axios.get(`http://localhost:5000/instructorClasses?email=${user.email}`)
    .then(res => setMyClass(res.data))
    return (
        <div className='w-full px-5'>
            <h3 className='text-center text-3xl'>My Classes is here</h3>
            <div className="overflow-x-auto mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>Class Name</th>
                            <th>Class Image</th>
                            <th>Instructor Name</th>
                            <th>Available Seat</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>FeedBack</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                           myClass.map(item => <MyClassRow key={item._id} item={item}></MyClassRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClass;