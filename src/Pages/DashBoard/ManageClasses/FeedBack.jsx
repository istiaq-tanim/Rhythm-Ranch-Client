const FeedBack = () => {
    return (
        <div className="w-1/2 text-center">
            <h3 className=" text-3xl">Admin FeedBack</h3>
            <div className="mx-auto mt-5">
                <textarea className="block w-full textarea textarea-info rounded-md shadow-sm" rows="3" placeholder="Leave a message"></textarea>
            </div>
            <button className="btn btn-info mt-5">Submit</button>
        </div>
    );
};

export default FeedBack;