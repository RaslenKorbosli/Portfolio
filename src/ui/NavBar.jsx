import styled from 'styled-components';
import { IoMenu } from 'react-icons/io5';

import DropDownMenu from './DropDownMenu';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-scroll';
import { useState } from 'react';
const NavBar = styled.nav`
  display: flex;
  width: 100vw;
  background-color: #fff;
  top: 0;
  left: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  font-size: 1.8rem;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 8rem;
  z-index: 100;
  position: fixed;
  @media (max-width: 700px) {
    padding: 1.8rem 2.5rem;
  }
`;
const Li = styled.li`
  cursor: pointer;
  font-weight: 500;
  /* font-size: 1.8rem; */
  &:hover {
    color: var(--color-hover);
  }
`;

const Logo = styled.a`
  font-size: 2.4rem;
  font-weight: 600;
  &:hover {
    color: var(--color-hover);
  }
  @media (max-width: 700px) {
    font-size: 2rem;
    &:hover {
      color: inherit;
    }
  }
`;
const Ul = styled.ul`
  @media (max-width: 700px) {
    display: none;
  }
`;
const LiMenu = styled.li`
  &:hover {
    color: var(--color-hover);
  }
`;
const UlMenu = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 2.6rem;

  /* @media (max-width: 600px) {
    display: none;
  } */
`;
const DropMenu = styled.div`
  display: none;
  font-size: 2.8rem;
  z-index: 100;
  @media (max-width: 700px) {
    display: flex;
    align-items: center;

    &:hover {
      background-color: #f9f9f9;
      transition: 0.3s all;
    }
  }
`;

const NavData = [
  { link: 'Home', href: 'home' },
  { link: 'About', href: 'about' },
  { link: 'Project', href: 'projects' },
  { link: 'Contact', href: 'contact' },
];
const MenuContainer = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'hidden')};
  position: absolute; /* Required for animation positioning */
  top: 0;
  position: absolute;
  left: 0; /* Adjust based on your layout */
  width: 100%; /* Adjust based on your layout */
  height: 100vh; /* Adjust based on your layout */
  background-color: var(--color-main-background);
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out; /* Transition for smooth animation */
  transform: ${(props) =>
    props.isOpen ? 'translateX(0%)' : 'translateX(-100%)'};
`;
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen((open) => !open);
  }

  return (
    <NavBar>
      <Logo href="#home">
        <Link to={'home'} smooth={true} duration={500} spy={true}>
          Raslen.dev
        </Link>
      </Logo>
      <DropMenu onClick={handleClick}>
        {isOpen ? <IoClose /> : <IoMenu />}
      </DropMenu>

      <DropDownMenu>
        <MenuContainer isOpen={isOpen}>
          <UlMenu>
            {NavData.map((data, i) => (
              <LiMenu key={i} onClick={handleClick}>
                <Link
                  to={data.href}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-50}
                  onClick={handleClick}
                >
                  {data.link}
                </Link>
                {/* <a href={data.href}>{data.link} </a> */}
              </LiMenu>
            ))}
          </UlMenu>
        </MenuContainer>
      </DropDownMenu>

      <Ul>
        {NavData.map((data, i) => (
          <Li key={i}>
            <Link
              to={data.href}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              {data.link}
            </Link>
          </Li>
        ))}
      </Ul>
    </NavBar>
  );
}

export default Header;
