import styled from 'styled-components';

const MovieDetailsContainer = styled.div `
    img {
        width: 300px;
        margin-right: 40px;
    }

    .go-back-button{
        background:  #a0b90d;
        border: 0;
        border-radius: 12px;
        color: #FFFFFF;
        cursor: pointer;
        display: inline-block;
        font-family: 'Nunito', sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 2.5;
        outline: transparent;
        padding: 0 8px;
        margin: 10px 0;
        text-align: center;
        text-decoration: none;
        transition: box-shadow .2s ease-in-out;
    }

    .go-back-button:not([disabled]):hover {
        box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(255, 255, 255, 0.5), .125rem .125rem 1rem rgba(208, 255, 1, 0.5);
    }

    .movie {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #fff;
        padding-bottom: 20px;

        &_title {
            margin: 0;
            font-family: 'Nunito', sans-serif;
            color: #bedd0f;
        }

        &_text {
            font-family: 'Nunito', sans-serif;
            color: #c2c0c0;
            font-size: 16px;

            &-accent {
                color: #fff;
            }
        }

        &_genres {
            display: flex;
            flex-direction: row;
            color: #c2c0c0;

            &-item {
                margin-left: 7px;
            }
        }
    }

    .movie-info {
        font-family: 'Nunito', sans-serif;
        color: #fff;

        &_list {
            display: flex;
            flex-direction: column;

            &-item {
                margin-bottom: 14px;
            }

            &-link {
                font-family: 'Nunito', sans-serif;
                font-size: 18px;
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
    }


`;

export default MovieDetailsContainer;