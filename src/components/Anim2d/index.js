import React,{lazy, Suspense, useState} from 'react'
import Navbar from '../Navbar'
import ScrollToTop from '../ScrollToTop'
import { Data2d } from '../pre-production/Data'
import Sidebar from '../Sidebar'
import { rowTwo } from '../InfoSection/Data'
import Preloader from "../Preloader/Preloader"

const Footer = lazy(() => import('../Footer/Index'));
const InfoSection = lazy(() => import('../InfoSection'));
const Row = lazy(() => import('../Row/Row'));

const renderLoader = () => <Preloader />;

function Anim2d() {

    const [isOpen, setIsOpen] = useState(false);
        
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const Movies2d = [
        {
            url : "https://drive.google.com/file/d/1G6WjJfw4gGxk83Oi2OetxtI-7RW68xAa/preview",
        },
        {
            url : "https://drive.google.com/file/d/1l92IHq-COsKvFt0jKIhSx6WfJmwJ3Mur/preview",
        },
        {
            url : "https://drive.google.com/file/d/1jGZBJg83UJYwAofmPtJjGINTQ3_gGjKD/preview",
        },
        {
            url : "https://drive.google.com/file/d/1pDeoKWdkMARO24tywgHKovclnqRUzNeG/preview",
        },
        {
            url : "https://drive.google.com/file/d/1EpYxwMXMTPXMkL2cBmM8v__ep7fGVvs4/preview",
        },
        {
            url : "https://drive.google.com/file/d/1aq8JzwfiC4o7rLHG9EDRzcl-PbIfcVUT/preview",
        },
        {
            url : "https://drive.google.com/file/d/1Ph9qR8INkhtme6LAPdJO1nRpMceO7j6o/preview",
        },
        {
            url : "https://drive.google.com/file/d/1cAFpdVjopxYEYTp6VScQGxKXhHoG2RXH/preview",
        },
        {
            url : "https://drive.google.com/file/d/1GD1ApPpAME8TfhkTSoitQutOm71jiDtX/preview",
        },
        {
            url : "https://drive.google.com/file/d/1CSli45NRCTUT4w5iJ9kemB5i4vvDeA7A/preview",
        },
    
    ]

    
    

    return (
        <div id="services">
           <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} about="/#about" services="/#services" portfolio="/#portfolio" contact="/#contact"/>
            <Navbar toggle={toggle} home="/" about="/#about" services="/#services" portfolio="/#portfolio" contact="/#contact" /> 
            <Suspense fallback={renderLoader()}>
            <InfoSection {...rowTwo}/>
            <Row Movies={Movies2d} {...Data2d}/>
            <Footer />
            </Suspense>


        </div>
    )
}

export default Anim2d
