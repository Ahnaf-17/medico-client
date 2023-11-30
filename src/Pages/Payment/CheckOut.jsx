/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import useAuth from "../../Hooks/useAuth";

const CheckOut = ({campPrice}) => {
    const {user} = useAuth()
    const stripe = useStripe();
  const elements = useElements();
  const axiosPrivate = useAxiosPrivate()
  const [clientSecret, setClientSecret] = useState('')
  const [trxId,setTrxid] = useState('')
  const [error, setError] = useState('');


useEffect(() => {
    if (campPrice > 0) {
        axiosPrivate.post('/create-payment-intent', { price: campPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }
}, [axiosPrivate, campPrice]);



    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if(confirmError){
            console.log('confirm error');
        }
        else{
            console.log('intent',paymentIntent);
            setTrxid(paymentIntent.id)
        }

        // send to database 
        const payment = {
            email: user.email,
            price: campPrice,
            transactionId: paymentIntent.id,
            date: new Date(),
            status: 'pending'
        }
        const res = await axiosPrivate.post('/payments',payment)
        console.log(res,'saved');



    }
    return (
        <div>
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
      <button type="submit" className="btn btn-sm w-24 bg-cyan-800 text-white mt-2" 
      disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-700">{error}</p>
      { trxId &&

        <div>
            <p>Payment Successful</p>
            <p>Transaction Id : {trxId}</p>
        </div>
      }
            </form>
        </div>
    );
};

export default CheckOut;