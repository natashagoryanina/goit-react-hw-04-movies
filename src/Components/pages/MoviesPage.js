import React, {useState, useEffect} from 'react';
import Searchbar from '../searchbar/Searchbar';
import apiService from '../../services/movies-api';
import { Link, useLocation } from 'react-router-dom';

const MoviesPage = () => {
    const location = useLocation();
    const [movie, setMovie] = useState('');
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (movie) {
            apiService
                .fetchSearchMovie(movie)
                .then(data=> setMovies(data.results))
                .catch(setError)
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
                        <Link to={{ 
                                pathname: `/movies/${movie.id}`,
                                state: {
                                    from: {
                                        location,
                                        label: 'Back to movies search',
                                    },
                                },
                              }}
                        >
                            {movie.title}
                        </Link>
                    </li>
                )}
            </ul>
       </>
    );
};

export default MoviesPage;