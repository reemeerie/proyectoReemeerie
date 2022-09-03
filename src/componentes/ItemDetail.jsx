import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Card.css"
import { useState, useContext } from 'react'
import "../style/ItemCount.css"
import { CartContext } from '../context/CartContext'

const ItemDetail = (props) => {
    const {addItem} = useContext(CartContext)
    const [cant, setCant] = useState(props.inicial)
    function agregarUno() {
        if (cant < props.stock) {
            return setCant(cant + 1)
        } else {return;}
    }
    function restarUno() {
        if (cant > 1) {
            return setCant(cant - 1)
        } else {return;}
    }
    function onAdd(){
        addItem(props, cant)
    }


    if (props.stock !== 0) {
  return (
                <div className="col-xxl-5 customCont col-lg-8 col-md-10 col-xl-6" >
                    <div className="row">
                        <div className="">
                            <div className="card-sl">
                                <div className="card-image">
                                    <img
                                    src={props.img} alt='imagen'/>
                                </div>
                                <div className="card-heading">
                                    {props.nombre}
                                </div> 
                                <div className="card-text">
                                    {props.precio}
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <button type="button" className="btn btn-warning" onClick={() => {restarUno()}}>-</button>
                                    <p className="numero">{cant}</p>
                                    <button type="button" className="btn btn-warning" onClick={() => {agregarUno()}}>+</button>
                                </div>
                                <Link onClick={onAdd} to='/cart' className="card-button">
                                    Añadir al carrito
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
  )
    }
}

export default ItemDetail
