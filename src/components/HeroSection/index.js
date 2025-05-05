import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpeg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, How are you? </Title>
                        <TextLoop>
                            we are
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle style={{fontSize: "16px"}} dangerouslySetInnerHTML={{ __html: Bio.description.replace(/\n/g, '<br />') }} />
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Img src={HeroImg} alt="hero-image" />
    <Title style={{ marginTop: '10px', textAlign: 'center', fontSize: "26px" }}>Shubham Lahoti</Title>
    <SubTitle style={{ fontSize: "16px", textAlign: 'center' }}>Founder</SubTitle>
  </div>
</HeroRightContainer>

                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}


export default HeroSection