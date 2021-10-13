import React, {useState, useEffect} from 'react';
import apiService from '../../services/movies-api';

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
        <>
            {cast && 
                <ul>
                    {cast.map((star) => 
                        <li key={star.id}>
                            <img src={`${IMG_URL}${star.profile_path}`} alt={star.name} />
                            <p>{star.name}</p>
                            <p>Character: {star.character}</p>
                        </li>
                    )}
                </ul>
            }
        
        </>
    );
};

export default MovieCastPage;