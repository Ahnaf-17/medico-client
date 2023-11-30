import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckOut = () => {
    const stripe = useStripe();
  const elements = useElements();


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
        }
        else {
            console.log('payment method', paymentMethod)
        }
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
      <button type="submit" className="btn btn-sm w-24 bg-cyan-800 text-white mt-2" disabled={!stripe}>
        Pay
      </button>
            </form>
        </div>
    );
};

export default CheckOut;