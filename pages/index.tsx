import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from "../components/Banner"
import requests from '../utils/requests'

const Home = ({netflixOriginals}) => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10
    to-[#010511] lg:h-[140vh]">
      {/* the outer most div is relative to the position fixed i gave the header in globals.css */}
      {/* the gradient bottom from gray 900 */}
      {/* 10 means 0.1 alpha bvalue in rgba */}

      {/* from gray to #010551 large screen height 140vh */}

      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header/>
      <main>
        {/* Banner */}
        <Banner />
        <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
      </main>
      {/* Modal */}
    </div>
  )
}

export default Home

// the way i do server side rendering is i have a function at the bottom or at 
// the top of this page just not in the export home on line 42


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
  ] = await Promise.all([// using on eawait and promise.all to accompany the whole operation
  // instead of haveing to await for all of the fetch requests.
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
