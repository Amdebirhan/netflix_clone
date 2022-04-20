import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './request'
import './Banner.css'

function Banner() {
    const [movie, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOrginals);
            setMovies(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;

        }
        fetchData()
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str; //what this do is it will cut the string after n caractor if its too long and add ...
    }

    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner__contents">
                <h1 className='banner__title' >{movie?.title || movie?.name || movie?.orginal_name}</h1>
                <div className="banner__butons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner__fadeBottom" />
        </header>
    )
}

export default Banner