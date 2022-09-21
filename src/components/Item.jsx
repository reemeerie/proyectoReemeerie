import React from 'react'
import "../style/Card.css"
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
            
                <div className="col-xxl-2 customCont col-lg-3 col-md-5" >
                    <div className="row">
                        <div>
                            <div className="card-sl">
                                <div className="card-image">
                                    <Link to={`/item/${props.id}`}>
                                        <img
                                        src={props.img} alt='img'/>
                                    </Link>
                                </div>
                                <div className="card-heading">
                                    {props.nombre}
                                </div> 
                                <div className="card-text">
                                    {props.precio}
                                </div>
                                <Link to={`/item/${props.id}`} className="card-button">
                                    Ver detalle de producto
                                </Link>
                            </div>
                        </div> 
                    </div>
                </div>
  )
}

export default Item;