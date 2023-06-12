

const EnrollClassRow = ({ item, index }) => {
    const { class_name, image, instructor_name, price } = item
    return (
        <tr className="text-center ">
            <th>{index + 1}</th>
            <th>{class_name}</th>
            <th> <div className="mask">
                <img src={image} className="object-fill w-12 h-12 mx-auto" alt="Avatar Tailwind CSS Component" />
            </div></th>
            <th>{instructor_name}</th>
            <th>${price}</th>

        </tr>
    );
};

export default EnrollClassRow;