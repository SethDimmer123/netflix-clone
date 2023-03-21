function Header() {
  return <header>
    <div className="flex items-center space-x-2 md">{/**phone stylings (min-width) */}
    <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
    </div>
  </header>
}

export default Header
