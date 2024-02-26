import styled from 'styled-components';
const NavBar = styled.nav`
  display: flex;
  width: 100vw;
  position: fixed;
  background-color: #fff;
  top: 0;
  left: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  font-size: 1.8rem;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 5rem 2.5rem 5rem;
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
`;
const NavData = [
  { link: 'Home', href: '#home' },
  { link: 'About', href: '#about' },
  { link: 'Project', href: '#projects' },
  { link: 'Contact', href: '#contact' },
];
function Header() {
  return (
    <NavBar>
      <Logo href="#home">Raslen.dev</Logo>
      <ul>
        {NavData.map((data, i) => (
          <Li key={i}>
            <a href={data.href}>{data.link} </a>
          </Li>
        ))}
      </ul>
    </NavBar>
  );
}

export default Header;
