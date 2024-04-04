import styled from 'styled-components';
import SocialLink from './ui/SocialLink';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
const Footer = styled.div`
  padding: 5.2rem 4.6rem;
  background-color: #51535c;
  color: #fff;

  @media (max-width: 770px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    font-size: 1.8;
  }
`;
const FooterContainer = styled.div`
  max-width: 100rem;
  margin: 0 auto;
`;
const Copyright = styled.p`
  font-size: 1.4rem;
  @media (max-width: 770px) {
    font-size: 1.4rem;
  }
`;
const FooterLinks = styled.div`
  @media (max-width: 770px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
  }
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
      { threshold: 0.4 }
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
            transform: isElementVisible ? 'translateY(0)' : 'translateY(25%)',
            opacity: isElementVisible ? 1 : 0,
            transition: ' 0.6s ease-in-out',
          }}
        >
          {' '}
          <FooterLinks>
            <h2>Raslen.Dev</h2>
            <SocialLink color={'#c8cad3'} margin={0} /> <br />
          </FooterLinks>
          <Copyright>Copyright © {year}. All rights are reserved</Copyright>
        </FooterContainer>
      </Footer>
    </footer>
  );
}

export default FooterSection;
//
