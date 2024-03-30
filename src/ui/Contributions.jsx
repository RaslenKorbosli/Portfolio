import { useEffect, useRef, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import styled from 'styled-components';
const ContributionsContainer = styled.div`
  padding: var(--main-padding-layout);
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.8s ease-in-out;

  /* background-color: var(--color-second-background); */
`;
const H1 = styled.h1`
  font-size: 3.6rem;
  padding-bottom: 7.4rem;
  @media (max-width: 770px) {
    font-size: 2.8rem;
    text-align: center;
  }
`;
function Contributions() {
  const myRef = useRef();
  const [isElementVisible, setIsElementVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        entry.isIntersecting && setIsElementVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(myRef.current);
  }, [isElementVisible]);
  return (
    <ContributionsContainer
      ref={myRef}
      id="Contributions"
      style={{
        transform: isElementVisible ? 'opacity(0)' : 'opacity(1)',

        opacity: isElementVisible ? 1 : 0,
      }}
    >
      <H1>GitHub Contributions </H1>
      <GitHubCalendar
        username="raslenkorbosli"
        style={{ color: 'inherit', fontWeight: 500 }}
        blockMargin={8}
        blockRadius={4}
        blockSize={16}
        theme={{
          light: ['#eaecf1b4', '#adb5bd', '#868e96', '#495057', '#343a40'],
        }}
        colorScheme={'light'}
        fontSize={18}
      />
    </ContributionsContainer>
  );
}

export default Contributions;
