import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

export default function NavbarComp() {
  const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'inactive');

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Poke Ícono"
              src="/PokeIcon.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Container className="text-end">
            <NavLink className={setActiveClass} to="/">
              Home
            </NavLink>{' '}
            <NavLink className={setActiveClass} to="/pokemones">
              Pokemones
            </NavLink>
          </Container>
        </Container>
      </Navbar>
    </>
  );
}
