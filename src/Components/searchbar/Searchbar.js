import React, {useState} from 'react';
import { toast } from 'react-toastify';

const Searchbar = ({onSubmit}) => {
    const [searchbar, setSearchbar] = useState('');

    const handleNameChange = (e) => {
        setSearchbar(e.currentTarget.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchbar.trim() === '') {
            toast.error('Enter a movie title, please.');
            return;
        };
        onSubmit(searchbar);
        setSearchbar('');
    };

    return (
        <form className="SearchForm" onSubmit={handleSubmit}>
            <input
                className = "SearchForm-input"
                type = "text"
                autoComplete = "off"
                autoFocus
                placeholder = "Search movies"
                name = "movieTag"
                value = {searchbar}
                onChange={handleNameChange}
            />
            <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
            </button>
        </form>
    );
};

export default Searchbar;