import React, {useState, useEffect} from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import apiService from '../../services/movies-api';

const HomePage = () => {
    const [trendingMovies, setTrendingMovies] = useState(null);
    const {url} = useRouteMatch();

    useEffect(() => {
        apiService
        .fetchTrendingMovies()
        .then(data => setTrendingMovies(data.results));
    }, [])


    return (
        <>
            <h1>Trending today</h1>
            <ul>
                {trendingMovies && trendingMovies.map((movie)=> 
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                )}
            </ul>
        </>
    );
};

export default HomePage;