function Skill({ skillItem }) {
  return (
    <li>
      <img
        src={`https://skillicons.dev/icons?i=${skillItem.join(',')} `}
        width={'100%'}
        height={'100%'}
        alt="skill"
      />
    </li>
  );
}

export default Skill;
