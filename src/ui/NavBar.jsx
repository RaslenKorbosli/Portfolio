import styled from 'styled-components';
import { IoMenu } from 'react-icons/io5';
import { useState } from 'react';
import DropDownMenu from './DropDownMenu';
import { IoClose } from 'react-icons/io5';
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
  padding: 2.5rem 5rem 2.5rem 5rem;
  z-index: 100;
  position: fixed;
`;
const Li = styled.li`
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
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
const Ul = styled.ul`
  @media (max-width: 600px) {
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
  font-size: 2.4rem;

  /* @media (max-width: 600px) {
    display: none;
  } */
`;
const DropMenu = styled.div`
  display: none;
  font-size: 2.8rem;
  z-index: 100;
  @media (max-width: 600px) {
    display: block;
    display: flex;
    align-items: center;

    &:hover {
      background-color: #f9f9f9;
      transition: 0.3s all;
    }
  }
`;

const NavData = [
  { link: 'Home', href: '#home' },
  { link: 'About', href: '#about' },
  { link: 'Project', href: '#projects' },
  { link: 'Contact', href: '#contact' },
];
// const MenuContainer = styled.div`
//     width: 100%;
//     height: 100vh;
//     top: 0;
//     left: 0;
//     position: absolute;
//     background-color: var(--color-main-background);
//     backdrop-filter: blur(10px);
//     display: ${isOpen ? 'flex' : 'none'};
//     justify-content: center;
//     align-items: center;
//     /* animation: slideIn 0.3s ease-in-out; */
//     transform: ${isOpen ? 'translateX(0%)' : 'translateX(200%)'};
//     transition: 0.3s transform;
//     @keyframes slideIn {
//       from {
//         transform: translateX(200%);
//         opacity: 0;
//       }
//       to {
//         transform: translateX(0);
//         opacity: 1;
//       }
//     }
//   `;
const MenuContainer = styled.div`
  display: flex;
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
      <Logo href="#home">Raslen.dev</Logo>
      <DropMenu onClick={handleClick}>
        {isOpen ? <IoClose /> : <IoMenu />}
      </DropMenu>

      <DropDownMenu>
        <MenuContainer isOpen={isOpen}>
          <UlMenu>
            {NavData.map((data, i) => (
              <LiMenu key={i} onClick={handleClick}>
                <a href={data.href}>{data.link} </a>
              </LiMenu>
            ))}
          </UlMenu>
        </MenuContainer>
      </DropDownMenu>

      <Ul>
        {NavData.map((data, i) => (
          <Li key={i}>
            <a href={data.href}>{data.link} </a>
          </Li>
        ))}
      </Ul>
    </NavBar>
  );
}

export default Header;
