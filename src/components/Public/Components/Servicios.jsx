import React from 'react'
import Card from 'react-bootstrap/Card'

const Servicios = (props) => {
  return (
    <div>

        <Card id ="servicios">
            <h1>Hola {props.saludo}</h1>
        </Card>

    </div>
  )
}

export default Servicios