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
//     <iframe src="https://drive.google.com/file/d/1vp3HdxybBaBmUvc9FhtRnsO-STt7rADe/preview" width="640" height="480" allow="autoplay"></iframe>

    const Movies3d = [
        {
            url : "https://drive.google.com/file/d/1vp3HdxybBaBmUvc9FhtRnsO-STt7rADe/preview",
        },
        {
            url : "https://drive.google.com/file/d/1D-LqBThaM5OoiONdyoOCKAx9K1ss6Ukn/preview",
        },
        {
            url : "https://drive.google.com/file/d/172mVMX6MQlmn4Z0hIqyRVS2-8s_vgNvF/preview",
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
