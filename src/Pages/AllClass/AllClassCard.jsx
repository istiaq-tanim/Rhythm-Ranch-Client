import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import { useLocation, useNavigate } from "react-router-dom";

const AllClassCard = ({ item }) => {
    const { image, class_name, instructor_name, available_set, price, _id } = item
    const { user } = useAuth()
    const [users] = useUser()
    const loggedUser = users.find(item => item.email === user?.email)
    const navigate = useNavigate()
    const location = useLocation()

    const handleCart = (item) => {
        console.log(item)
        if (user && user.email) {
            const selectedClass = { class_id: _id, class_name, image, instructor_name, available_set, price, email: user.email }
            fetch("http://localhost:5000/carts", {
                method: "POST",
                headers: { 
                "content-type": "application/json" },
                body: JSON.stringify(selectedClass)

            }).then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added to the Cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })

        }
        else {
            Swal.fire({
                title: 'Please Login to Purchase the Class!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log in Please'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            })
        }
    }
    return (

        <div className={`card card-compact w-96 ${available_set === 0 ? 'bg-red-400' : 'bg-gray-100'} shadow-xl`}>
            <figure><img src={image} className="w-full h-64 object-fill" alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{class_name}</h2>
                <p className="text-lg font-semibold">Instructor Name : {instructor_name}</p>
                <p className="text-lg font-semibold">Available Seat : {available_set}</p>
                <p className="text-lg font-semibold">Price : ${price}</p>
                <div className="card-actions justify-center mt-5">
                    <button onClick={() => handleCart(item)} disabled={loggedUser?.role === "admin" || loggedUser?.role === "instructor" || !available_set} className="btn btn-outline border-t-0 border-x-0 border-b-4 btn-accent">Purchase</button>
                </div>
            </div>
        </div>

    );
};

export default AllClassCard;