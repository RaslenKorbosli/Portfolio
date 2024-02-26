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
`;
function ProjectSection() {
  return (
    <ProjectSectionContainer id="projects">
      <H1>Highlighting My Best Work</H1>
      <p> Explore my portfolio and discover my creative project </p>
      <ProjectShowcase />
    </ProjectSectionContainer>
  );
}

export default ProjectSection;
