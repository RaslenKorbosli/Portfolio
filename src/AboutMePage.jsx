import styled from 'styled-components';
import img from '../images/pc-desktop.webp';
const AboutMeSection = styled.section`
  align-items: center;
  padding: var(--main-padding-layout);
`;
const AboutMe = styled.div`
  display: grid;
  grid-template-columns: 35rem 1fr;

  max-width: 100rem;
  margin: 0 auto;
  column-gap: 4.2rem;
  padding: 4.2rem 0;
  @media (max-width: 880px) {
    grid-template-columns: 25rem 1fr;
  }
  @media (max-width: 770px) {
    grid-template-rows: 15rem 1fr 30rem;
    grid-template-columns: 1fr;
    column-gap: normal;
    padding: 0;
  }
`;

const Img = styled.img`
  max-width: 100%;
  border-radius: 1.4rem;
  grid-row: 1/-3;
  @media (max-width: 950px) {
    max-width: 80%;
  }
  @media (max-width: 770px) {
    grid-column: 1/-1;
    max-width: 50%;
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
  font-size: 2.8rem;
  align-self: self-end;
  margin-bottom: 2.6rem;
  @media (max-width: 770px) {
    grid-column: 1/-1;
    text-align: center;
    align-self: self-start;
    /* margin-top: 2.4rem; */
  }
`;
function AboutMePage() {
  return (
    <AboutMeSection id="about">
      <AboutMe>
        <Img src={img} alt="a developer desktop" />
        <H2>LET ME INTRODUCE MYSELF</H2>
        <AboutMeParagraph>
          I&apos;m Raslen, a web developer from Tunisia with a passion for
          creating modern and engaging websites. I&apos;m currently expanding my
          skills by learning React, and I&apos;m always looking for new ways to
          improve and stay up-to-date in the ever-evolving world of web
          development. My goal is to become a full-stack developer and
          contribute to building innovative and user-friendly web experiences.
        </AboutMeParagraph>{' '}
      </AboutMe>
    </AboutMeSection>
  );
}

export default AboutMePage;
