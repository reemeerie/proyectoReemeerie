import React from 'react'
import { useState } from 'react'
import Item from './Item'
import "../style/ItemList.css"

const ItemList = (props) => {
    
    const [zapas, setZapas] = useState(props.zapas)

    return (
                <div className="container customContainer">
                    {zapas.map((zapa, index)=><Item key={index} img={zapa.img} nombre={zapa.nombre} precio={zapa.precio} id={zapa.id} precioNumero={zapa.precioNumero}/>)}
                </div>)
}

export default ItemList;