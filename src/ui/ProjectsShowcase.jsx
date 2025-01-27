import styled from 'styled-components';
import Project from './Project';
import TechUsed from './TechUsed';
import { FaGithub } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const projects = [
  {
    projectID: '001',
    projectName: 'Docai',
    technologies: ['ts', 'nextjs', 'tailwind', 'postgres'],
    projectTitle: 'Chat with your documents in secondes with docai',
    githubSource: 'https://github.com/RaslenKorbosli/docai',
    liveDemoURL: 'https://docai-raslenkorbosli.vercel.app',
    projectImage: '/docai.webp',
  },
  {
    projectID: '002',
    projectName: 'File Storage',
    technologies: ['ts', 'nextjs', 'tailwind', 'postgres'],
    projectTitle: 'Upload and share files online',
    githubSource:
      'https://github.com/RaslenKorbosli/file-storage-learning-project',
    liveDemoURL: 'https://file-storage-learning-project.vercel.app/',
    projectImage: '/fileStorage.webp',
  },
  {
    projectID: '003',
    projectName: 'e-commerce store',
    technologies: ['react', 'tailwind'],
    projectTitle: 'Online e-commerce shop',
    githubSource: 'https://github.com/RaslenKorbosli/E-store',
    liveDemoURL: 'https://e-store-bice-three.vercel.app/home',
    projectImage: '/store.webp',
  },
];
const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 3.2rem;
  padding: 4.8rem 0;
  text-align: center;
  /* max-width: 115rem; */
  @media (max-width: 770px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, minmax(200px, 1fr));
    font-size: 1.6rem;
    gap: 5.2rem;
  }
`;
const TechContainer = styled.ul`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
`;
const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
const ProjectImg = styled.img`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  max-width: 100%;
  margin-bottom: 14px;
  border-radius: 0.8rem;
  @media (max-width: 770px) {
    max-width: 80%;
  }
`;
const Links = styled.div`
  display: flex;
  gap: 2.6rem;
  margin-top: 2rem;
  font-size: 1.7rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 950px) {
    flex-direction: column;
    gap: 1rem;
  }
  @media (max-width: 770px) {
    flex-direction: row;
    gap: 2rem;
    margin-top: 0;
  }
  /* justify-content: center; */
`;
const Link = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:hover {
    text-decoration: underline;
    font-weight: 600;
    /* font-size: 1.65rem; */
  }
  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`;
const H2 = styled.h2`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 420px) {
    font-size: 2rem;
  }
`;
const P = styled.p`
  font-size: 1.8rem;
`;
function ProjectShowcase() {
  return (
    <ProjectsContainer>
      {projects.map((project) => (
        <Project key={project.projectID}>
          <div>
            <a href={project.liveDemoURL} target="_blanc">
              <ProjectImg src={project.projectImage} alt="" />
            </a>
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

            <P>{project.projectTitle}</P>

            <Links>
              <Link>
                <a href={project.githubSource} target="blanc">
                  source code
                </a>
                <FaGithub />
              </Link>
              <Link>
                <a href={project.liveDemoURL} target="blanc">
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
