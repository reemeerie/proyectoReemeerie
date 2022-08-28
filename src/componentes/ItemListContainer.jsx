import React from "react"
import ItemList from "./ItemList"
import "../style/ItemListContainer.css"

const ItemListContainer = () => {
    return (<>
            <div className="container customContainer">
                <ItemList/>
            </div>
        </>
    )
};

export default ItemListContainer;