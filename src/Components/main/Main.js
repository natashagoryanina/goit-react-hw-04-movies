import React, {useState} from 'react';
import apiService from '../../services/movies-api';

// const initialState = {
//     movies: []
// };

const Main = () => {
    //const [state, setState] = useState(initialState);

    const getMovies = () => {
        apiService
        .fetchTrendingMovies()
    };

    getMovies();

    return (
        <h1>Main</h1>
    );
};

export default Main;