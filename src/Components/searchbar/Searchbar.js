import React, {useState} from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import SearchbarContainer from './SearchbarStyled';

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
        <SearchbarContainer className="search-form" onSubmit={handleSubmit}>
            <input
                className = "search-form_input"
                type = "text"
                autoComplete = "off"
                autoFocus
                placeholder = "Search movies"
                name = "movieTag"
                value = {searchbar}
                onChange={handleNameChange}
            />
            <button type="submit" className = "search-form_btn">
                <span className = "search-form_btn-label">Search</span>
            </button>
        </SearchbarContainer>
    );
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
};

export default Searchbar;