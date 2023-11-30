import { Elements } from "@stripe/react-stripe-js";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { useLocation } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_payment_key)
const Payment = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const campPrice = searchParams.get("campPrice");
    return (
        <div>
            <SectionHeading heading='pay here'></SectionHeading>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOut campPrice={campPrice}></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;