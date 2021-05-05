import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOriginal } from '../features/movie/movieSlice';

function Originals() {
    const movies = useSelector(selectOriginal);
    return (
        <Container>
            <h4>Originals</h4>
            <Content>
                {
                    movies && movies.map((movie, key) => (
                        <Wrap key={key}>
                            <Link to={'/detail/' + movie.id}>
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                        </Wrap>
                    ))
                }
            </Content>
        </Container>
    )
}

const Container = styled.div`
    margin-bottom: 50px;
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));

    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    //
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    } 

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.46, 0.94) 0s;

    img {
        width:100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`

export default Originals;