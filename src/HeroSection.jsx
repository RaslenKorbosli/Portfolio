import styled from 'styled-components';
import img from '../images/profilePhoto.jpg';
import TechSkills from './ui/TechSkills';
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
`;
const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 48%;
`;
const Content = styled.div`
  display: grid;
  column-gap: 2rem;
  grid-template-columns: 2fr minmax(30rem, 1fr);
  height: 50rem;
  align-items: center;
  max-width: 100rem;
  padding: 0 4.8rem;
  margin: 0 auto;
  /* align-content: center; */
`;
const HeroText = styled.div`
  max-width: 80%;
  font-size: 1.8rem;
`;

function HeroSection() {
  return (
    <Container id="home">
      <Content>
        <HeroText>
          <H1>Front End React Developer</H1>{' '}
          <p>
            Hi, Im Raslen Korbosli, 19 Years Old From Tunisia ,A passionate
            Front-end React Developer
          </p>
        </HeroText>

        <Img src={img} alt="" />
        <TechSkills />
      </Content>
    </Container>
  );
}

export default HeroSection;
