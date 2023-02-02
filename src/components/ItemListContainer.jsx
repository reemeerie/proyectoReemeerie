import React from "react"
import ItemList from "./ItemList"
import "../style/ItemListContainer.css"
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"

const ItemListContainer = () => {
    const [zapas, setZapas] = useState([])

    useEffect(() => {
        const getAllZapas = async () => {
            const response = await axios.get('https://snk-api.vercel.app/api/v1/zapatillas')
            setZapas(response.data.data)
        }

        getAllZapas()
    }, [])

    return (
    <>
        {zapas.length < 1 ?    <div className="container customContainer">
                                    <div className="spinner-border text-warning spinner" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            :   <div className="customContainer">
                                    <ItemList zapas={zapas}/>
                                </div>}
    </>
    )
}

export default ItemListContainer;