import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,
  } from 'firebase/auth'
  
  import { useRouter } from 'next/router'
  import { createContext, useContext, useEffect, useMemo, useState } from 'react'
  import { auth } from '../firebase'

function useAuth() {
    const[loading,setLoading] = useState(false)
    const [user,setUser]= useState<User | null>(null)
                                //User gives me firebase account

   const signUp = async (email:string,password:string) =>{
    setLoading(true)

    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        setUser(userCredential.user)

    })
   }
   
    return 
}

export default useAuth


// const[user,setUser] = useState()
// <div>useAuth</div>
// instead of returning jsx which is the div above which is what i do with the components

// i just return the variable of my state which in this case is user
// and that is how i create custom hooks




















