import React, {useState, useEffect} from 'react';
import { useParams, useRouteMatch } from 'react-router';
import apiService from '../../services/movies-api';

const SearchMoviesPage = () => {
    const {movieId} = useParams();
    const {url} = useRouteMatch();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
       apiService
        .fetchMovieDetails(movieId)
        .then(setMovie);

    }, [movieId]);

    return (
        <>
        {movie && 
                <div>
                    <img src={movie.poster_path} alt={movie.title}></img>
                    <div>
                        <h1>{movie.title} <span>({movie.release_date})</span></h1>
                        <p>User score: {(movie.vote_average)*10}%</p>
                        <p>{movie.overview}</p>
                        <ul>
                            {movie.genres.map(genre => 
                                <li key={genre.id}>{genre.name}</li>
                                )}
                        </ul>
                    </div>
                </div>
        }
        </>
    );
};

export default SearchMoviesPage;