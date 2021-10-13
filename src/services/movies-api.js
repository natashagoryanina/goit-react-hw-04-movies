const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=5197685d1d7e008be78723b4c9a471af';

function fetchTrendingMovies() {
    return fetch(`${BASE_URL}/trending/movie/day${API_KEY}`)
    .then(result => {
            if(result.ok) {
                return result.json()
            };
            return Promise.reject(new Error('Not Found'));
        })
};

function fetchSearchMovie(movie) {
    return fetch(`${BASE_URL}/search/movie${API_KEY}&language=en-US&query=${movie}&page=1&include_adult=false`)
    .then(result => {
            if(result.ok) {
                return result.json()
            };
            return Promise.reject(new Error('Not Found'));
        })
};

function fetchMovieDetails(movieId) {
    return fetch(`${BASE_URL}/movie/${movieId}${API_KEY}&language=en-US`)
    .then(result => {
            if(result.ok) {
                return result.json()
            };
            return Promise.reject(new Error('Not Found'));
        })
};

function fetchMovieCredits(movieId) {
    return fetch(`${BASE_URL}/movie/${movieId}/credits${API_KEY}&language=en-US`)
    .then(result => {
            if(result.ok) {
                return result.json()
            };
            return Promise.reject(new Error('Not Found'));
        })
};

function fetchMovieReviews(movieId) {
    return fetch(`${BASE_URL}/movie/${movieId}/reviews${API_KEY}&language=en-US&page=1`)
    .then(result => {
            if(result.ok) {
                return result.json()
            };
            return Promise.reject(new Error('Not Found'));
        })
};

const api = {
    fetchTrendingMovies,
    fetchSearchMovie,
    fetchMovieDetails,
    fetchMovieCredits,
    fetchMovieReviews
};

export default api;