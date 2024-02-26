import Img from '../../images/backgroundImg.png';
import styled from 'styled-components';
import Project from './Project';
import TechUsed from './TechUsed';
import { FaGithub } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const projects = [
  {
    projectID: '001',
    projectName: 'project showcase01',
    technologies: ['js', 'css'],
    projectTitle: 'Check out this project to see my skills in action',
    githubSource: 'https://github.com/',
    liveDemoURL: 'https://github.com/',
  },
  {
    projectID: '002',
    projectName: 'project showcase02',
    technologies: ['react', 'tailwind', 'redux'],
    projectTitle: 'Check out this project to see my skills in action',
    githubSource: 'https://github.com/',
    liveDemoURL: 'https://github.com/',
  },
  {
    projectID: '003',
    projectName: 'project showcase03',
    technologies: ['js', 'sass'],
    projectTitle: 'Check out this project to see my skills in action',
    githubSource: 'https://github.com/',
    liveDemoURL: 'https://github.com/',
  },
];
const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 3.2rem;
  padding: 4.8rem 0;
  /* max-width: 115rem; */
`;
const TechContainer = styled.ul`
  display: flex;
  gap: 0.8rem;
`;
const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
const ProjectImg = styled.img`
  max-width: 100%;
  margin-bottom: 2rem;
`;
const Links = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  align-items: center;
  /* justify-content: center; */
`;
const Link = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  &:hover {
    text-decoration: underline;
    font-weight: 500;
  }
`;
const H2 = styled.h2`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
function ProjectShowcase() {
  return (
    <ProjectsContainer>
      {projects.map((project) => (
        <Project key={project.projectID}>
          <div>
            <ProjectImg src={Img} alt="" />
          </div>
          <ProjectText>
            <div>
              <H2>{project.projectName}</H2>
              <TechContainer>
                {' '}
                {project.technologies.map((tech, i) => (
                  <TechUsed tech={tech} key={i} />
                ))}
              </TechContainer>
            </div>

            <p>{project.projectTitle}</p>

            <Links>
              <Link>
                <a href={project.githubSource} target="blanc">
                  code source
                </a>
                <FaGithub />
              </Link>
              <Link>
                <a href={project.githubSource} target="blanc">
                  Live Demo
                </a>
                <FaArrowUpRightFromSquare />
              </Link>
            </Links>
          </ProjectText>
        </Project>
      ))}
    </ProjectsContainer>
  );
}

export default ProjectShowcase;
