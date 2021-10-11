import React, {useState, useEffect} from 'react';
import { Router } from 'react-router';
import apiService from '../../services/movies-api';

const MovieCastPage = ({movieId}) => {
    const [cast, setCast] = useState(null);

    useEffect(() => {
        apiService
        .fetchMovieCredits(movieId)
        .then(data => setCast(data.cast));
    }, [movieId]);


    return (
        <>
            {cast && 
                <ul>
                    {cast.map((star) => 
                        <li key={star.id}>
                            <img src={star.profile_path} alt={star.name} />
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