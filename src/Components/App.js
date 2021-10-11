import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './header/Header';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage';

const App = () => {
    return (
        <>
            <Header/>
            <Switch>
                <Route path="/" exact >
                    <HomePage/>
                </Route>

                <Route path="/movies" exact>
                    <MoviesPage/>
                </Route>

                <Route path="/movies/:movieId">
                    <MovieDetailsPage/>
                </Route>

                <Route>
                    <HomePage/>
                </Route>
            </Switch>
        </>
    );
};

export default App;