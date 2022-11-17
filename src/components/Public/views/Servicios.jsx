import React from 'react'

import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rayo from '../../img/rayo.png'
import manos from '../../img/manos.png'
import casco from '../../img/casco.png'
import soldador from '../../img/soldador.jpg'


const Servicios = () => {
  return (
    <div id = "servicios">
        <h2 id ="sello">Nuestro Sello</h2>

        <Container>
            
            <Row>
                
                <Col xs={12} md={4} >
                <img id ="iservices" src={rayo} alt="" />
                
                <p id ="servicios-parrafo">
                    Prestamos Servicio de Visitas y Mantenciones programadas 
                    a recintos Industriales a lo largo de todo 
                </p>

                
                </Col>
                
                <Col xs={12} md={4}>
                <img id ="iservices" src={casco} alt="" />
                
                <p id ="servicios-parrafo">
                    Contar con diagnósticos oportunos que permitan anticiparse a las fallas,
                     evitar paradas no planificadas y eliminar el imprevisto, es un requerimiento imprescindible en la industria. 
                </p>
                
                </Col>
            
                <Col xs={12} md={4}>
                <img id ="iservices" src={manos} alt="" />
                
                <p id ="servicios-parrafo">
                Lo primero es priorizar el trabajo de análisis al identificar los focos críticos de pérdidas en los activos y sus modos de falla
                </p>
                
                </Col>
            </Row>
        </Container>

        <Container>
        <h2 id ="servicios-title">Nuestros Servicios</h2>

                 <div id="container">
                     <div>
                           <div class="carta">
                                <div class="content">
                                    <div class="front">
                                      <h3>Manteniemiento Industrial</h3>
                                    </div>
                                    <div class="back">
                                    Descripcion Servicio
                                    </div>
                                </div>
                            </div>
                     </div>
                     <div>
                           <div class="carta">
                                <div class="content">
                                    <div class="front">
                                      <h3>Manteniemiento Industrial</h3>
                                    </div>
                                    <div class="back">
                                    Descripcion Servicio
                                    </div>
                                </div>
                            </div>
                     </div>  
                     <div>
                           <div class="carta">
                                <div class="content">
                                    <div class="front">
                                      <h3>Manteniemiento Industrial</h3>
                                    </div>
                                    <div class="back">
                                     Descripcion Servicio
                                    </div>
                                </div>
                            </div>
                     </div>    

                </div>
        </Container> 

    </div>
  )
}

export default Servicios