import { useRef } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
const ContributionsContainer = styled.div`
  padding: var(--main-padding-layout);
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 770px) {
    padding: 7.2rem 2.4rem;
  }
`;
const H1 = styled.h1`
  font-size: 3.8rem;
  padding-bottom: 7.4rem;
  @media (max-width: 770px) {
    font-size: 2.4rem;
    text-align: center;
  }
`;
function Contributions() {
  const darkModeToggle = useSelector((store) => store.darkMode.darkMode);
  const myRef = useRef();
  const isElementVisible = useIntersectionObserver(myRef, 0.2);
  return (
    <section className={darkModeToggle ? 'dark' : ''}>
      <ContributionsContainer
        ref={myRef}
        id="Contributions"
        className="dark:bg-zinc-900 dark:text-neutral-200 transition-all"
      >
        <H1>GitHub Contributions </H1>
        <GitHubCalendar
          username="raslen-korbosli"
          blockMargin={8}
          blockRadius={4}
          blockSize={16}
          theme={{
            light: ['#e8e8e8', '#747476', '#5d5d5f', '#464649', '#2f2f32'],
          }}
          colorScheme={'light'}
          fontSize={18}
          style={{
            color: 'inherit',
            fontWeight: 500,
            opacity: isElementVisible ? '1' : '0',
            transform: isElementVisible ? 'translateY(0)' : 'translateY(25%)',
            transition: ' 0.6s ease-in-out',
          }}
        />
      </ContributionsContainer>
    </section>
  );
}

export default Contributions;
