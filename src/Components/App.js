import React from 'react';
import { Route, Switch } from 'react-router';
import Header from './header/Header';
import Main from './main/Main';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';


const App = () => {
    return (
        <>
            <Header/>
            <Switch>
                <Route path="/" exact >
                    <HomePage/>
                </Route>

                <Route path="/movies">
                    <MoviesPage/>
                </Route>

                <Route>
                    <HomePage/>
                </Route>
            </Switch>
            <Main/>
        </>
    );
};

export default App;