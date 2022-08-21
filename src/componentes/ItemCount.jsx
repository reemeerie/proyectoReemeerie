import React, {useState} from "react";
import img from "../img/filaStyling.jpg"
import "../style/ItemCount.css"

const ItemCount = () => {
    const [cant, setCant] = useState(1)
    
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="d-flex justify-content-center align-items-center">
                        <button className="btnnn" type="button" onClick={()=> {setCant(cant - 1)}}>-</button>
                        <p className="numero">{cant}</p>
                        <button className="btnnn" type="button" onClick={() => {setCant(cant + 1)}}>+</button>
                    </div>
                    <div className="padre">
                        <div className="alCarro">Añadir al carro</div>
                    </div>
                </div> 
        </div>
    )
}

export default ItemCount;