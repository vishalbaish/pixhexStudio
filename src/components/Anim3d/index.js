import React,{lazy, Suspense, useState} from 'react'
import Navbar from '../Navbar'
import ScrollToTop from '../ScrollToTop'
import { Data3d } from '../pre-production/Data'
import Sidebar from '../Sidebar'
import { rowOne } from '../InfoSection/Data'
import Preloader from "../Preloader/Preloader"


const Footer = lazy(() => import('../Footer/Index'));
const InfoSection = lazy(() => import('../InfoSection'));
const Row = lazy(() => import('../Row/Row'));

const renderLoader = () => <Preloader />;

function Anim3d() {

    const [isOpen, setIsOpen] = useState(false);
        
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const Movies3d = [
        {
            url : "https://drive.google.com/file/d/16MXCfM9-wCIEyLQOgkADKg13OuBWaRHE/preview",
        },
        {
            url : "https://drive.google.com/file/d/1WMIFtIA06Mk8HGna_3H5yW12wFVeyRdJ/preview",
        },
        {
            url : "https://drive.google.com/file/d/1zE53kgfdDK5BL15OHbs075ju7uEAk5_I/preview",
        },
        {
            url : "https://drive.google.com/file/d/15np3H7CWqVBj7nSQRM_vWwThCN0S0QrZ/preview",
        },
        {
            url : "https://drive.google.com/file/d/1BbviQjh2vLJZI6z1fYfblNvnrh1CMvdU/preview",
        },
        {
            url : "https://drive.google.com/file/d/1D0tD3BdDeWlvyeEl0n5u0CLZq-QTuoZd/preview",
        },
        {
            url : "https://drive.google.com/file/d/1D0tD3BdDeWlvyeEl0n5u0CLZq-QTuoZd/preview",
        },
        {
            url : "https://drive.google.com/file/d/1D0tD3BdDeWlvyeEl0n5u0CLZq-QTuoZd/preview",
        },
    
    ]
    

    return (
        <div id="services">
           <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} home="/" about="/#about" services="/#services" portfolio="/#portfolio" contact="/#contact" /> 
            <Suspense fallback={renderLoader()}>
            <InfoSection {...rowOne} />
            <Row Movies={Movies3d} {...Data3d}/>
            <Footer />
            </Suspense>


        </div>
    )
}

export default Anim3d
