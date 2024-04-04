import styled from 'styled-components';
import SocialLink from './ui/SocialLink';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
const Footer = styled.div`
  padding: 5.2rem 4.6rem;
  background-color: #51535c;
  color: #fff;

  @media (max-width: 770px) {
    padding-top: 2.4rem;
    padding-bottom: 2.4rem;
  }
`;
const FooterContainer = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  transition: transform 0.6s ease-in-out;
`;
const year = new Date().getFullYear();
function FooterSection() {
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
    <footer className={darkModeToggle ? 'dark' : ''}>
      <Footer
        ref={myRef}
        className="dark:bg-zinc-800 dark:text-neutral-200 transition-all"
      >
        <FooterContainer
          style={{
            transform: isElementVisible ? 'translateY(0)' : 'translateY(30%)',

            opacity: isElementVisible ? 1 : 0,
          }}
        >
          <h2>Raslen.Dev</h2>
          <SocialLink color={'#c8cad3'} /> <br />
          <p>Copyright © {year}. All rights are reserved</p>
        </FooterContainer>
      </Footer>
    </footer>
  );
}

export default FooterSection;
//
