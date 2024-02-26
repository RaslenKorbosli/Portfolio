import styled from 'styled-components';
import Skill from './Skill';

const TachSkills = styled.ul`
  /* grid-column: 1/-1; */

  align-items: center;
  font-size: 2rem;
  font-weight: 400;
`;
const skills = [
  ['html', 'css'],
  ['js', 'react'],
  ['tailwind', 'sass'],
];
function TechSkills() {
  return (
    <TachSkills>
      <span> skill stack |</span>
      <ul>
        {skills.map((skillItem, i) => (
          <Skill skillItem={skillItem} key={i} />
        ))}
      </ul>
    </TachSkills>
  );
}

export default TechSkills;
