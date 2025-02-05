import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

const links = [
  {
    link: 'https://www.facebook.com/raslen.korbosli.52/',
    logo: <FaFacebook />,
    platform: 'Instagram',
  },
  {
    link: 'https://github.com/Raslen-Korbosli',
    logo: <FaGithub />,
    platform: 'Github',
  },
  {
    link: 'https://www.linkedin.com/in/raslen-korbosli-2408b3301/',
    logo: <FaLinkedin />,
    platform: 'Linkedin',
  },
];
const LinksLogo = styled.ul`
  display: flex;
  align-items: center;

  gap: 1rem;
  font-size: 2.4rem;
`;
const Li = styled.li`
  &:hover {
    /* font-size: 2.8rem; */
    color: ${(props) => props.color};
  }
`;
function SocialLink({ color, margin = 1 }) {
  return (
    <LinksLogo style={{ margin: `${margin}rem` }}>
      {links.map((link) => (
        <Li key={link.link} color={color}>
          <a
            href={link.link}
            target="_blanc"
            aria-label={`${link.platform} link`}
          >
            {link.logo}
          </a>
        </Li>
      ))}
    </LinksLogo>
  );
}

export default SocialLink;
