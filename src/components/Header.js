import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../features/user/userSlice';

function Header() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [userName])

    console.log(userName);

    const handleAuth = () => {
        if (!userName) {
            auth.signInWithPopup(provider).
                then(result => {
                    setUser(result.user);
                    history.push('/home');
                }).catch(err => {
                    console.log(err);
                })
        } else if (userName) {
            auth.signOut()
                .then(() => {
                    dispatch(setSignOutState());
                    history.push('/');
                }).catch(err =>
                    alert(err));
        }
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    return (
        <Nav>
            <a href='/home'>
                <Logo src='/images/logo.svg' />
            </a>
            {
                !userName ? (<Login onClick={handleAuth}>Login</Login>)
                    : (<>
                        <NavMenu>
                            <a href='/home'>
                                <img src='images/home-icon.svg' alt='home' />
                                <span>HOME</span>
                            </a>
                            <a>
                                <img src='images/search-icon.svg' alt='search' />
                                <span>SEARCH</span>
                            </a>
                            <a>
                                <img src='images/watchlist-icon.svg' alt='watchLisht' />
                                <span>WATCHLIST</span>
                            </a>
                            <a>
                                <img src='images/original-icon.svg' alt='originals' />
                                <span>ORIGINALS</span>
                            </a>
                            <a>
                                <img src='images/movie-icon.svg' alt='movies' />
                                <span>MOVIES</span>
                            </a>
                            <a>
                                <img src='images/series-icon.svg' alt='series' />
                                <span>SERIES</span>
                            </a>
                        </NavMenu>
                        <SignOut>
                            <UserImg src={userPhoto} alt="userImage" />
                            <DropDown>
                                <span onClick={handleAuth}>Sign Out</span>
                            </DropDown>
                        </SignOut>
                    </>
                    )
            }
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;
const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    // display:flex;
    // flex:1;
    // margin-left: 25px;
    // align-items: center;

    align-items: center;
    display: flex;
    height: 100%;
    flex-flow: row nowrap;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    @media (max-width: 768px) {
        display: none;
    }

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        
        img{
            height: 20px;
            min-width: 20px;
            width: 20px;
            z-index: auto;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            padding: 2px 0px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46,0.45,0.94) 0s;
                transform: scaleX(0);
                border-radius: 0px 0px 4px 4px;
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity:1;
            }
        }
    }
`

const Login = styled.div`
    background: rgb(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all .2s ease 0s;
    
    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`
const UserImg = styled.img`
    height: 100%;
`

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  text-transform: uppercase;
  width: 120px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

