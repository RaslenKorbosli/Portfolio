import styled from 'styled-components';

import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
const AboutMeSection = styled.div`
  align-items: center;
  padding: var(--main-padding-layout);
`;
const AboutMe = styled.div`
  display: grid;
  grid-template-columns: 35rem 1fr;
  transition: 0.6s;
  max-width: 100rem;
  margin: 0 auto;
  column-gap: 4.2rem;
  padding: 4.2rem 0;
  @media (max-width: 880px) {
    grid-template-columns: 25rem 1fr;
  }
  @media (max-width: 770px) {
    grid-template-rows: 15rem 1fr;
    grid-template-columns: 1fr;
    column-gap: normal;
    padding: 0;
  }
`;

const Img = styled.img`
  max-width: 100%;
  border-radius: 1.4rem;
  grid-row: 1/-3;
  transition: 0.6s ease-in-out;

  @media (max-width: 950px) {
    max-width: 80%;
  }
  @media (max-width: 770px) {
    grid-column: 1/-1;
    max-width: 70%;
    grid-row: 2/3;
    justify-self: center;
  }
`;
const AboutMeParagraph = styled.p`
  font-size: 1.8rem;
  color: var(--color-grey-500);
  padding-top: 2.8rem;
  line-height: 1.4;
  grid-column: -2 /-1;
  transition: transform 0.6s ease-in-out;

  @media (max-width: 950px) {
    font-size: 1.6rem;
  }
  @media (max-width: 770px) {
    grid-column: 1/-1;
    text-align: center;
    font-size: 1.8rem;
    /* padding-top: 0; */
  }
`;
const H2 = styled.h1`
  font-size: 3.2rem;
  align-self: self-end;
  margin-bottom: 2.6rem;
  transition: transform 0.6s ease-in-out;

  @media (max-width: 770px) {
    grid-column: 1/-1;
    text-align: center;
    align-self: self-start;
    /* margin-top: 2.4rem; */
    font-size: 2.4rem;
  }
`;
function AboutMePage() {
  const myRef = useRef();
  const isElementVisible = useIntersectionObserver(myRef, 0.1);
  const darkModeToggle = useSelector((store) => store.darkMode.darkMode);
  return (
    <section className={darkModeToggle ? 'dark' : ''}>
      <AboutMeSection
        id="about"
        ref={myRef}
        className="dark:bg-zinc-900 transition-all "
      >
        <AboutMe>
          <Img
            src="/pc-desktop.webp"
            alt="a developer desktop"
            style={{
              transform: isElementVisible
                ? 'translateX(0%)'
                : 'translateX(-30%)',
            }}
          />
          <H2
            style={{
              transform: isElementVisible
                ? 'translateY(0%)'
                : 'translateY(-100%)',
            }}
            className="dark:text-neutral-200"
          >
            LET ME INTRODUCE MYSELF
          </H2>
          <AboutMeParagraph
            style={{
              transform: isElementVisible
                ? 'translateY(0%)'
                : 'translateY(10%)',
            }}
            className="dark:text-neutral-300"
          >
            I&apos;m Raslen, a web developer from Tunisia with a passion for
            creating modern and engaging websites. I&apos;m currently expanding
            my skills by learning React, and I&apos;m always looking for new
            ways to improve and stay up-to-date in the ever-evolving world of
            web development. My goal is to become a full-stack developer and
            contribute to building innovative and user-friendly web experiences.
          </AboutMeParagraph>{' '}
        </AboutMe>
      </AboutMeSection>
    </section>
  );
}

export default AboutMePage;
