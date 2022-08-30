import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import zapatillas from "../zapatillas.json"
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [zapatilla, setZapatilla] = useState({})

    useEffect(() => {
        const conexion = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(zapatillas.find((zapa)=> zapa.id === id))
            }, 2000)
        })
        conexion.then((data)=> setZapatilla(data))
        .catch((err) => console.log(err))
        .finally(()=>console.log("fin promesa"))
    }, [id])

  return ( <>
        {Object.keys(zapatilla).length == 0  ? <div className="spinner-border text-warning spinner" role="status">
        <span className="visually-hidden">Loading...</span></div>
        : <ItemDetail nombre={zapatilla.nombre} precio={zapatilla.precio} img={zapatilla.img}/>}
  </>
  )
}

export default ItemDetailContainer