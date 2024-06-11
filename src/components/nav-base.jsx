import Rec from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class NavBase extends Rec.Component {
  render() {
    let go_inicio = () => {
      window.location = "/";
    }
    let go_registro_horas = () => {
      window.location = "/registro/horas";
    }
    let go_registro_tarea = () => {
      window.location = "/registro/tarea";
    }
    let go_registro_persona = () => {
      window.location = "/registro/persona";
    }
    
    
    let go_consulta_horas = () => {
      window.location = "/consulta/horas";
    }
    let go_consulta_tarea = () => {
      window.location = "/consulta/tarea";
    }
    let go_consulta_persona = () => {
      window.location = "/consulta/usuario";
    }

    let go_login =()=> {
      window.location = "/login";
    }
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Registro de actividades</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Registro" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={go_registro_horas}>Registro de horas trabajas  en un proyecto</NavDropdown.Item>
                <NavDropdown.Item onClick={go_registro_tarea}>Registro de la Descripcion de la tarea realizada</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={go_registro_persona}>Registro de personas</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Consulta" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={go_consulta_tarea}>Consulta de las tareas</NavDropdown.Item>
                <NavDropdown.Item onClick={go_consulta_horas}>Consulta de las horas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={go_consulta_persona}>Consulta por usuarios</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link onClick={go_login}>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavBase;