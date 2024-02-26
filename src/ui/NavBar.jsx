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
function Header() {
  return (
    <NavBar>
      <h3>Raslen.dev</h3>
      <ul>
        <li>
          <a href="#home"> Home</a>
        </li>
        <li>
          <a href="#about">About </a>
        </li>
        <li>
          <a href="#projects">Projects </a>
        </li>
        <li>
          <a href="#contact">Contact </a>
        </li>
      </ul>
    </NavBar>
  );
}

export default Header;
