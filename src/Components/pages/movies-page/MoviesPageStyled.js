import styled from 'styled-components';

const MoviesPageContainer = styled.div`
    .movies-page {
        &_list {
            display: flex;
            flex-direction: column;
            &:not(last-child) {
                margin-bottom: 8px;
            }
        }

        &_link {
            font-family: 'Nunito', sans-serif;
            font-size: 18px;
            color: #fff;
            outline: none;
            text-decoration: none;

            &:hover {
                color: #858585;
            }

            &:not(last-child) {
                margin-bottom: 8px;
            }
        }
    }
`;

export default MoviesPageContainer;