import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Row from '../components/Row'
import { Movie } from '../typings'
import requests from '../utils/requests'
import Modal from '../components/Modal'

interface Props {
  /*netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[] */
  Test: Movie[]
}

const Home = ({
 /* netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow, */
  Test,
}: Props) => {
  //const { loading } = useAuth()
  const showModal = useRecoilValue(modalState)

  //if (loading) return null

  return (
    <div
      className={`relative h-screen bg-gradient-to-b lg:h-[140vh] ${showModal && '!h-screen overflow-hidden'
        }`}
    >
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
       <Banner netflixOriginals= {Test}/>
        <section className="md:space-y-24">
         {/* <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/* My List Component */}
         {/* <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />*/}
          <div id='test'>
          <Row title="Test" movies={Test} />
          </div>

        </section>
      </main>
      {showModal && <Modal/>}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const [
    /*netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,*/
    Test,
  ] = await Promise.all([
    /*fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),*/
    fetch(requests.fechTest).then((res) => res.json()),
  ])


  return {
    props: {
     /* netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results || null,
      topRated: topRated.results || null,
      actionMovies: actionMovies.results || null,
      comedyMovies: comedyMovies.results || null,
      horrorMovies: horrorMovies.results || null,
      romanceMovies: romanceMovies.results || null,
      documentaries: documentaries.results || null, */
      Test: Test.results
    },
  }
}

