import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa'

const CartWidget = () => {
    return (
        <Link to='/cart' className='contenedorChico'>
            <FaIcons.FaShoppingCart className='icono'/>Cart
        </Link>
    )
};

export default CartWidget;