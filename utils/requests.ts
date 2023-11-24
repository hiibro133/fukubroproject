const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://' //api.themoviedb.org/3'

const requests = {
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/movie?api_key=f1c79c4db809547cca3c641db65f0b0d&with_networks=213`, //`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=f1c79c4db809547cca3c641db65f0b0d&language=en-US`,//`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=f1c79c4db809547cca3c641db65f0b0d&language=en-US`,//`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=f1c79c4db809547cca3c641db65f0b0d&with_genres=28`,//`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=f1c79c4db809547cca3c641db65f0b0d&with_genres=35`,//`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=f1c79c4db809547cca3c641db65f0b0d&with_genres=27`,//`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=f1c79c4db809547cca3c641db65f0b0d&with_genres=10749`,//`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=f1c79c4db809547cca3c641db65f0b0d&with_networks=99`, //`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
  fechTest: `https://storage.fleek-internal.com/585f34c0-aad6-4917-ad71-d97c3fbc674e-bucket/api-moives3.json`//`https://storage.fleek-internal.com/585f34c0-aad6-4917-ad71-d97c3fbc674e-bucket/api-moives2.json`//`https://storage.fleek-internal.com/585f34c0-aad6-4917-ad71-d97c3fbc674e-bucket/api-moives.json`
}

export default requests


//https://api.themoviedb.org/3/discover/movie?api_key=f1c79c4db809547cca3c641db65f0b0d&with_networks=213