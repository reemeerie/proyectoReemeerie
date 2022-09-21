import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import "../style/ItemListContainer.css"
import db from '../services'
import { getDocs, collection, where, query } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [zapatilla, setZapatilla] = useState({})

    useEffect(() => {

        const getColData = async () => {
            try {
                const q = query(collection(db, "zapatillas"), where("id", "==", id))
                const col = await getDocs(q)
                const res = col.docs.map((doc)=> doc.data())
                setZapatilla(...res)
            }
            catch (error) {
                console.log(error)
            }
        }
        
        getColData()

    }, [id])

  return ( <>
            {Object.keys(zapatilla).length === 0  ? <div className="container customContainer">
                                                        <div className="spinner-border text-warning spinner" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </div>
                                                    </div>
                                                    :   <div className="container customContainer">
                                                            <ItemDetail nombre={zapatilla.nombre} precio={zapatilla.precio} img={zapatilla.img} inicial={1} stock={zapatilla.stock} id={zapatilla.id} precioNumero={zapatilla.precioNumero} marca={zapatilla.marca}/>
                                                        </div>}
            </>
  )
}

export default ItemDetailContainer