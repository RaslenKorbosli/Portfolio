import styled from 'styled-components';

import ProjectShowcase from './ui/ProjectsShowcase';
import { useEffect, useRef, useState } from 'react';
const ProjectSectionContainer = styled.section`
  background-color: var(--color-main-background);
  padding: var(--main-padding-layout);
  transform: translateY(10%);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.6s ease-out;
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
  const myRef = useRef();
  const [isElementVisible, setIsElementVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        entry.isIntersecting && setIsElementVisible(true);
      },
      {
        threshold: 0.1,
      }
    );
    observer.observe(myRef.current);
  }, [isElementVisible]);
  return (
    <ProjectSectionContainer
      ref={myRef}
      id="projects"
      style={{ transform: isElementVisible && 'translateY(0%)' }}
    >
      <H1>Highlighting My Best Work</H1>
      <P> Explore my portfolio and discover my creative project </P>
      <ProjectShowcase />
    </ProjectSectionContainer>
  );
}

export default ProjectSection;
