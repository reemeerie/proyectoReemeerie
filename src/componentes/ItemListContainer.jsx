import React from "react"
import ItemList from "./ItemList"
import Contador from "./Contador"
import "../style/ItemListContainer.css"

const ItemListContainer = () => {
    return (<>
            <div className="container customContainer">
                <ItemList/>
                <Contador stock={15} inicial={1}/>
            </div>
        </>
    )
};

export default ItemListContainer;