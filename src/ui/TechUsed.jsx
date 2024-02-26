import styled from 'styled-components';
const TechTag = styled.div`
  display: flex;
  /* gap: 0.6rem; */
`;
const Img = styled.img`
  height: 3rem;
`;
function TechUsed({ tech }) {
  const imgUrl = `../../images/${tech}.png`;
  return (
    <TechTag>
      <Img src={imgUrl} alt="" />
    </TechTag>
  );
}

export default TechUsed;
