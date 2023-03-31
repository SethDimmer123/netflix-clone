import {BellIcon, MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect,useState } from "react";
import useAuth from "../hooks/useAuth";
import Image from 'next/image'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false) 
  {/**by default the boolean value is false */}
  const {logout} = useAuth()

  // useEffect will only run on a single mount.

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0) {// if window scroll on y-axis is greater than y have it fixed on top
        setIsScrolled(true)
      }
      else{
        setIsScrolled(false)
        
      }
    }
    // what useEffect does is when the ui of the component mounts(loads) 

    window.addEventListener("scroll", handleScroll)

    return() => {
      window.removeEventListener('scroll',handleScroll)
    }
  },[])
  // this useEffect will only run if the header is mounting that is why i have the [] dependency
  // if i took out the squiggly brackets then the useEffect would run EVERYTIME the page renders.

  return <header className={`${isScrolled && "bg-[#141414]"}`}>
    {/* line 33 i have javascript if isScrolled is true then change background color to #141414 */}
    <div className="flex items-center  space-x-2 md:space-x-10">
      {/** space x-10 phone stylings (min-width) md medium breakpoint768px when using tailwind css i need to use min-width*/}
      {/**space x-2 gives me space between logo and list items*/}
    <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          {/* left section */}
          {/* i want my ul to show when it is above 768px */}
          <li className="headerLink">Home</li>
          <li className="headerLink">Tv Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
    </div>

    <div className="flex item-center space-x-4 text-sm font-light">
      <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline"/>
      {/* hover over the sm to see the breakpoint and display inline height and width-6 */}
      <p className="hidden lg:inline">Kids</p>
      {/* large breakoint 1024px hidden by default on phones */}
      <BellIcon className=" h-6 w-6"/>
      <Link href="http:/account">
        {/*  href is a required attribute when using the link component when using typescript*/}
        <img 
        onClick={logout}
        src="https://rb.gy/g1pwyx" alt="" className="cursor-pointer rounded"/>
      </Link>
    </div>
  </header>
}

export default Header

