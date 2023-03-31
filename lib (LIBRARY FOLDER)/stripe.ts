import {
    createCheckoutSession,
    getStripePayments,
  } from '@stripe/firestore-stripe-payments'
  import { getFunctions, httpsCallable } from '@firebase/functions'
  import app from '../firebase'

  const payments = getStripePayments(app, {//accepts the instance of my app and my options which are from 2 collections from installing the stripe extension
    productsCollection:'plans',
    customersCollection:'customers'
  })//these above allow me to retrieve the payments

  const loadCheckout = async (priceId: string) => {// load checkout function asynchronus function 
    await createCheckoutSession(payments, {//payments option and paarameters
        price:priceId,
        success_url: window.location.origin, //uses actual domain value instead of localhost:3000
        cancel_url: window.location.origin,
    }).then((snapshot) => window.location.assign(snapshot.url))//assigning navigates to the given URL which is INSIDE parentheses.
    //.then because it is a promise
    .catch((error) => console.log(error.message))
  }

//   if all of this above is successful THEN I WANT TO navigate to a stripe payment portal.

const goToBillingPortal = async () => {
  const instance = getFunctions(app, 'us-central1')
  const functionRef = httpsCallable(instance, "ext-firestore-stripe-payments-createPortalLink")

  await functionRef({
    returnUrl: `${window.location.origin}/account`,
  })
    .then(({ data }: any) => window.location.assign(data.url))
    .catch((error) => console.log(error.message))
  }



export {loadCheckout, goToBillingPortal}
export default payments

