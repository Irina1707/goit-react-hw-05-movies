import React, { useState, useEffect } from "react";
import { Link, useLocation, useRouteMatch } from "react-router-dom"

export default function MoviesList({ movies, title }) {
    const location = useLocation();

    return (
        <>
            <h2>{title}</h2>
            <ul>
            {movies &&  movies.map((movie) => (
                <li key={movie.id} className="">
                    <Link to={{
                        pathname: `/movies/${movie.id}`,
                        state: {from: location},
                    }}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} width='100'/>
                        {movie.title}  
                    </Link>        
                </li>
                ))
                    }
            </ul>
        </>
    
    )
}