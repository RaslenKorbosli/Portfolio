import styled from 'styled-components';

const Li = styled.li`
  z-index: 0;
  transform: translateY(0px);
  transition: 0.3s all;
  &:hover {
    transform: translateY(-1.2rem);
    transition: 0.3s all;
  }
`;
function Skill({ skillItem }) {
  return (
    <Li>
      <img
        src={`https://skillicons.dev/icons?i=${skillItem.join(',')} `}
        width={'100%'}
        height={'100%'}
        alt={`${skillItem.join(',')} skills`}
      />
    </Li>
  );
}

export default Skill;
