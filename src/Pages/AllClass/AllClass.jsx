import useCourses from "../../hooks/useCourses";
import AllClassCard from "./AllClassCard";

const AllClass = () => {
    const [courses]=useCourses()
    const approvedClasses=courses.filter(item => item.status === "approved")
    return (
        <div className="w-[90%] mx-auto my-10">
            <h3 className="text-3xl font-bold text-purple-600 font-primary text-center underline uppercase decoration-wavy">All Classes</h3>
            <div className="grid grid-cols-3 gap-5 my-10">
                {
                    approvedClasses.map(item => <AllClassCard key={item._id} item={item}></AllClassCard>)
                }
            </div>
        </div>
    );
};

export default AllClass;