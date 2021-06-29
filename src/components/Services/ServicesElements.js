import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const ServicesContainer = styled.div`
    height: 800px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 768px) {
        height: 1400px;
    }

    @media screen and (max-width: 480px) {
        height: 1600px;
    }
`
export const ServicesWrapper = styled.div`
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: auto;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
    
`

export const ServicesCard = styled(LinkR)`
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-decoration: none;
    text-align: center;
    align-items: center;
    border-radius: 10px;
    max-height: 350px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`
export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`
export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color: #fff;

`
export const ServicesP = styled.p`
    font-size: 0.9rem;
    text-align: center;
    color: #fff;
`