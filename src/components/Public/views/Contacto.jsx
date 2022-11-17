import React from 'react'
import Iframe from 'react-iframe'
import { Container, Navbar } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row,Col} from 'react-bootstrap';
import carta from '../../img/mail.png'
import SectionNucleoIcons from '../Components/NucleoIcons';


const Contacto = () => {

  return (
    <div>
        <h1 id="title-map" >¡Contáctanos <b>y Caminemos al éxito!</b></h1>

         <div>
          <Iframe id ="mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12339.261211958757!2d-72.630794!3d-39.360419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4229036e3e9fda8e!2sMaestranza%20Leiva!5e0!3m2!1ses-419!2scl!4v1668570366848!5m2!1ses-419!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
        </div>

        <h3 id="contact-title">Hacemos Despegar Tu <span id ="negrita">Empresa</span></h3>

        <Container>
        
        
        <Row>
        <Col><div class="signup__field" id="form-format">
                <input type="text" name="first_name" id="first_name" class="input-field" placeholder='nombre'/>
              </div>
              </Col>
        <Col><div class="signup__field" id="form-format">
                <input type="password" name="password" id="password" class="input-field" required placeholder='apellido'/>
              </div></Col>
      </Row>
      <Row>
        <Col>  
              <div class="signup__field"id="form-format">
                <input type="email" name="email" id="email" class="input-field" required placeholder='email'/>
              </div></Col>
        <Col> <div class="signup__field"id="form-format">
                <input type="text" name="last_name" id="last_name" class="input-field" placeholder='telefono'/>
              </div></Col>
      </Row>
      <Row>
        <Col> <div class="signup__field"id="form-format">
                <textarea class="input-field" placeholder='mensaje' ></textarea>
              </div></Col>
      </Row>
      <Row>
        <Col> <div class="d-grid gap-2"id="form-format">
               <button class="button_form">Enviar</button>
              </div></Col>
      </Row>
    </Container>

         {/* aca va el formulario de contacto */}

       <Container id="avisoderecha" class="three">
         <h3>¡Estás a un paso de trabajar con los mejores!</h3>
       </Container>
       <Container id="avisoizquierda">
         <h3>Líderes del rubro del Mantenimiento Industrial</h3>
       </Container>
       
       
       <Container id="foter_contacto">
         <img class = "despegue" id = "cohete" src="../../img/cohete.png" alt="" />
         <h4>Hacemos Despegar tus Procesos industriales</h4>
       </Container>
    </div>
  )
}

export default Contacto