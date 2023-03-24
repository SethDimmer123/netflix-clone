import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form";

// i have to create interfaces for inputs since it is a type and i need to define it
interface Inputs {
  email:string
  password:string
}

function Login() {//useState hook for logging user in or signing user up
  const [login, setLogin] = useState(false)
  const { register, 
    handleSubmit, 
    // watch, 
    formState: { errors } 
  } = useForm<Inputs>();// use the hook but i am also providing the types
  const onSubmit: SubmitHandler<Inputs> = async (data) => {// this is for when i want to actually log the user in as well as signup a user i need this function
    // console.log(data)
    // the reason i use an asynchronus function is i want it to 
    // be long running task and still be able to respond to other
    //  event while my other task runs
    // instead of having to wait until the other task is finished.
    if(login){
      // await signIn(data.email,data.password)
    }else{
      // await signUp(data.email,data.password)
    }

  };
  // submit handler is the type is form type submit type which will be function


  return <div className="relative flex h-screen w-screen flex col bg-black md:items-center md:justify-center md:bg-transparent">
      {/* really good for seo (head tags) */}
    <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
      src="/netflix-bg.jpg"
      layout="fill"
      className="-z-10 !hidden opacity-60 sm:!inline"
      objectFit="cover" alt={""}/>
      
     <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
      <form onSubmit={handleSubmit(onSubmit)}//invokes onSubmit function AFTER validating my inputs
      className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0
       md:max-w-md md:px-14">
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input 
            type="email" 
            placeholder="Email"
             className="input" 
             {...register("email",{required: true})}
             />             {/*I REGISTER MY INPUT BY invoking the register function */}
             {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label> 
          <label className="inline-block w-full">
          <input type="password" 
          placeholder="Password" 
          className="input"  
          {...register("password",{required: true})}
          />      {/**PASSWORD IS A REQUIRED FIELD */}   
              {errors.password && (
        <p className="p-1 text-[13px] font-light  text-orange-500">
          Your password must contain between 4 and 60 characters.
        </p>
        )}                                       
          </label>                                                             
        </div>

        <button className="w-full rounded bg-[#e50914] py-3 font-semibold" 
        onClick={() => setLogin(true)}>
          Sign In
          </button>

          <div className="text-[gray]">
            New to Netflix?{' '}
            <button type="submit" className="text-white hover:underline"
            onClick={() => setLogin(false)}
            >
              Sign Up now
              </button>
          </div>
      </form>



    </div>
}

export default Login