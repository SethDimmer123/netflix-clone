// custom hook for subscription updates
// when user subscribes or unsubscribes

import { onCurrentUserSubscriptionUpdate, Subscription } from "@stripe/firestore-stripe-payments"
import { User } from "firebase/auth"
import { useEffect, useState } from "react"
import payments from "../lib (LIBRARY FOLDER)/stripe"

function useSubscription(user:User | null) {
    const [subscription,setSubscription] = useState<Subscription | null>(null)

    useEffect(() => {
        if(!user) return

        onCurrentUserSubscriptionUpdate(payments, (snapshot) => {
            setSubscription(snapshot.subscriptions.filter(
            (subscription) => 
            subscription.status === "active" || 
            subscription.status === "trialing"
            )[0]
            )
        })
    },[])

  return subscription
  
}

export default useSubscription