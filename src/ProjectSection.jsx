import styled from 'styled-components';

import ProjectShowcase from './ui/ProjectsShowcase';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
const ProjectSectionContainer = styled.div`
  background-color: var(--color-main-background);
  padding: var(--main-padding-layout);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const H1 = styled.h1`
  font-size: 3.8rem;
  padding-bottom: 1.4rem;
  @media (max-width: 770px) {
    font-size: 2.8rem;
    text-align: center;
  }
`;
const P = styled.p`
  font-size: 2rem;
  padding-bottom: 1.6rem;
  @media (max-width: 770px) {
    font-size: 1.4rem;
    text-align: center;
  }
`;
const ProjectContainer = styled.div`
  text-align: center;
  transform: translateY(10%);
  transition: transform 0.6s ease-out;
`;

function ProjectSection() {
  const darkModeToggle = useSelector((store) => store.darkMode.darkMode);
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
    <section className={darkModeToggle ? 'dark' : ''}>
      <ProjectSectionContainer
        className=" dark:bg-neutral-900 dark:text-neutral-200 transition-all"
        ref={myRef}
        id="projects"
      >
        <ProjectContainer
          style={{ transform: isElementVisible && 'translateY(0%)' }}
        >
          <H1>Highlighting My Best Work</H1>
          <P> Explore my portfolio and discover my creative projects </P>
          <ProjectShowcase />
        </ProjectContainer>
      </ProjectSectionContainer>
    </section>
  );
}

export default ProjectSection;
