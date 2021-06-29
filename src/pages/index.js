import React, { useState,lazy , Suspense } from 'react'
import { homeObjOne } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import Preloader from '../components/Preloader/Preloader'

const Footer = lazy(() => import('../components/Footer/Index'));
const InfoSection = lazy(() => import('../components/InfoSection'));
const HeroSection = lazy(() => import('../components/HeroSection'));
const Form = lazy(() => import('../components/Form/Form'));
const Portfolio = lazy(() => import('../components/Portfolio'));
const Services = lazy(() => import('../components/Services'));



const renderLoader = () => <Preloader />;


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const images = [
        {
            imgsrc: require('../images/portfolio/pp (1).jpg').default,
        },
        {
            imgsrc: require('../images/portfolio/pp (2).jpg').default,
        },
        {
            imgsrc: require('../images/portfolio/pp (3).jpg').default,
        },
        {
            imgsrc: require('../images/portfolio/pp (4).jpg').default,
        },
        {
            imgsrc: require('../images/portfolio/pp (5).jpg').default,
        },
        {
            imgsrc: require('../images/portfolio/pp (6).jpg').default,
        },
        {
            imgsrc: require('../images/portfolio/pp (7).jpg').default,
        },
        {
            imgsrc: require('../images/portfolio/pp (8).jpg').default,
        },
        {
            imgsrc: require('../images/portfolio/pp (9).jpg').default,
        },
        {
            imgsrc: require('../images/portfolio/pp (11).jpg').default,
        },
        {
            imgsrc: require('../images/portfolio/pp (12).jpg').default,
        },
        {
            imgsrc: require('../images/portfolio/pp (13).jpg').default,
        },

        ]
    return (
        <>
        <Sidebar isOpen={isOpen} toggle= {toggle} about="/#about" services="/#services" portfolio="/#portfolio" contact="/#contact"/>
         <Navbar toggle={toggle} home="/" about="/#about" services="/#services" portfolio="/#portfolio" contact="/#contact" />
         <Suspense fallback={renderLoader()}>
         <HeroSection  />
         <InfoSection {...homeObjOne}/> 
         <Services />
         <Portfolio images={images}/> 
         <Form />
         <Footer />
        </Suspense>
        </>
    )
}

export default Home
