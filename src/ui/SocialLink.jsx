import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

const links = [
  {
    link: 'https://www.instagram.com/raslen__korbosli/',
    logo: <FaInstagram />,
  },
  { link: 'www.github.com', logo: <FaGithub /> },
  { link: 'www.linkedin.com', logo: <FaLinkedin /> },
];
const LinksLogo = styled.ul`
  display: flex;
  gap: 1rem;
  font-size: 2.4rem;
  margin: 1rem 0;
`;
const Li = styled.li`
  &:hover {
    /* font-size: 2.8rem; */
    color: #c8cad3;
  }
`;
function SocialLink() {
  return (
    <LinksLogo>
      {links.map((link) => (
        <Li key={link.link}>
          {' '}
          <a href="">{link.logo}</a>{' '}
        </Li>
      ))}
    </LinksLogo>
  );
}

export default SocialLink;
