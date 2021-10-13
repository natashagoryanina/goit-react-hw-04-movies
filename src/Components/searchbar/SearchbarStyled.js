import styled from 'styled-components';

const SearchbarContainer = styled.form`
    .search-form {
        &_input {
            width: 250px;
            border: 0;
            font-family: inherit;
            padding: 0;
            margin-top: 10px;
            height: 48px;
            font-size: 18px;
            font-weight: 500;
            background: none;
            color: #fff;
            outline: none
        }

        &_btn {
            border: 0;
            background: none;
            color: #fff;
            font-family: inherit;
            height: 48px;
            font-size: 18px;
            font-weight: 500;
            cursor: pointer;
        }
    }
`;

export default SearchbarContainer;