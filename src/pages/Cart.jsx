import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import "../style/Cart.css"

const Cart = () => {
    const { itemsCarrito } = useContext(CartContext)
    let acumulador = 0
    for (const item of itemsCarrito){
      const aux = item.precioNumero * item.cantidad
      acumulador += aux
    }
  return (<>
   {!itemsCarrito && <span>no tengo items</span>}
   {itemsCarrito.length && <div>
    {itemsCarrito.map((item,index)=> <div key={index} className='elPadre'>
            <div className='contenedor col-xxl-10'>
              <div className='img'>
                <img src={item.img} alt="imagen" className='nombre'/>
              </div>
              <div className='nombrePrecio'>
                <p className='nombre'>{item.nombre} <strong>x{item.cantidad}</strong></p>
                <p className='precio'>{`$${item.precioNumero * item.cantidad}`}</p>
              </div>
              <div className="card-button">
                   Borrar del carrito
              </div>
            </div>
    </div>)}
    <div className='elPadre'>
    <div className='contenedor col-xxl-10'>
      <div className='nombrePrecio'>
        <p className='nombre'>Total</p>
        <p className='precio'>{`$${acumulador}`}</p>
      </div>
      <div className="card-button">
                   Terminar mi compra
      </div>
    </div>
    </div>
   </div>
   }
   </>
  )
}

export default Cart