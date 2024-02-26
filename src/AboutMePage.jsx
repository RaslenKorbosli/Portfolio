import styled from 'styled-components';
import img from '../images/pc-desktop.webp';
const AboutMeSection = styled.section`
  align-items: center;
  padding: var(--main-padding-layout);
`;
const AboutMe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100rem;
  margin: 0 auto;
  gap: 4.2rem;
  padding: 4.2rem 0;
`;

const Img = styled.img`
  max-width: 30rem;
  border-radius: 1.4rem;
`;
const AboutMeParagraph = styled.p`
  font-size: 1.8rem;
  color: var(--color-grey-500);
  padding-top: 2.8rem;
  line-height: 1.4;
`;
const H2 = styled.h1`
  font-size: 2.8rem;
`;
function AboutMePage() {
  return (
    <AboutMeSection id="about">
      <AboutMe>
        <Img src={img} alt="a developer desktop" />
        <div>
          <H2>LET ME INTRODUCE MYSELF</H2>
          <AboutMeParagraph>
            I&apos;m Raslen, a web developer from Tunisia with a passion for
            creating modern and engaging websites. I&apos;m currently expanding
            my skills by learning React, and I&apos;m always looking for new
            ways to improve and stay up-to-date in the ever-evolving world of
            web development. My goal is to become a full-stack developer and
            contribute to building innovative and user-friendly web experiences.
          </AboutMeParagraph>{' '}
        </div>
      </AboutMe>
    </AboutMeSection>
  );
}

export default AboutMePage;
