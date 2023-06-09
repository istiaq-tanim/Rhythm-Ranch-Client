import useAuth from "../../../hooks/useAuth";

const AddClass = () => {
    const {user}=useAuth()

     const handleSubmit = event =>
     {
        event.preventDefault();
        const form=event.target;
        const class_name=form.className.value;
        const instructor_name=form.instructorName.value 
        const email=form.instructorEmail.value 
        const price=form.price.value;
        const available_set=form.seat.value;

        console.log(class_name,instructor_name,email,price,available_set)


     }
    return (
        
        <div className="bg-[#F4F3F0] w-[90%] p-10">
            <h2 className="text-3xl font-extrabold text-center">Add a Class</h2>
            <form onSubmit={handleSubmit}>
                
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="className" placeholder="Class Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={user.displayName} type="text" name="instructorName" placeholder="Instructor Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={user.email}  name="instructorEmail" placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Seat</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="seat" placeholder="Available Seat" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                
                <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input required type='file' id='image' name='image' accept='image/*'/>
            </div>
            
                <input type="submit" value="Add Coffee" className="btn btn-block mt-5 btn-primary" />

            </form>
        </div>
    );
};




export default AddClass;