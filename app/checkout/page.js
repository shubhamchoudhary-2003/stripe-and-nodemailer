import { loadStripe } from "@stripe/stripe-js";


export async function shubham({ lineItems }) {
  let stripePromise = null;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_URL); 
    }
    return stripePromise;
  };

  const stripe = await getStripe();
  if (stripe) {
    await stripe.redirectToCheckout({
      mode: "payment",
      lineItems,
      successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`, 
      cancelUrl: window.location.origin,
    });
  }
}
