import React from 'react'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { InfoContainer,InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap,ImgWrap, Img, BtnLink} from './InfoElements'

const InfoSection = ({lightBg, id, desktopImg, mobileImg, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, showButton}) => {

    const getImgSrc = width => {
        if (width >= 480) 
        return desktopImg;
        else
        return mobileImg
    }
    
    const src = getImgSrc(window.innerWidth);

    return (
        
    
        <>
          <InfoContainer style={{backgroundImage: `url(${src})`, backgroundAttachment: "fixed", backgroundPosition: "left", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} lightBg={lightBg} id={id}>
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
                      <Column1>
                      <TextWrapper>
                          <Fade left cascade>
                              <div>
                          <TopLine>{topLine}</TopLine>
                          <Heading lightText={lightText}>{headline}</Heading>
                          <Subtitle darkText={darkText}>{description}</Subtitle>
                          </div>
                          </Fade>
                          <Zoom>
                          <BtnWrap>
                              {showButton ? <BtnLink to='/about'
                              smooth="true"
                              duration={500}
                              
                              exact='true'
                              offset={-80}
                              primary={primary ? 1 : 0 }
                              dark={dark ? 1 : 0}
                              dark2={dark2 ? 1 : 0}
                              >{buttonLabel}</BtnLink> : null}
                          </BtnWrap>
                          </Zoom>
                      </TextWrapper>
                      </Column1>
                      <Column2>
                        <Fade right>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                        </Fade>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
              
          </InfoContainer>  
        </>
    )
}

export default InfoSection
