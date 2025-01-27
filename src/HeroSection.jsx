import styled, { keyframes } from 'styled-components';
import TechSkills from './ui/TechSkills';
import { useRef } from 'react';
import SocialLink from './ui/SocialLink';
import { useSelector } from 'react-redux';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
const Container = styled.div`
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
    font-size: 3.6rem;
  }
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;
const morph = keyframes`
0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}

50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
}
100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}`;
const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: ${morph} 8s ease-in-out infinite, ${float} 8s ease-in infinite;
  border: 3px solid #1f2937;
  ${(props) =>
    props.isDark
      ? `border: 3px solid  #f9f9f9;`
      : `border: 3px solid #1f2937 ;`}
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  transition: 0.6s ease-in-out;
  grid-row: -2 / span 2;
  grid-column: 2/-1;
  align-self: flex-start;
  @media (max-width: 1000px) {
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
  transition: opacity 0.6s ease-in;

  @media (max-width: 1000px) {
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
  transition: transform 0.6s ease-in-out;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    align-self: self-start;
    align-items: center;
  }
`;

function HeroSection() {
  const myRef = useRef();
  const darkModeToggle = useSelector((store) => store.darkMode.darkMode);
  const isElementVisible = useIntersectionObserver(myRef, 0);
  return (
    <section className={darkModeToggle ? 'dark' : ''}>
      <Container
        id="home"
        ref={myRef}
        className=" dark:bg-neutral-900 dark:text-neutral-200 transition-all"
      >
        <Content
          style={{
            opacity: isElementVisible ? '1' : '0',
          }}
        >
          <HeroText
            style={{
              transform: isElementVisible
                ? 'translateX(0)'
                : 'translateX(-20%)',
            }}
          >
            <H1 className="">
              Front End React{' '}
              <span className="text-[#148bfbdb]"> Developer</span>{' '}
            </H1>{' '}
            <p className="dark:text-neutral-300">
              Hi, Im Raslen Korbosli, 20 Years Old From Tunisia ,A passionate
              Front-end React Developer
            </p>
            <SocialLink color={'#147efb'} />
          </HeroText>

          <Img
            isDark={darkModeToggle}
            src="/profilePhoto.webp"
            alt=""
            style={{
              transform: isElementVisible ? 'translateX(0)' : 'translateX(5%)',
            }}
          />
          <TechSkills isElementVisible={isElementVisible} />
        </Content>
      </Container>
    </section>
  );
}

export default HeroSection;
