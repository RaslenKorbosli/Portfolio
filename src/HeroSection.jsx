import styled from 'styled-components';
import img from '../images/profilePhoto.webp';
import TechSkills from './ui/TechSkills';
import { useEffect, useRef, useState } from 'react';
import SocialLink from './ui/SocialLink';
const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;

  background-color: var(--color-main-background);
`;
const H1 = styled.h1`
  font-size: 5.2rem;
  line-height: 1.2;
  padding-bottom: 2.4rem;

  @media (max-width: 950px) {
    font-size: 4.6rem;
  }
  @media (max-width: 770px) {
    font-size: 3.2rem;
  }
  @media (max-width: 500px) {
    font-size: 2.8rem;
  }
`;
const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 48%;
  transition: 0.6s ease-in-out;
  grid-row: -2 / span 2;
  grid-column: 2/-1;
  align-self: flex-start;

  transform: ${(props) =>
    props.isElementVisible ? 'translateX(0)' : 'translateX(10%)'};
  @media (max-width: 950px) {
    grid-row: 1/2;
    grid-column: 1/-1;
    max-width: 80%;
  }
`;
const Content = styled.div`
  display: grid;
  column-gap: 2rem;
  grid-template-columns: 1fr 35rem;
  height: 50rem;
  align-items: center;
  max-width: 100rem;
  padding: 0 4.8rem;
  margin: 0 auto;
  transition: 0.6s ease-in;
  opacity: ${(props) => (props.isElementVisible ? 1 : 0)};
  @media (max-width: 950px) {
    padding-top: 4.6rem;
    grid-template-columns: 1fr;

    height: 80vh;

    justify-items: center;
    align-items: center;
    text-align: center;
    padding: 0 3.6rem;
  }
  /* align-content: center; */
`;
const HeroText = styled.div`
  max-width: 80%;
  font-size: 1.8rem;
  transition: 0.6s ease-in-out;
  transform: ${(props) =>
    props.isElementVisible ? 'translateX(0)' : 'translateX(-20%)'};
  @media (max-width: 950px) {
    align-self: self-start;
  }
`;

function HeroSection() {
  const myRef = useRef();
  const [isElementVisible, setIsElementVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      entry.isIntersecting && setIsElementVisible(true);
    });
    observer.observe(myRef.current);
  }, [isElementVisible]);
  return (
    <Container id="home" ref={myRef}>
      <Content isElementVisible={isElementVisible}>
        <HeroText isElementVisible={isElementVisible}>
          <H1>Front End React Developer</H1>{' '}
          <p>
            Hi, Im Raslen Korbosli, 19 Years Old From Tunisia ,A passionate
            Front-end React Developer
          </p>
          <SocialLink color={'#147efb'} />
        </HeroText>

        <Img src={img} alt="" isElementVisible={isElementVisible} />
        <TechSkills isElementVisible={isElementVisible} />
      </Content>
    </Container>
  );
}

export default HeroSection;
