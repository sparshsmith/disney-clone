import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImgSlider() {
    let settings = {
        dots: true,
        mobileFirst: true,
        variableWidth: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <Caraousel {...settings}>
            <Wrap>
                <a>
                    <img src='/images/slider-badging.jpg' />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src='/images/slider-badag.jpg' />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src='/images/slider-scale.jpg' />
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src='/images/slider-scales.jpg' />
                </a>
            </Wrap>
        </Caraousel>
    )
}

const Caraousel = styled(Slider)`
    margin-top: 20px;
    & > button {
        opacity: 0;
        z-index: 1;

        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    .slick-slide {
        @media (max-width: 768px) { 
            float: left;
            height: 100%;
            min-height: 1px;
            
            img{

                max-width: 100vw !important; 
                height: 200px;
                object-fit: cover;
            }
        }
       
     }

`
const Wrap = styled.div`
    cursor: pointer;

    img{
        border: 4px solid transparent;
        height: 100%;
        width: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 250ms;

        &:hover {
            border: 4px solid rgb(249, 249, 249, 0.8);
        }
    }
`