const PopularClasesCard = ({item}) => {
    const {image,class_name,enroll_student,available_set}=item
    return (
        <div>
            <div className="card w-full h-96 mt-5 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 image-full">      
             <figure><img src={image} className="w-full object-cover" alt="Shoes" /></figure>      
               <div className="card-body justify-center  text-center">
                <h2 className="font-bold text-2xl text-cyan-500">{class_name}</h2>
                <h2 className="font-bold text-lg text-cyan-500">Available Seat : {available_set}</h2>
                <h2 className="font-bold text-lg text-cyan-500">Enroll Student : {enroll_student}</h2>
                <div>
                    <button className="btn btn-outline border-t-0 border-x-0 mt-10 border-b-4 btn-info">Read More</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default PopularClasesCard;