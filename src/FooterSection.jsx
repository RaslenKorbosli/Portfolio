import styled from 'styled-components';
import SocialLink from './ui/SocialLink';
import { useEffect, useRef, useState } from 'react';
const Footer = styled.footer`
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
  transition: 0.6s ease-in-out;
`;
const year = new Date().getFullYear();
function FooterSection() {
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
    <Footer ref={myRef}>
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
  );
}

export default FooterSection;
//
