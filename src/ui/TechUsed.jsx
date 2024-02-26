import styled from 'styled-components';
const TechTag = styled.div``;

function TechUsed({ tech }) {
  console.log(tech);
  return (
    <TechTag>
      <img
        src={`https://skillicons.dev/icons?i=${tech} `}
        width={'24px'}
        height={'24px'}
        alt="skill"
      />
    </TechTag>
  );
}

export default TechUsed;
