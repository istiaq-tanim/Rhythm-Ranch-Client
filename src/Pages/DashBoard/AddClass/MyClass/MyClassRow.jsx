const MyClassRow = ({item}) => {
    const {class_name,image,instructor_name,available_set,price,status,feedback}=item
    return (
       
        <tr className="text-center">
        <th>{class_name}</th>
        <th> <div className="mask flex justify-center">
            <img src={image} className="w-16 h-12 rounded-xl" alt="Avatar Tailwind CSS Component" />
        </div></th>
        <th>{instructor_name}</th>
        <th>{available_set}</th>
        <th>${price}</th>
        <th>{status}</th>
        <th>{
            status === "pending"  || status === "approved" ? "" : feedback
        
        }</th>
        <th><button className="btn btn-xs bg-sky-300">Update</button></th>
    </tr>
    );
};

export default MyClassRow;