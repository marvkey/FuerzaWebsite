import Container from 'react-bootstrap/Container';
import { NavDropdown,Navbar,Nav  } from 'react-bootstrap';
import fureza from '../images/fuerza.png';
import {Route,Routes} from 'react-router-dom';
function Nabar() {
  return (
    <>
       <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home"><img src={fureza} width="50px" height="50px" className="d-inline-block align-top"/>
        </Navbar.Brand>
        <Nav className="me-auto">
            <NavDropdown title="Acedemy" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Program</NavDropdown.Item>
              <NavDropdown.Item href="/">
                Goalie Training
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Spanish Program</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home">Methology</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Nabar;
