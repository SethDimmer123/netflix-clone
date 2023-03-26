import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from "../components/Banner"
import requests from '../utils/requests'
import { Movie } from '../typing'
import Row from '../components/Row'
import useAuth from '../hooks/useAuth'

interface Props {
  netflixOriginals: Movie[]// netflix originals is going to be an array of different movies
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

// the reason i am using TYPESCRIPT is it gives me really good intilisense and is really good
// for production enviorments.

// if i am working on big applications i need the intilisense because i might be working on different
// stuff all the time and prevents me from getting into different sort of error.
// so i am using a string instead of a number i have to use a number and if i am not using 
// typescript i might not even know about that.

// typescript prevents me from using a number instead of a string if i had to use a number.
// (1:06:37-1:07:27)
// next i create my typing.d.ts file

const Home = ({ 
  netflixOriginals,  
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
  // if one of these is not in my type props(line 8) it will give me an error
} :Props) => {
  const {logout,loading} = useAuth()
  // const showModal = useRecoilValue()
  // const [showModal,setShowModal] = useState(false) same exact thiing as const showModal = useRecoilValue()
  
  if(loading) return (
    null
  )
  // console.log(netflixOriginals)
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10
    to-[#010511] lg:h-[140vh]">
      {/* the outer most div is relative to the position fixed i gave the header in globals.css */}
      {/* the gradient bottom from gray 900 */}
      {/* 10 means 0.1 alpha bvalue in rgba */}

      {/* when i add a custom gradient to tailwind config file i can delete the from gray to #010511 */}

      {/* from gray to #010551 large screen height 140vh */}

      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header/>
      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        {/* Banner */}
        <Banner netflixOriginals={netflixOriginals}/>
        {/* i am sending the netflix originals to my banner component */}
        <section className='md:space-y-24'>
          {/* Row */}
          {/* the reason i have an error on the title attribute is becuase
           i dont have types in my row component  */}
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/* My List component */}
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {/* Modal */}
    </div>
  )
}


export default Home

// the way i do server side rendering is i have a function at the bottom or at 
// the top of this page just not in the export home on line 87

// i can only do the server side rendering on pages not components

// so i send the netflix orginals to my component

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([// using on an await and promise.all to accompany the whole operation
  // instead of having to await for all of the fetch requests.
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
    // control + space imported my requests
  ])
  return{
    props: {
      netflixOriginals: netflixOriginals.results,
       //i return the results because the i will have an id and results 2 different objects.
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  }// in next.js i have to return something called props i can actually access it 
  // on top of the application NextPage
}
// to test it put netflixOriginals in the () on line 8 and use typescript






