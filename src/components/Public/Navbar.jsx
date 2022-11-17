import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useEffect } from 'react';
import classnames from "classnames"


function BasicExample() {
  const [navbarColor, setNavbarColor] = useState("");
  const [navbarCollapse, setNavbarCollapse] = useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop < 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop > 300 ||
        document.body.scrollTop > 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <Navbar id="navbar" expand="lg" className={classnames("fixed-top",navbarColor)}>
      
      <Container id ="navcontainer">
      
      <FontAwesomeIcon id='uno'/>
      <Navbar.Brand id="titulo1"href="/">Maestranza Leiva</Navbar.Brand>  
        <Navbar.Toggle id="c-item" aria-controls="basic-navbar-nav"   />
        <Navbar.Collapse id="basic-navbar-nav" >

          <Nav id="navlinks" className="me-auto">
            <Nav.Link id='l-nav' href="/">Home</Nav.Link>
            <Nav.Link id='l-nav' href="/#/servicios">Servicios</Nav.Link>
            <Nav.Link id='l-nav' href="/#/nosotros">Nosotros</Nav.Link>
            <Nav.Link id='l-nav' href="/#/contacto">Contacto</Nav.Link>
            <Nav.Link id='l-nav' href="/#/ingresar">Ingresar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
      </Container>
   
    </Navbar>
  );
}

export default BasicExample;