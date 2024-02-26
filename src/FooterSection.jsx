import styled from 'styled-components';
import SocialLink from './ui/SocialLink';
const Footer = styled.footer`
  padding: var(--main-padding-layout);
  background-color: #51535c;
  color: #fff;
`;
const FooterContainer = styled.div`
  max-width: 100rem;
  margin: 0 auto;
`;
const year = new Date().getFullYear();
function FooterSection() {
  return (
    <Footer>
      <FooterContainer>
        <h2>Raslen.dev</h2>
        <SocialLink></SocialLink> <br />
        <p>Copyright © {year}. All rights are reserved</p>
      </FooterContainer>
    </Footer>
  );
}

export default FooterSection;
