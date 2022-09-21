import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import "../style/Cart.css"
import { Link } from 'react-router-dom'

const Cart = () => {
    const { itemsCarrito, removeItem, addTotal } = useContext(CartContext)

    const mandoAcontext = (acum) => {
      addTotal(acum)
    }

    let acumulador = 0

    for (const item of itemsCarrito){
      const aux = item.precioNumero * item.cantidad
      acumulador += aux
    }

  return (<>
            {itemsCarrito.length < 1 && <h3 className='sinItems'>Tu carrito esta vacío :(</h3>}
            {itemsCarrito.length >= 1 && <div>
            {itemsCarrito.map((item,index)=> <div key={index} className='elPadre'>
                                              <div className='contenedor col-xxl-10'>
                                                <div className='img'>
                                                  <img src={item.img} alt="imagen" className='nombre'/>
                                                </div>
                                                <div className='nombrePrecio'>
                                                  <p className='nombre'><strong>{item.marca}</strong> {item.nombre} <strong>x{item.cantidad}</strong></p>
                                                  <p className='precio'>{`$${item.precioNumero * item.cantidad}`}</p>
                                                </div>
                                                <div className="card-button" onClick={() => removeItem(item.id)}>
                                                    Borrar del carrito
                                                </div>
                                              </div>
                                            </div>  )} </div>}
            {itemsCarrito.length >= 1 && <div className='elPadre'>
                                          <div className='contenedor col-xxl-10'>
                                            <div className='nombrePrecio'>
                                              <p className='nombre mt-3'>Total</p>
                                              <p className='precio mt-3'>{`$${acumulador}`}</p>
                                            </div>
                                            <Link onClick={() => mandoAcontext(acumulador)} to='/cart/form' className="card-button">
                                              Terminar mi compra
                                            </Link>
                                          </div>
                                          </div>}
   

          </>
          )}

export default Cart