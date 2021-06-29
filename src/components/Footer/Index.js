import React from 'react'
import { FaInstagram, FaTwitter, FaYoutube,FaFacebook } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, Logo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'

const Footer = () => {

    const src = require('../../images/logo.jpg').default;

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                        <FooterLink to="/">
                        <Logo src={src} onClick={toggleHome}/>
                        </FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>SERVICES
                            </FooterLinkTitle>
                                <FooterLink to='/pre-production'>Pre Production</FooterLink>
                                <FooterLink to='/animation3d'>3D Animation</FooterLink>
                                <FooterLink to='/animation2d'>2D Animation</FooterLink>
                                <FooterLink to='/architectural'>Architectural visualization</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>SOCIAL MEDIA
                            </FooterLinkTitle>
                                <FooterLink hrref='https://instagram.com/pixhexstudio?utm_medium=copy_link'>Instagram</FooterLink>
                                <FooterLink href='https://m.facebook.com/Pixhexstudio/'>Facebook</FooterLink>
                                <FooterLink href='https://youtube.com/channel/UCo7im_qXoJ90x1niHF3pNjA'>Youtube</FooterLink>
                                <FooterLink href='/'>Twitter</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <WebsiteRights>PIXHEX © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='https://m.facebook.com/Pixhexstudio/' target='_blank' aria-label="facebook">
                         <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='https://instagram.com/pixhexstudio?utm_medium=copy_link' target='_blank' aria-label="Instagram">
                            <FaInstagram / >
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='https://youtube.com/channel/UCo7im_qXoJ90x1niHF3pNjA' target='_blank' aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                    </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
