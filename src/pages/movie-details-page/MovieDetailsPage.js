import React, {useState, useEffect, lazy, Suspense} from 'react';
import { Route, useHistory, useParams } from 'react-router';
import { NavLink, useRouteMatch, useLocation } from 'react-router-dom';
import Loader from "react-loader-spinner";
import apiService from '../../services/movies-api';
import MovieDetailsContainer from './MovieDetailsPageStyled';

const MovieCastPage = lazy(() => import('../../Components/movie-cast/MovieCastPage' /* webpackChunkName: 'cast-page' */));
const MovieReviewPage = lazy(() => import('../../Components/movie-review/MovieReviewPage' /* webpackChunkName: 'review-page' */));

const MovieDetailsPage = () => {
    const location = useLocation();
    const goBack = location.state.from.location.pathname;
    const goBackLabel = location.state.from.label;
    const goBackSearch = location.state.from.location.search;
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
            <MovieDetailsContainer>
                <button className='go-back-button'type="button" onClick={onGoBack}>
                    {location?.state?.from?.label ?? 'Go back'}
                </button>
                <div className='movie'>
                    <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.title}></img>
                    <div>
                        <h2 className='movie_title'>{movie.title} <span>({releasedate})</span></h2>
                        <p className='movie_text'><span className='movie_text-accent'>User score:</span> {(movie.vote_average)*10}%</p>
                        <p className='movie_text'><span className='movie_text-accent'>Overview:</span> {movie.overview}</p>
                        <ul className='movie_genres'>
                            <span className='movie_text-accent'>Genres:</span>
                            {movie.genres?.map(genre => 
                                    <li className='movie_genres-item' 
                                        key={genre.id}>{genre.name}
                                    </li>
                                )}
                        </ul>
                    </div>
                </div>
                <h3 className='movie-info'>Additional information</h3>
                <ul className='movie-info_list'>
                    <li className='movie-info_list-item' key={movie.id}>
                        <NavLink 
                            className='movie-info_list-link'
                            activeClassName='movie-info_list-link-active'
                            to={{
                                pathname:`${url}/cast`,
                                state: {
                                    from: {
                                        location: {pathname: goBack, search: goBackSearch},
                                        label: goBackLabel,
                                    },
                                },
                            }}
                        > Cast 
                        </NavLink>
                    </li>
                    <li key={movie.id}>
                        <NavLink 
                            className='movie-info_list-link'
                            activeClassName='movie-info_list-link-active'
                            to={{
                                pathname:`${url}/reviews`,
                                state: {
                                    from: {
                                        location: {pathname:goBack, search: goBackSearch},
                                        label: goBackLabel,
                                    },
                                },
                            }}
                        > Reviews 
                        </NavLink>
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
            </MovieDetailsContainer>
    );
};

export default MovieDetailsPage;