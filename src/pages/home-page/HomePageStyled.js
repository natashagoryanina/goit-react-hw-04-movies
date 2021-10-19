import styled from 'styled-components';

const HomePageContainer = styled.div `
    .home-page {
        &_heading {
            font-family: 'Nunito', sans-serif;
            font-weight: 700;
            color: #bedd0f;
        }

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

export default HomePageContainer;