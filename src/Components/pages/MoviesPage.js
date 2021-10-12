import React, {useState, useEffect} from 'react';
import {Route, useRouteMatch } from 'react-router';
import Searchbar from '../searchbar/Searchbar';
import apiService from '../../services/movies-api';
import { Link } from 'react-router-dom';

const MoviesPage = () => {
    const [movie, setMovie] = useState('');
    const [movies, setMovies] = useState(null)
    const {url} = useRouteMatch();

    useEffect(() => {
        if (movie) {
            apiService
                .fetchSearchMovie(movie)
                .then(data=> setMovies(data.results));
        }
    }, [movie])
    
    const handleFormSubmit = (movieTag) => {
        setMovie(movieTag);
    };

    return (
        <>
            <Searchbar onSubmit={handleFormSubmit}/>
            <ul>
                {movies && movies.map((movie) => 
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                )}
            </ul>
       </>
    );
};

export default MoviesPage;