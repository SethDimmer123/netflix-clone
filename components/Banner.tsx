import Image from "next/image"
import { useEffect,useState } from "react"
import { baseUrl } from "../constants/movie"
import { Movie } from "../typing"

interface Props {
  netflixOriginals: Movie[]
}
// from index.tsx i can now bulid my banner component now.
function Banner({netflixOriginals}:Props) {
  const [movie,setMovie] = useState<Movie | null>(null)// movie or null

  useEffect(() => {// what this will do is gnerate a different index of a movie
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
        // i need the base url i cannot just access 
        // the backdrop_path or the poster_path tmdb gives me the baseUrl(constants folder)
        // since i have the url in a folder i can import it and not have to repeat myself
        // everytime i want to use it.

export default Banner


// i want to get a random movie everytime i 
// refresh the page i get it by using a useEffect

