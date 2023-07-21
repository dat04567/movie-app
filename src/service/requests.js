export const API_KEY = "111a883f8e10884e37b7000c4b003328"
export const BASE_URL =  "https://api.themoviedb.org/3"

// defaut url data
const requests = {
   fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_network=123`,
	fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests
export const MOVIE_URL = `${BASE_URL}/movie/`