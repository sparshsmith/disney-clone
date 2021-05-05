import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';
import db from '../firebase';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';

export default function Home() {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    let recommend = [];
    let newDisney = [];
    let original = [];
    let trending = [];

    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                switch (doc.data().type) {
                    case 'recommend':
                        recommend = [...recommend, { id: doc.id, ...doc.data() }]
                        break;
                    case 'new':
                        newDisney = [...newDisney, { id: doc.id, ...doc.data() }]
                        break;
                    case 'original':
                        original = [...original, { id: doc.id, ...doc.data() }]
                        break;
                    case 'trending':
                        trending = [...trending, { id: doc.id, ...doc.data() }]
                        break;
                }
            });
            dispatch(
                setMovies({
                    recommend,
                    newDisney,
                    original,
                    trending
                })
            );
        });
    }, [userName]);

    return (
        <div>
            <Container>
                <ImgSlider />
                <Viewers />
                <Recommends />
                <NewDisney />
                <Originals />
                <Trending />
            </Container>
        </div>
    )
}

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow: hidden;
    margin-top:72px;

    &:before {
         background: url('/images/home-background.png') center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1
    }
`