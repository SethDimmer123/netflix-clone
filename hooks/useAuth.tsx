import {
    // functions from firebase
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,
  } from 'firebase/auth'
  
  import { useRouter } from 'next/router'
  import { createContext, useContext, useEffect, useMemo, useState } from 'react'
  import { auth } from '../firebase'

  interface IAuth {//type is IAuth
    user: User | null
    signUp: (email: string, password: string) => Promise<void>
    // signup and signout accepts email and password
    signIn: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    error: string | null
    loading: boolean
  }
// creating context to wrap whole application within the _app.tsx file
  const AuthContext = createContext<IAuth>({//Default value 
    // by default
    user:null,
    signUp: async () => {},// asynchronus function returns back an object
    signIn: async () => {},
    logout: async () => {},
    error:null, 
    loading:false,
  })
//   creating context after AuthProviderProps

  interface AuthProviderProps{
    children:React.ReactNode //React child type    //whats the type for children in typescript.
    //React.ReactNode is the type for the children(signUp,signIn,logout 
    // functions) for AuthProvider/
  }

  
// const function useAuth       AuthProvider accepts children
export const AuthProvider =({children}: AuthProviderProps) => {// type is AuthProviderProps
    const[loading,setLoading] = useState(false)
    const [user,setUser]= useState<User | null>(null)// setting my user
                                //User gives me firebase account
                                // or null by default it is null
    const [error,setError] = useState(null) 
    const [initialLoading, setInitialLoading] = useState(true)
    // intialLoading blocks the ui
    const router = useRouter() //using router

    // using a useEffect to persist whe user is logged in and i refresh  it will take
    // me back to the log in that is why i need the useEffect
    useEffect(
        () =>
          onAuthStateChanged(auth, (user) => {// accepts the auth instance and gives back the user 
            // if there is a user is logged in  then i set the user to user and log the user in
            if (user) {
              // Logged in...
              setUser(user)
              setLoading(false)
            } else {// otherwise if there is no user i set the user to null and set the Loading to be true and route to the login page.
              // Not logged in...
              setUser(null)
              setLoading(true)
              router.push('/login')
            }
    
            setInitialLoading(false)
          }),
        [auth]
      )

    // sign Up function
   const signUp = async (email:string,password:string) =>{
    setLoading(true) // set to true because i want to sign up the user

    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        setUser(userCredential.user)
        // if i do not have the user type from firebase on line 40 userCredential.user will not work.
        router.push('/')// pushing user to home page AFTER the user is logged in
        setLoading(false) // I SET IT TO FALSE since the user is logged in
    }
    ).catch((error) => alert(error.message))//catching errors and alerting users
    .finally(()=> setLoading(false))// finally means the setloading will always run either if the promise if fullfilled or rejected
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
        setLoading(true)// im already logged in

        signOut(auth).then(() => {// signOut(auth returns a promise USE .THEN METHOD)
            setUser(null)// signs user out of account
        }).catch((error) => alert(error.message)).finally(() => setLoading(false))
       }



       const memodValue  = useMemo(() => ({// used the useMemo hook to contain all the values 
        // of the AuthContext provider so i can use them
        user,signUp,signIn,loading,logout,error
    }),[user,loading])// usememo only changes when ONE of the dependancies changes (line 82)
   
    return <AuthContext.Provider value={memodValue}> //
        {!initialLoading && children} 
    </AuthContext.Provider>
    // export const AuthProvider
}
// function useAuth

// export default useAuth


// const[user,setUser] = useState()
// <div>useAuth</div>
// instead of returning jsx which is the div above which is what i do with the components

// i just return the variable of my state which in this case is user
// and that is how i create custom hooks


// the Auth Provider is a wrapper and type of my WHOLE APPLICATION

// IN MY APPLICATION ALL of the functions are my children in the application
// and the type they all have is the React.ReactNode type

export default function useAuth() {
    return useContext(AuthContext)
}// to have access to all of the values




















