

const PaymentHistoryRow = ({ item, index }) => {
    const { transactionId, price, date, email } = item

    const dateObj = new Date(date);

    const year = dateObj.getFullYear();
    console.log(dateObj)
    const month = dateObj.getMonth() + 1; // 
    const day = dateObj.getDate();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const seconds = dateObj.getSeconds();
    return (
        <tr className="text-center ">
            <th>{index + 1}</th>
            <th>{email}</th>
            <th>${price}</th>
            <th>{transactionId}</th>
            <th>{day}-{month}-{year}-{hours}-{minutes}-{seconds}</th>

        </tr>
    );
};

export default PaymentHistoryRow;