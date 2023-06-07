const InstructorSectionCard = ({ instructor }) => {
    const { image, name, email } = instructor
    return (
        
            <div className="bg-base-100">
                <img src={image} className="h-36 w-36 mx-auto rounded-full" alt="Shoes" />
                <div className="card-body flex flex-col justify-center ">
                    <h2 className="text-center font-bold font-secondary">{name}</h2>
                    <p className="font-bold">{email}</p>
                </div>
            </div> 
    );
};

export default InstructorSectionCard;