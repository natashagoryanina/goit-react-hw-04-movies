import React, {useState, useEffect, lazy, Suspense} from 'react';
import { Route, useHistory, useParams } from 'react-router';
import { NavLink, useRouteMatch, useLocation } from 'react-router-dom';
import Loader from "react-loader-spinner";
import apiService from '../../services/movies-api';

const MovieCastPage = lazy(() => import('./MovieCastPage' /* webpackChunkName: 'cast-page' */));
const MovieReviewPage = lazy(() => import('./MovieReviewPage' /* webpackChunkName: 'review-page' */));

const MovieDetailsPage = () => {
    const location = useLocation();
    const locationFrom = location.state.from;
    const {movieId} = useParams();
    const {url} = useRouteMatch();
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(null);
    const history = useHistory();
    const date = new Date(`${movie.release_date}`);
    const releasedate = date.getFullYear();

    const IMG_URL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
       apiService
       .fetchMovieDetails(movieId)
       .then(setMovie)
       .catch(setError);

    }, [movieId]);

    const onGoBack = () => {
        history.push(location?.state?.from?.location ?? '/');
    };

    return (
            <>
                <button type="button" onClick={onGoBack}>
                    {location?.state?.from?.label ?? 'Go back'}
                </button>
                <div>
                    <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.title}></img>
                    <div>
                        <h1>{movie.title} <span>({releasedate})</span></h1>
                        <p>User score: {(movie.vote_average)*10}%</p>
                        <p>{movie.overview}</p>
                        <ul>
                            {movie.genres?.map(genre => 
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
                <Suspense fallback={<Loader type="ThreeDots"
                                            color="#000000"
                                            height={70}
                                            width={70}
                                            timeout={3000}
                                    />}
                >
                    <Route path="/movies/:movieId/cast">
                            <MovieCastPage movieId={movieId}/>
                    </Route>
                    <Route path="/movies/:movieId/reviews">
                        <MovieReviewPage movieId={movieId}/>
                    </Route>
                </Suspense>
            </>
    );
};

export default MovieDetailsPage;