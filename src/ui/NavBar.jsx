import styled from 'styled-components';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { IoMenu } from 'react-icons/io5';
import DropDownMenu from './DropDownMenu';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activatedDarkMode } from '../darkModeSlice';

const NavBar = styled.div`
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
  display: flex;
  font-size: 2.4rem;
  font-weight: 600;
  position: relative;
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
  @media (max-width: 880px) {
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
  @media (max-width: 880px) {
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
  { link: 'Contributions', href: 'Contributions' },
  { link: 'Contact', href: 'contact' },
];
const MenuContainer = styled.div`
  position: absolute; /* Required for animation positioning */
  top: 0;
  left: 0; /* Adjust based on your layout */
  width: 100%; /* Adjust based on your layout */
  height: 100vh; /* Adjust based on your layout */
  background-color: var(--color-main-background);
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out; /* Transition for smooth animation */
  @media (max-width: 880px) {
    display: block;
  }
`;
const LightModeButton = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  display: flex;

  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  &:hover {
    color: var(--color-hover);
  }
`;

function Header() {
  const dispatch = useDispatch();
  const darkModeToggle = useSelector((store) => store.darkMode.darkMode);
  const [darkMode, setDarkMode] = useState(darkModeToggle);
  const [isOpen, setIsOpen] = useState(false);
  function handleDarkModeClick() {
    setDarkMode((darkMode) => !darkMode);
    dispatch(activatedDarkMode(!darkMode));
  }
  // useEffect(() => {
  //   dispatch(activatedDarkMode(darkMode));
  // }, [dispatch, darkMode]);
  function handleClick() {
    setIsOpen((open) => !open);
  }
  return (
    <nav className={darkModeToggle && 'dark'}>
      <NavBar className=" dark:bg-neutral-800 dark:text-neutral-200 transition-all">
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Logo href="#home">
            <Link
              to={'home'}
              smooth={true}
              duration={500}
              spy={true}
              aria-label="website logo"
            >
              Raslen.dev
            </Link>
          </Logo>
          <LightModeButton
            aria-label="dark mode button"
            className="dark:text-neutral-200"
            onClick={() => handleDarkModeClick()}
          >
            {darkModeToggle ? <BsFillMoonStarsFill /> : <FiSun />}
          </LightModeButton>
        </div>
        <DropMenu onClick={handleClick} className=" dark:hover:bg-zinc-600">
          {isOpen ? <IoClose /> : <IoMenu />}
        </DropMenu>
        <DropDownMenu>
          <MenuContainer
            style={{
              transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
              display: isOpen ? 'flex' : 'hidden',
            }}
            className="dark:bg-zinc-800"
          >
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
        </Ul>{' '}
      </NavBar>
    </nav>
  );
}

export default Header;
