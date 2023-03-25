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

  interface IAuth {
    user: User | null
    signUp: (email: string, password: string) => Promise<void>// signup and signout accepts email and password
    signIn: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    error: string | null
    loading: boolean
  }
// creating context to wrapp whole application within the _app.tsx file
  const AuthContext = createContext<IAuth>({
    // by default
    user:null,
    signUp: async () => {},
    signIn: async () => {},
    logout: async () => {},
    error:null, 
    loading:false
  })
//   creating context after AuthProviderProps

  interface AuthProviderProps{
    children:React.ReactNode //type for the children for Auth context provider
  }

export const AuthProvider =({children}: AuthProviderProps) => {
    const[loading,setLoading] = useState(false)
    const [user,setUser]= useState<User | null>(null)
                                //User gives me firebase account
    const [error,setError] = useState(null) 
    const router = useRouter()

    // sign Up function
   const signUp = async (email:string,password:string) =>{
    setLoading(true)

    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        setUser(userCredential.user)
        router.push('/')
        setLoading(false)
    }
    ).catch((error) => alert(error.message))
    .finally(()=> setLoading(false))
   }

       // sign In function
       const signIn = async (email:string,password:string) =>{
        setLoading(true)
    
        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            setUser(userCredential.user)
            router.push('/')
            setLoading(false)
        }
        ).catch((error) => alert(error.message))
        .finally(()=> setLoading(false))
       }
    //    logout function
       const logout = async () => {
        setLoading(true)

        signOut(auth).then(() => {
            setUser(null)
        }).catch((error) => alert(error.message)).finally(() => setLoading(false))
       }



       const memodValue  = useMemo(() => ({// used the useMemo hook to contain all the values 
        // of the AuthContext provider so i can use them
        user,signUp,signIn,loading,logout,error
    }),[user,loading])// usememo only changes when one of the dependancies changes (line 82)
   
    return <AuthContext.Provider value={memodValue}>{children}</AuthContext.Provider>
    //error occuring becuase have not added Auth context 
    // export const AuthProvider
}
// function useAuth

// export default useAuth


// const[user,setUser] = useState()
// <div>useAuth</div>
// instead of returning jsx which is the div above which is what i do with the components

// i just return the variable of my state which in this case is user
// and that is how i create custom hooks


// the Auth Provider is a wrapper and type my WHOLE APPLICATION

// IN MY APPLICATION ALL of the functions are my children in the application
// and the type they all have is the React.ReactNode type

export default function useAuth() {
    return useContext(AuthContext)
}




















