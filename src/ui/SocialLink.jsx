import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

const links = [
  {
    link: '',
    logo: <FaInstagram />,
  },
  { link: 'https://github.com/RaslenKorbosli', logo: <FaGithub /> },
  {
    link: 'https://www.linkedin.com/in/raslen-korbosli-2408b3301/',
    logo: <FaLinkedin />,
  },
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
    color: ${(props) => props.color};
  }
`;
function SocialLink({ color }) {
  return (
    <LinksLogo>
      {links.map((link) => (
        <Li key={link.link} color={color}>
          {' '}
          <a href={link.link} target="_blanc">
            {link.logo}
          </a>{' '}
        </Li>
      ))}
    </LinksLogo>
  );
}

export default SocialLink;
