import styled from 'styled-components';

import ProjectShowcase from './ui/ProjectsShowcase';
const ProjectSectionContainer = styled.section`
  background-color: var(--color-main-background);
  padding: var(--main-padding-layout);

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const H1 = styled.h1`
  font-size: 3.6rem;
  padding-bottom: 1.4rem;
  @media (max-width: 770px) {
    font-size: 2.8rem;
    text-align: center;
  }
`;
const P = styled.p`
  font-size: 1.8rem;
  padding-bottom: 1.6rem;
  @media (max-width: 770px) {
    font-size: 1.4rem;
    text-align: center;
  }
`;
function ProjectSection() {
  return (
    <ProjectSectionContainer id="projects">
      <H1>Highlighting My Best Work</H1>
      <P> Explore my portfolio and discover my creative project </P>
      <ProjectShowcase />
    </ProjectSectionContainer>
  );
}

export default ProjectSection;
