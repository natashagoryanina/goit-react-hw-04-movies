import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import apiService from '../../services/movies-api';

const HomePage = () => {
    const location = useLocation();
    const [trendingMovies, setTrendingMovies] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        apiService
        .fetchTrendingMovies()
        .then(data => setTrendingMovies(data.results))
        .catch(setError);
    }, [])

    return (
        <>
            <h1>Trending today</h1>
            <ul>
                {trendingMovies && trendingMovies.map((movie)=> 
                    <li key={movie.id}>
                        <Link to={{ 
                            pathname: `/movies/${movie.id}`,
                            state: {
                                from: {
                                    location,
                                    label: 'Back to home page',
                                },
                            },
                        }}>
                            {movie.title}
                        </Link>
                    </li>
                )}
            </ul>
        </>
    );
};

export default HomePage;