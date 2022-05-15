import React, { useState, useEffect } from "react";
import { fetchPopularMovies } from "../../services/API-servise";
import MoviesList from "../../components/MoviesList/MoviesList";

export default function HomePage() {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        fetchPopularMovies().then(({ data }) => setMovies(data.results))
    }, [])

    useEffect(() => {
        console.log(movies)
    }, [movies])
   
    return (
        <>
            {/*} <h2>Trending today</h2>*/}
                {movies && <MoviesList movies={movies} title="Trending today"/>} 
        </>
    )
}