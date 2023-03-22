import Image from "next/image"
import { useEffect,useState } from "react"
import { baseUrl } from "../constants/movie"
import { Movie } from "../typing"

interface Props {
  netflixOriginals: Movie[]
}
// from index.tsx i can now bulid my banner component now.
function Banner({netflixOriginals}:Props) {
  const [movie,setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
  )
  },[netflixOriginals])

  console.log(movie)

  return <div>
    <div className="absolute top-0 left-0">
        <Image alt="" src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        layout="fill"
        />
    </div>
  </div>
}

export default Banner


// i want to get a random movie everytime i 
// refresh the page i get it by using a useEffect

