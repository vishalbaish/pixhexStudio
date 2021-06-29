import React,{useState, lazy, Suspense} from 'react'
import { BannerOne } from '../InfoSection/Data'
import Navbar from '../Navbar'
import ScrollToTop from '../ScrollToTop'
import Sidebar from '../Sidebar'
import Preloader from "../Preloader/Preloader"
import { Pre_Production } from './Data'



const Footer = lazy(() => import('../Footer/Index'));
const InfoSection = lazy(() => import('../InfoSection'));
const Card = lazy(() => import('./Card'));

const renderLoader = () => <Preloader />;


function PreProduction() {

    const [isOpen, setIsOpen] = useState(false);
        
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    const Images = [
        {
            imgsrc: require('../../images/lighting/PP (1).jpg').default,
        },
        {
            imgsrc: require('../../images/lighting/PP (2).jpg').default,
        },
        {
            imgsrc: require('../../images/lighting/PP (3).jpg').default,
        },
        {
            imgsrc: require('../../images/lighting/PP (4).jpg').default,
        },
        {
            imgsrc: require('../../images/lighting/PP (5).jpg').default,
        },
        {
            imgsrc: require('../../images/lighting/PP (6).jpg').default,
        },
        {
            imgsrc: require('../../images/lighting/PP (7).jpg').default,
        },
        {
            imgsrc: require('../../images/lighting/PP (8).jpg').default,
        },
        {
            imgsrc: require('../../images/lighting/PP (9).jpg').default,
        },
        {
            imgsrc: require('../../images/lighting/PP (10).jpg').default,
        },
        {
            imgsrc: require('../../images/lighting/PP (11).jpg').default,
        },
        {
            imgsrc: require('../../images/lighting/PP (12).jpg').default,
        },
        {
            imgsrc: require('../../images/lighting/PP (13).jpg').default,
        },
        {
            imgsrc: require('../../images/lighting/PP (14).jpg').default,
        },
        {
            imgsrc: require('../../images/lighting/PP (15).jpg').default,
        },
    ]

    return (
        <div id="services">
           <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} about="/#about" services="/#services" portfolio="/#portfolio" contact="/#contact"/>
            <Navbar toggle={toggle} home="/" about="/#about" services="/#services" position="/#portfolio" contact="/#contact" /> 
            <Suspense fallback={renderLoader()}>
            <InfoSection {...BannerOne} />
            <Card {...Pre_Production} images={Images} imageHeading={"PRE PRODUCTION"}/>
            <Footer />
            </Suspense>


        </div>
    )
}

export default PreProduction
