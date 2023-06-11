import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";

const AllClassCard = ({ item }) => {
    const { image, class_name, instructor_name, available_set, price } = item
    const {user}=useAuth()
    const [users]=useUser()
    const loggedUser=users.find(item => item.email === user?.email)
    return (
        
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} className="w-full h-64 object-fill" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{class_name}</h2>
                    <p className="text-lg font-semibold">Instructor Name : {instructor_name}</p>
                    <p className="text-lg font-semibold">Available Seat : {available_set}</p>
                    <p className="text-lg font-semibold">Price : ${price}</p>
                    <div className="card-actions justify-center mt-5">
                    <button disabled={loggedUser?.role === "admin" || loggedUser?.role === "instructor"} className="btn btn-outline border-t-0 border-x-0 border-b-4 btn-accent">Purchase</button>
                    </div>
                </div>
            </div>
        
    );
};

export default AllClassCard;