import { Elements } from "@stripe/react-stripe-js";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
const stripePromise = loadStripe(import.meta.env.VITE_payment_key)
const Payment = () => {
    return (
        <div>
            <SectionHeading heading='pay here'></SectionHeading>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOut></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;