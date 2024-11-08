import React from 'react'
import "./Bsboton.css"

const Bsboton = ({pagar}) => {
  return (
    <div className='pagado'>
      <span className='din'>Bs{pagar}</span>
      <button className='rojo'>Add</button>
    </div>
  )
}

export default Bsboton