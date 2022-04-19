const APIKEY = '96fa71b968f3c42e1056cee681997991'

const requsts = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOrginals: `/discover/all/week?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movies/top-rated/week?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/all/week?api_key=${APIKEY}&with_geners=28`,
    fetchComedyMovies: `/discover/all/week?api_key=${APIKEY}&with_geners=35`,
    fetchHorrorMovies: `/discover/all/week?api_key=${APIKEY}&with_geners=27`,
    fetchRomanceMovies: `/discover/all/week?api_key=${APIKEY}&with_geners=10749`,
    fetchDocumentaries: `/discover/all/week?api_key=${APIKEY}&with_geners=99`,
}

export default requsts;