import React, { useState, useEffect } from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import {animateScroll as scroll} from 'react-scroll'
import Fade from 'react-reveal/Fade';
import {Nav,NavImg, NavbarContainer, NavLogo, NavMenu, MobileIcon, NavItem, NavLinks} from './NavbarElements'

const Navbar = ({ toggle, home, services,about ,portfolio, contact}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)

        return () => {
            window.removeEventListener('scroll', changeNav)
        }
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const src = require('../../images/logo.jpg').default;
 
    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav scrollNav={scrollNav }>
                <NavbarContainer>
                    <NavLogo to={home} onClick={toggleHome}>
                        <Fade top big>
                        <NavImg src={src} />
                        </Fade>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <Fade top big>
                    <NavMenu>
                        <NavItem >
                            <NavLinks to={about}
                            smooth="true"
                            duration={500}
                            spy="true"
                            exact="true"
                            offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={services}
                            smooth="true"
                            duration={500}
                            spy="true"
                            exact="true"
                            offset={-80}
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem >
                            <NavLinks to={portfolio}
                            smooth="true"
                            duration={500}
                            spy="true"
                            exact="true"
                            offset={-80}
                            >Portfolio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={contact}
                            smooth="true"
                            duration={500}
                            spy="true"
                            exact="true"
                            offset={-80}
                            >Contact</NavLinks>
                        </NavItem>
                        {/* <NavBtn>
                        <NavBtnLink to="/abt">Sign In</NavBtnLink>
                    </NavBtn> */}
                    </NavMenu>
                    </Fade>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar
