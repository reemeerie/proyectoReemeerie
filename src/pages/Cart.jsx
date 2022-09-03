import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const { itemsCarrito } = useContext(CartContext)
  return (<>
   {!itemsCarrito && <span>no tengo items</span>}
   {itemsCarrito.length && <ol>
    {itemsCarrito.map((item,index)=> <li key={index}>{item.nombre} - {item.cantidad}</li>)}
   </ol>}
   </>
  )
}

export default Cart