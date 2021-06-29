import React, { useState } from 'react'
import desktopVideo from '../../videos/video.mp4'
import mobileVideo from "../../videos/dragon-phone.mp4"
import {Button} from '../ButtonElement'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import { HeroContainer, VideoImg, HeroBg, VideoBg,HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElement'


const getVideoSrc = width => {
    if (width >= 720) 
    return desktopVideo;
    else
    return mobileVideo
}


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover  = () => {
        setHover(!hover)
    }

    const [isVideoLoaded, SetIsVideoLoaded] = useState(false);

    const onLoadedData = () => {
        SetIsVideoLoaded(true);
    }

    const thumb = require('../../videos/video.png').default;

    const src = getVideoSrc(window.innerWidth);
    
    return (
        <HeroContainer id="main">
            <HeroBg>
                <VideoImg src={thumb} className="video-thumb tiny" alt="thumb" style={{ opacity: isVideoLoaded? 0 : 1 }} />
                <VideoBg onLoadedData={onLoadedData} style={{ opacity: isVideoLoaded? 1 : 0 }} autoPlay playsInline loop muted src={src} height="100%" type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                <Fade top>
                PIXHEX ANIMATION STUDIO    
                </Fade>
                </HeroH1>
                <Zoom>
                <HeroP>
                Creative design studio specialized in crafting unique digital experiences
                </HeroP>
                </Zoom>
                <Zoom>
                <HeroBtnWrapper>
                    <Button to='about'
                    smooth="true"
                    duration={500}
                    
                    exact='true'
                    offset={-80}
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    dark='true' primary='true'
                    style={{ background: "-webkit-linear-gradient(to right, #f12711, #f5af19)"}}>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
                </Zoom>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
