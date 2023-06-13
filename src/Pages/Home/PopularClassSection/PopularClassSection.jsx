import { useEffect, useState } from "react";
import Container from "../../../Shared/Container";
import PopularClasesCard from "./PopularClasesCard";



const PopularClassSection = () => {
    const [classesItems, setClassesItems] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/popularCourses")
            .then(res => res.json())
            .then(data => setClassesItems(data))
    }, [])

    return (
        <Container>
            <h3 className="text-3xl text-center font-primary font-bold">Popular Classes</h3>
            <div className="grid grid-cols-3 gap-10 mt-10">
                {
                    classesItems.map(item => <PopularClasesCard key={item._id} item={item}></PopularClasesCard>)
                }
            </div>
        </Container>
    );
};

export default PopularClassSection;