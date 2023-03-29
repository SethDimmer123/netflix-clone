import Image from "next/image"
import { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typing'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from "@heroicons/react/24/solid"
import { useRecoilState } from "recoil"
import { modalState, movieState } from "../atoms/modalAtom"

interface Props {
  netflixOriginals: Movie[]
}
// from index.tsx i can now bulid my banner component now.
function Banner({netflixOriginals}:Props) {
  const [movie,setMovie] = useState<Movie | null>(null)// movie or null
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  useEffect(() => {// what this will do is gnerate a different index of a movie
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
  )
  },[netflixOriginals])

  console.log(movie)

  return <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end
  lg:pb-12">
    <div className="absolute top-0 left-0 h-[95vh] -z-10 w-screen">
        <Image alt="" src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        layout="fill"
        objectFit="cover"
        />
    </div>
    <h1 className="text-2xl lg:text-7xl md:text-4xl">
      {movie?.title || movie?.name || movie?.original_name}</h1>
      <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
        </p>

        <div className="flex space-x-3">
          <button className="bannerButton bg-white text-black"><FaPlay className="h-4 w-4 text-black md:h-7 md:w-7"/>Play
          </button>
          <button className="bannerButton bg-[gray]/70" onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}>
            More Info<InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
          </button>
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

// line 22 i need to set the parents height and width for image to appear on page

