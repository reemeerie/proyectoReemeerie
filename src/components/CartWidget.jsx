import React, { useContext } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa'
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const { itemsCarrito } = useContext(CartContext)

    return (
        <Link to='/cart' className='contenedorChico'>
            <FaIcons.FaShoppingCart className='icono'/>
            {itemsCarrito.length >= 1 ? itemsCarrito.reduce((pv, cv)=> pv + cv.cantidad, 0) : "Cart"}
        </Link>
    )
};

export default CartWidget;