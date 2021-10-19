import HomePage from '../pages/home-page/HomePage';
import MoviesPage from '../pages/movies-page/MoviesPage';

export const mainRoutes = [
    {
        name: 'Home',
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        name: 'Movies',
        path: '/movies',
        component: MoviesPage,
        exact: false
    },
];