import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    return (
        <div>
            <h1>{props.texto}</h1>
            <ItemCount stock={15}/>
        </div>
    )
};

export default ItemListContainer;