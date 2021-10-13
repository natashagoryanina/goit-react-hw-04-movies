import styled from 'styled-components';

const MovieCastContainer = styled.div`
    .cast-list {
        display: flex;
        flex-wrap: wrap;

        &_item {
            img {
                width: 150px;
            }

            &_text {
                font-family: 'Nunito', sans-serif;
                font-size: 16px;
                width: 150px;
                color: #c2c0c0;
            }
        }
    }
`;

export default MovieCastContainer;