import React, {useState, useEffect}from 'react';
import PropTypes from 'prop-types';
import apiService from '../../../services/movies-api';
import MovieReviewContainer from './MovieReviewPageStyled';

const MovieReviewPage = ({movieId}) => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        apiService
        .fetchMovieReviews(movieId)
        .then(data => setReviews(data.results))
        .catch(setError);
    }, [movieId])

    return (
        <MovieReviewContainer>
            {reviews.length ? 
                <ul>
                    {reviews.map((review) => 
                        <li className='review-list_item' key={review.id}>
                            <h3 className='review-author'>{review.author}</h3>
                            <p className='review-list_text'>{review.content}</p>
                        </li>
                    )}
                </ul>
                : <p className='review-list_text'>We don't have any reviews for this movie.</p>
            }
        </MovieReviewContainer>
    );
};

MovieReviewPage.propTypes = {
    movieId: PropTypes.string,
};

export default MovieReviewPage;