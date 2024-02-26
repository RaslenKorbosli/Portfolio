import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

const links = [
  { link: 'www.facebook.com', logo: <FaFacebook /> },
  { link: 'www.facebook.com', logo: <FaGithub /> },
  { link: 'www.facebook.com', logo: <FaLinkedin /> },
];
const LinksLogo = styled.ul`
  display: flex;
  gap: 1rem;
  font-size: 2rem;
  margin: 1rem 0 3.2rem 0;
`;
function SocialLink() {
  return (
    <LinksLogo>
      {links.map((link) => (
        <li key={link.link}> {link.logo}</li>
      ))}
    </LinksLogo>
  );
}

export default SocialLink;
