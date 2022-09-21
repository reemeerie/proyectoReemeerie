import React from "react"
import ItemList from "./ItemList"
import "../style/ItemListContainer.css"
import  db  from "../services"
import { collection, getDocs } from 'firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'

const ItemListContainer = () => {

    const [zapas, setZapas] = useState([])

    useEffect(() => {

        const getColData = async () => {
            
            try {
                const data = collection(db, "zapatillas")
                const col = await getDocs(data)
                const res = col.docs.map((doc)=> doc.data())
                setZapas(res)
            }
            catch (error) {
                console.log(error)
            }
        }

        getColData()
        
    }, [])



    return (
    <>
        {zapas.length < 1 ?     <div className="container customContainer">
                                    <div className="spinner-border text-warning spinner" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            :   <div className="container customContainer">
                                    <ItemList zapas={zapas}/>
                                </div>}
    </>
    )
}

export default ItemListContainer;