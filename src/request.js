const APIKEY = '96fa71b968f3c42e1056cee681997991'

const requsts = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOrginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_geners=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_geners=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_geners=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_geners=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_geners=99`,
}

export default requsts;