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
    technologies: ['css', 'js'],
    projectTitle: 'Check out this project to see my skills in action',
    githubSource: 'https://github.com/',
    liveDemoURL: 'https://github.com/',
  },
  {
    projectID: '002',
    projectName: 'project showcase02',
    technologies: ['react', 'sass'],
    projectTitle: 'Check out this project to see my skills in action',
    githubSource: 'https://github.com/',
    liveDemoURL: 'https://github.com/',
  },
  {
    projectID: '003',
    projectName: 'project showcase03',
    technologies: ['tailwind', 'js'],
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
  gap: 2rem;
`;
const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ProjectImg = styled.img`
  max-width: 100%;
  margin-bottom: 2rem;
`;
const Links = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: 1rem;
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

function ProjectShowcase() {
  return (
    <ProjectsContainer>
      {projects.map((project) => (
        <Project key={project.projectID}>
          <div>
            <ProjectImg src={Img} alt="" />
          </div>
          <ProjectText>
            <h1>{project.projectName}</h1>
            <p>{project.projectTitle}</p>
            <TechContainer>
              {' '}
              {project.technologies.map((tech, i) => (
                <TechUsed tech={tech} key={i} />
              ))}
            </TechContainer>
            <Links>
              <Link>
                {' '}
                <a href={project.githubSource}> code source </a> <FaGithub />
              </Link>
              <Link>
                <a href={project.githubSource}> Live Demo </a>
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
