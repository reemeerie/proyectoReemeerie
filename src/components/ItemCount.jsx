import React, {useState} from "react";
import img from "../img/filaStyling.jpg"
import "../style/ItemCount.css"

const ItemCount = ({ stock, inicial }) => {
    const [cant, setCant] = useState(inicial)

    function agregarUno() {
        if (cant < stock) {
            return setCant(cant + 1)
        } else {return;}
    }
    function restarUno() {
        if (cant > 1) {
            return setCant(cant - 1)
        } else {return;}
    }
    if (stock !== 0) {
        return (
            <div className="card" style={{width: "18rem"}}>
                <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p>Fila Styling - $9.490</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <button type="button" class="btn btn-warning" onClick={() => {restarUno()}}>-</button>
                            <p className="numero">{cant}</p>
                            <button type="button" class="btn btn-warning" onClick={() => {agregarUno()}}>+</button>
                        </div>
                        <div className="padre">
                            <button type="button" class="btn btn-warning">Añadir al carro</button>
                        </div>
                    </div> 
            </div>
    )}
}

export default ItemCount;