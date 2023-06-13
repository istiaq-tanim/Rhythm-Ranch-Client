import Container from "../../../Shared/Container";
import { useEffect, useState } from "react";
import InstructorSectionCard from "./InstructorSectionCard";

const InstructorSection = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/instructor/instructor")
        .then(res => res.json())
        .then(data => setInstructors(data))
    },[])
    return (
        <Container>
            <h3 className="text-3xl text-center font-primary font-bold">Instructor Section</h3>

            <div className="grid grid-cols-6 gap-5 my-10">
                {
                    instructors.slice(0,6).map(instructor => <InstructorSectionCard key={instructor._id} instructor={instructor}></InstructorSectionCard> )
                }
            </div>
        </Container>
    );
};

export default InstructorSection;