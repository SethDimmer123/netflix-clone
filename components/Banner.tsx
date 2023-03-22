import Image from "next/image"
import { Movie } from "../typing"

interface Props {
  netflixOriginals: Movie[]
}
// from index.tsx i can now bulid my banner component now.
function Banner({netflixOriginals}:Props) {
  return <div>
    {/* <div>
        <Image />
    </div> */}
  </div>
}

export default Banner