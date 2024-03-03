import styled from 'styled-components';
import Skill from './Skill';

const TachSkills = styled.ul`
  /* grid-column: 1/-1; */

  align-items: center;
  font-size: 2rem;
  font-weight: 400;
  transition: 0.6s;
`;
const Span = styled.ul`
  font-size: 1.8rem;
  font-weight: 400;
  @media (max-width: 950px) {
    display: none;
  }
`;
const skills = [
  ['html', 'css'],
  ['js', 'react'],
  ['tailwind', 'sass'],
];
function TechSkills({ isElementVisible }) {
  return (
    <TachSkills
      style={{
        transform: isElementVisible ? 'translateY(0)' : 'translateY(40%)',
      }}
    >
      <Span> skill stack |</Span>
      <ul>
        {skills.map((skillItem, i) => (
          <Skill skillItem={skillItem} key={i} />
        ))}
      </ul>
    </TachSkills>
  );
}

export default TechSkills;
