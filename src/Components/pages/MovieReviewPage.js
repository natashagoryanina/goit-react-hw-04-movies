import React, {useState, useEffect}from 'react';
import apiService from '../../services/movies-api';

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
        <>
            {reviews.length ? 
                <ul>
                    {reviews.map((review) => 
                        <li key={review.id}>
                            <h3>{review.author}</h3>
                            <p>{review.content}</p>
                        </li>
                    )}
                </ul>
                : <p>We don't have any reviews for this movie.</p>
            }
        </>
    );
};

export default MovieReviewPage;