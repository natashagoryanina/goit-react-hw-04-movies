import React, {useState, useEffect} from 'react';
import Searchbar from '../../searchbar/Searchbar';
import apiService from '../../../services/movies-api';
import { Link, useLocation } from 'react-router-dom';
import MoviesPageContainer from './MoviesPageStyled';

const MoviesPage = () => {
    const location = useLocation();
    const [movie, setMovie] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (movie) {
            apiService
                .fetchSearchMovie(movie)
                .then(data=> {
                    if (data.results.length) {
                        return setMovies(data.results);
                    }
                    setError(true);
                })
                .catch(error => setError(error))
        }
    }, [movie])
    
    const handleFormSubmit = (movieTag) => {
        setMovie(movieTag);
    };

    return (
        <MoviesPageContainer>
            <Searchbar onSubmit={handleFormSubmit}/>
            {error && <h2 className='error'>Can't find {movie} movie</h2>}
            <ul>
                {movies && movies.map((movie) => 
                    <li key={movie.id} className='movies-page_list'>
                        <Link 
                            className='movies-page_link'
                            to={{ 
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
       </MoviesPageContainer>
    );
};

export default MoviesPage;