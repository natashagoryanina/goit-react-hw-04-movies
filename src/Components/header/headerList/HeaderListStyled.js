import styled from 'styled-components';

const HeaderListContainer = styled.nav `
    .header-list{ 
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        &_item {
            &:not(:last-child) {
                margin-right: 15px;
            }
        }

        &_link {
            font-family: 'Nunito', sans-serif;
            font-size: 20px;
            color: #fff;
            outline: none;
            text-decoration: none;

            &-active {
                color: #bedd0f;
            }
            &:hover {
                color: #858585;
            }
        }
    }
`;

export default HeaderListContainer;