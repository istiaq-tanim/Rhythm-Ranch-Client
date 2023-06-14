import Container from "../../../Shared/Container";
import { useEffect, useState } from "react";
import InstructorSectionCard from "./InstructorSectionCard";
import { Bounce } from "react-awesome-reveal";

const InstructorSection = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch("https://summer-camp-server-steel.vercel.app/instructor/instructor")
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <Container>
            <h3 className="text-3xl text-center font-primary font-bold">Instructor Section</h3>
            <Bounce>
                <div className="lg:grid grid-cols-6 gap-5 my-10">
                    {
                        instructors.slice(0, 6).map(instructor => <InstructorSectionCard key={instructor._id} instructor={instructor}></InstructorSectionCard>)
                    }
                </div>
            </Bounce>

        </Container>
    );
};

export default InstructorSection;