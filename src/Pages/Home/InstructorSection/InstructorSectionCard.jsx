const InstructorSectionCard = ({ instructor }) => {
    const { photo, name, email } = instructor
    return (
        
            <div className="bg-base-100 mt-5">
                <img src={photo} className="h-36 w-36 mx-auto rounded-full" alt="Shoes" />
                <div className="card-body flex flex-col justify-center">
                    <h2 className="text-center font-bold font-secondary">{name}</h2>
                    <p className="font-bold text-center">{email}</p>
                </div>
            </div> 
    );
};

export default InstructorSectionCard;