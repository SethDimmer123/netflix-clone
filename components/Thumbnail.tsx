import Image from "next/image"
import React from "react"
import { Movie } from "../typing"



interface Props{// a single movie
  // when using firebase
    // movie:Movie | DocumentData
    movie:Movie
}

function Thumbnail({movie}: Props) {// this way of putting props is called object destructuring
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 
    ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
        <Image
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
            className="rounded-sm object-cover md:rounded"
            layout="fill"  alt={""}     />
    </div>
  )
}

export default Thumbnail