import HomePage from '../Components/pages/HomePage';
import MoviesPage from '../Components/pages/MoviesPage';

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