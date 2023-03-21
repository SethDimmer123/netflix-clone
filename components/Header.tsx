import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";

function Header() {
  return <header>
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

    <div>
      <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline"/>
      {/* hover over the sm to see the breakpoint and display inline height and width-6 */}
    </div>
  </header>
}

export default Header
