import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import apiService from '../../../services/movies-api';
import HomePageContainer from './HomePageStyled';

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
        <HomePageContainer>
            <h1 className='home-page_heading'>Trending today</h1>
            <ul>
                {trendingMovies && trendingMovies.map((movie)=> 
                    <li key={movie.id} className='home-page_list'>
                        <Link 
                            className='home-page_link'
                            to={{ 
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
        </HomePageContainer>
    );
};

export default HomePage;