import React,{useState} from 'react'
import Footer from '../Footer/Index'
import InfoSection from '../InfoSection'
import { aboutObjOne, aboutObjTwo } from '../InfoSection/Data'
import Navbar from '../Navbar'
import ScrollToTop from '../ScrollToTop'
import Sidebar from '../Sidebar'

const AboutContent = () => {
        const [isOpen, setIsOpen] = useState(false);
        
        const toggle = () => {
            setIsOpen(!isOpen)
        }

    return (
        <>  
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} about="/#about" services="/#services" portfolio="/#portfolio" contact="/#contact"/>
         <Navbar toggle={toggle} home="/" about="/#about" services="/#services" portfolio="/#portfolio" contact="/#contact" />
            <InfoSection {...aboutObjOne}/>
            <InfoSection {...aboutObjTwo}/>
            <Footer />
        </>
    )
}

export default AboutContent
