import React from 'react'
import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-4.svg'
import Icon4 from '../../images/svg-12.svg'
import { ServicesContainer, ServicesCard, ServicesWrapper, ServicesIcon, ServicesH1, ServicesH2, ServicesP} from './ServicesElements'
const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                    <ServicesCard to='/pre-production'>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>PRE PRODUCTION</ServicesH2>
                        <ServicesP>In pre-production, a project is in its early stages and the team be working on story and character development, wri...</ServicesP>
                    </ServicesCard>
                    <ServicesCard to='/animation3d'>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>3D    ANIMATION</ServicesH2>
                        <ServicesP>It is the process of generating three-dimensional moving images in a digital environment carried out within 3D software...</ServicesP>
                    </ServicesCard>
                    <ServicesCard to='/animation2d'>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>2D    ANIMATION</ServicesH2>
                        <ServicesP>Two-dimensional or 2D animation is characterized by having its objects and characters created in the two-dimensional space...</ServicesP>
                    </ServicesCard>
                    <ServicesCard to='/architectural'>
                        <ServicesIcon src={Icon4} />
                        <ServicesH2>ARCHITECTURAL VISUALIZATION</ServicesH2>
                        <ServicesP>Architectural visualization will bring your projects to life before you’ve even laid the foundations of your buildin...</ServicesP>
                    </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
