import { useEffect, useRef, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
const ContributionsContainer = styled.div`
  padding: var(--main-padding-layout);
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.h1`
  font-size: 3.8rem;
  padding-bottom: 7.4rem;
  @media (max-width: 770px) {
    font-size: 2.8rem;
    text-align: center;
  }
`;
function Contributions() {
  const darkModeToggle = useSelector((store) => store.darkMode.darkMode);
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
    <section
      style={{
        transition: 'opacity 0.6s ease-in-out',
        opacity: isElementVisible ? 1 : 0,
      }}
      className={darkModeToggle ? 'dark' : ''}
    >
      <ContributionsContainer
        ref={myRef}
        id="Contributions"
        className="dark:bg-zinc-900 dark:text-neutral-200 transition-all"
      >
        <H1>GitHub Contributions </H1>
        <GitHubCalendar
          username="raslenkorbosli"
          style={{ color: 'inherit', fontWeight: 500 }}
          blockMargin={8}
          blockRadius={4}
          blockSize={16}
          theme={{
            light: ['#e8e8e8', '#747476', '#5d5d5f', '#464649', '#2f2f32'],
            // light: ['#eaecf1b4', '#adb5bd', '#868e96', '#495057', '#343a40'],
          }}
          colorScheme={'light'}
          fontSize={18}
        />
      </ContributionsContainer>
    </section>
  );
}

export default Contributions;
