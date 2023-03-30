import {
    createCheckoutSession,
    getStripePayments,
  } from '@stripe/firestore-stripe-payments'
  import { getFunctions, httpsCallable } from '@firebase/functions'
  import app from '../firebase'

  const payments = getStripePayments(app, {//accepts the instance of my app and my options which are from 2 collections from installing the stripe extension
    productsCollection:'plans',
    customersCollection:'customers'
  })

  const loadCheckout = async (priceId: string) => {
    await createCheckoutSession(payments, {
        price:priceId,
        success_url: window.location.origin, //uses actual domain value instead of localhost:3000
        cancel_url: window.location.origin,
    }).then((snapshot) => window.location.assign(snapshot.url))
  }