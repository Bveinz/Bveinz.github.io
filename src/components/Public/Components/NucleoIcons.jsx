
import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import tuerca from "../../img/tuerca.png"

function SectionNucleoIcons() {
  return (
    <>
      <div id="containerprimario">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <p class="description">
                Contamos con experiencia en la industria, 
                  entregando soluciones de mediana y alta complejidad,
                 trabajando día a día para entregar los mejores servicios a nuestros clientes.
              </p>
              <br />
            </Col>
            <Col lg="6" md="12">

            </Col>
          </Row>
        </Container>
      </div>{" "}
      {/* <div class="divider">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
      </div> */}
    </>
  );
}

export default SectionNucleoIcons;
