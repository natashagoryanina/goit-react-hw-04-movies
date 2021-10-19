import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import apiService from '../../services/movies-api';
import MovieCastContainer from './MovieCastStyled';

const MovieCastPage = ({movieId}) => {
    const [cast, setCast] = useState(null);
    const [error, setError] = useState(null);
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        apiService
        .fetchMovieCredits(movieId)
        .then(data => setCast(data.cast))
        .catch(setError);
    }, [movieId]);

    return (
        <MovieCastContainer>
            {cast && 
                <ul className='cast-list'>
                    {cast.map((star) => 
                        <li className='cast-list_item' key={star.id}>
                            {star.profile_path && 
                                <>
                                    <img src={`${IMG_URL}${star.profile_path}`} alt={star.name} />
                                    <p className='cast-list_item_text'>{star.name}</p>
                                    <p className='cast-list_item_text'>Character: {star.character}</p>
                                </>
                            }
                        </li>
                    )}
                </ul>
            }
        </MovieCastContainer>
    );
};

MovieCastPage.propTypes = {
    movieId: PropTypes.string,
};

export default MovieCastPage;