import Head from "next/head"
import Link from "next/link"
import useAuth from "../hooks/useAuth"

function Plans() {
    const {logout} = useAuth() //the useAuth hook contains all of my states: signIn,logout,user,loading,signUp,error

  return (
    <div>
        <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {/*opacity 10  */}
    <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
    <img
        src="https://rb.gy/ulxxee"
         alt="Netflix"
        width={150}
        height={90}
        className="cursor-pointer object-contain"
        />
        </Link>
        <button className="text-lg font-medium hover:underline" 
        onClick={logout}
        >
            Sign Out
        </button>
    </header>
  </div>
  )
}

export default Plans
