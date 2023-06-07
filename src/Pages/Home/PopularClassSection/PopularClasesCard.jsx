const PopularClasesCard = ({item}) => {
    const {image,class_name}=item
    return (
        <div>
            <div className="card w-full h-96  bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 image-full">      
             <figure><img src={image} className="w-full object-cover" alt="Shoes" /></figure>      
               <div className="card-body justify-center  text-center">
                <h2 className="font-bold text-xl text-cyan-500">{class_name}</h2>
            </div>
            </div>
        </div>
    );
};

export default PopularClasesCard;