import { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const FeedBack = () => {
    const [feedback, setFeedback] = useState('');
    const { id } = useParams()
    console.log(id)
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/courses/feedback/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ feedback })
        }
        ).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "Feed Back given",
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
    }
    return (
        <div className="w-1/2 text-center">
            <h3 className=" text-3xl">Admin FeedBack</h3>
            <form onSubmit={ handleSubmit} className="mx-auto mt-5">
                <textarea value={feedback}
                    onChange={(e) => setFeedback(e.target.value)} className="block w-full textarea textarea-info rounded-md shadow-sm" rows="3" placeholder="Leave a message"></textarea>
                <button type="submit" className="btn btn-primary mt-5">Submit</button>
            </form>

        </div>
    );
};

export default FeedBack;