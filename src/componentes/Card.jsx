import React from 'react'
import "../style/Card.css"

const Card = (props) => {
  return (
                <div className="col-2 customCont" >
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
                                <a href="#" className="card-button">
                                    Añadir al carro
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Card;