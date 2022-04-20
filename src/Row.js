import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import axios from './axios'
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        //if movies changed run this
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            //https: "https://developers.google.com/youtube/player_parameters",
            autoplay: 1,
        },
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            console.log(movie.title)
            movieTrailer(movie?.title)
                .then(
                    response => {
                        console.log(response)
                        const urlParms = new URLSearchParams(new URL(response).search);
                        setTrailerUrl(urlParms.get('v'))

                    }
                ).catch(err => console.log(err));
        }
    }
    return (
        <div className='row' >
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && " row__posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row