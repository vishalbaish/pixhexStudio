import React,{useState, lazy, Suspense} from 'react'
import { BannerTwo } from '../InfoSection/Data'
import Navbar from '../Navbar'
import ScrollToTop from '../ScrollToTop'
import Sidebar from '../Sidebar'
import { architectural} from './Data'
import Preloader from "../Preloader/Preloader"


const Footer = lazy(() => import('../Footer/Index'));
const InfoSection = lazy(() => import('../InfoSection'));
const Card = lazy(() => import('./Card'));

const renderLoader = () => <Preloader />;


function Architectural() {

    const [isOpen, setIsOpen] = useState(false);
        
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    const Images = [
        {
            imgsrc: require('../../images/architect/portfolio (1).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (2).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (3).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (4).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (5).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (6).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (7).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (8).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (9).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (10).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (11).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (12).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (13).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (14).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (15).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (16).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (17).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (18).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (19).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (20).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (21).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (22).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (23).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (24).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (25).jpg').default,
        },
        {
            imgsrc: require('../../images/architect/portfolio (26).jpg').default,
        },

    ]

    return (
        <div id="services">
           <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} about="/#about" services="/#services" portfolio="/#portfolio" contact="/#contact"/>
            <Navbar toggle={toggle} home="/" about="/#about" services="/#services" portfolio="/#portfolio" contact="/#contact" /> 
            <Suspense fallback={renderLoader()}>
            <InfoSection {...BannerTwo} />
            <Card {...architectural} images={Images} imageHeading={"ARCHITECTURAL VISUALIZATION"}/>
            <Footer />
            </Suspense>

        </div>
    )
}

export default Architectural
