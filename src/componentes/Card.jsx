import React from 'react'
import Encabezado from './Encabezado';
import Bsboton from './Bsboton';
import "./Card.css"

const Card = ({lugares,concepto,pago}) => {
  return (
    <div className='entera'>
        <Encabezado lugar={lugares} def={concepto}/>
        <Bsboton  pagar={pago}/>    
    </div>
  )
}

export default Card