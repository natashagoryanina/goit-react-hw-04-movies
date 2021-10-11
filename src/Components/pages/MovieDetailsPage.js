import React, {useState, useEffect} from 'react';
import { Route, useParams } from 'react-router';
import { NavLink, useRouteMatch } from 'react-router-dom';
import apiService from '../../services/movies-api';
import MovieCastPage from './MovieCastPage';
import MovieReviewPage from './MovieReviewPage';

const MovieDetailsPage = () => {
    const {movieId} = useParams();
    const {url} = useRouteMatch();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
       apiService
       .fetchMovieDetails(movieId)
       .then(setMovie);

    }, [movieId]);

    // useEffect(() => {
    //     if(movie) {
    //         const date = new Date(`${movie.release_date}`);
    //         const releasedate = date.getFullYear();
    //         setMovie((prev)=> ({...prev, release_date: releasedate}));
    //     }
    // }, [movie]);


    return (
        <>
        {movie && 
            <>
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
                <h3>Additional information</h3>
                <ul>
                    <li key={movie.id}>
                        <NavLink to={`${url}/cast`}>Cast</NavLink>
                    </li>
                    <li key={movie.id}>
                        <NavLink to={`${url}/reviews`}>Reviews</NavLink>
                    </li>
                </ul>
                <Route path="/movies/:movieId/cast">
                        <MovieCastPage movieId={movieId}/>
                </Route>
                <Route path="/movies/:movieId/reviews">
                       <MovieReviewPage movieId={movieId}/>
                </Route>
            </>
        }
        </>

    );
};

export default MovieDetailsPage;