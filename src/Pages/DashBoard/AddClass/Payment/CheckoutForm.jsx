import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = ({ price , class_id}) => {
    const stripe = useStripe()
    const elements = useElements()
    const { user } = useAuth()
    const [cardError, setCardError] = useState("")
    const [clientSecret, setClientSecret] = useState("")
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://summer-camp-server-steel.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price })
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log('error', error);
            setCardError(error.message)
        }
        else {
            setCardError("")
            console.log('paymentMethod', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || "Anonymous User",
                        email: user?.email || "Unknown Email",
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError)
        }
        console.log(paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment =
            {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: 1,
                class_id
            }

            fetch("https://summer-camp-server-steel.vercel.app/payments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify( payment )
            })
            .then(res => res.json())
            .then(data =>
                {
                    console.log(data)
                    if(data.result.insertedId && data.deleteResult.deletedCount > 0  && data.updateResult.modifiedCount>0)
                    {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment Successful',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-info mt-5 px-5" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>

                {cardError && <p className="text-red-500 m-2">{cardError}</p>}
                {transactionId && <p className="text-green-400 m-2">Transaction completed with TransactionId: {transactionId}</p>}
            </form>


        </>
    );
};

export default CheckoutForm;