import styled from 'styled-components';
import SocialLink from './ui/SocialLink';
const Footer = styled.footer`
  padding: var(--main-padding-layout);
  background-color: #51535c;
  color: #fff;
`;
const FooterContainer = styled.div`
  max-width: 140rem;
  margin: 0 auto;
`;

function FooterSection() {
  return (
    <Footer>
      <FooterContainer>
        <h3>Raslen.dev</h3>
        <SocialLink></SocialLink>
        <p>Copyright © 2024. All rights are reserved</p>
      </FooterContainer>
    </Footer>
  );
}

export default FooterSection;
