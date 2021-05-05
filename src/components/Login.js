import React from 'react'
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="images/cta-logo-one.svg" alt="" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee a with Disney+ subscription. As of 03/06/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src="images/cta-logo-two.png" alt="" />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    // 
    overflow: hidden;
    text-align: center;
    margin-top: 70px;

    &:before {
        background-position: top;
        background-size: cover;
        banckground-repeat: no-repeat;
        background: url("/images/login-background.jpg");
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.8;
        z-index: -1;
    }
`
const CTA = styled.div`
    max-width: 650px;
    width: 90%;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;   
    margin-top: 30px;
    margin-bottom: 10 vw; 
    text-align: center;
    `

const CTALogoOne = styled.img`
    
    `
const SignUp = styled.a`
    cursor: pointer;
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background-color: #0483ee;
    }
`
const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`
const CTALogoTwo = styled.img`
    width: 90%;
`