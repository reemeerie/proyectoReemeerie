import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import zapatillas from "../zapatillas.json"
import Card from './Card'

const ItemList = () => {
    const [zapas, setZapas] = useState([])

    useEffect(() => {
        const conexion = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(zapatillas)
            }, 2000);
        })

        conexion.then(res => setZapas(res))
        .catch((err) => console.log(err))
        .finally(()=>console.log("fin promesa"))
    }, [])

    return ( <> 
    {zapas.length < 1 ? <h2>Cargando...</h2>
    :zapas.map((zapa)=><Card img={zapa.img} nombre={zapa.nombre} precio={zapa.precio}/>)}
        </>)
}

export default ItemList;