import { useEffect, useState } from "react";
import InstructorCard from "./InsttructorCard";

const Instructors = () => {
    const [instructors,setInstructors]=useState([])
    
    useEffect(()=>{
        fetch("http://localhost:5000/instructor/instructor")
        .then(res => res.json())
        .then(data => setInstructors(data))
    },[])
    return (
        <div className="my-20 w-[90%] mx-auto">
            <h3 className="text-center my-10 font-primary text-3xl font-bold text-gray-800">Our Instructors</h3>
            <div className="grid grid-cols-3 gap-5">
            {
                instructors.map(item => <InstructorCard key={item._id} item={item}></InstructorCard>)
            }
            </div>
        </div>
    );
};

export default Instructors;