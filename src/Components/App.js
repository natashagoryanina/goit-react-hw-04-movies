import React from 'react';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Header = lazy(() => import('./header/Header' /* webpackChunkName: 'header' */));
const HomePage = lazy(() => import('./pages/HomePage' /* webpackChunkName: 'home-page' */));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage' /* webpackChunkName: 'movie-details-page' */));
const MoviesPage = lazy(() => import('./pages/MoviesPage' /* webpackChunkName: 'search-movie-page' */));

const App = () => {
    return (
        <>
            <ToastContainer/>
            <Suspense fallback={<Loader type="ThreeDots"
                                        color="#000000"
                                        height={70}
                                        width={70}
                                        timeout={3000}
                                />}
            >
                <Header/>
                <Switch>
                    <Route path="/" exact> 
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
            </Suspense>
        </>
    );
};

export default App;