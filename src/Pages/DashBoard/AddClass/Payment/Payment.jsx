import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);
const Payment = () => {
    const location = useLocation();
    let state=location.state;
    console.log(state)
    let price=parseFloat(state.price.toFixed(2))
    console.log(price)
    return (
        <div className="w-1/2 mx-auto">
            <h3 className="text-center my-10 text-3xl font-bold font-primary">Payment</h3>
            <Elements  stripe={stripePromise}>
                <CheckoutForm price={price} class_id={state.class_id}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;