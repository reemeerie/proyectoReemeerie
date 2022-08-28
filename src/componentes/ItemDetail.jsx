import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = (props) => {
  return (
    <div className="col-xxl-2 customCont col-lg-3 col-md-5" >
                    <div className="row">
                        <div className="">
                            <div className="card-sl">
                                <div className="card-image">
                                    <img
                                    src={props.img} alt='nashuy'/>
                                </div>
                                <div className="card-heading">
                                    {props.nombre}
                                </div> 
                                <div className="card-text">
                                    {props.precio}
                                </div>
                                <Link to='/' className="card-button">
                                    Añadir al carro
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default ItemDetail