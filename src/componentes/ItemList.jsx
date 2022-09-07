import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import zapatillas from "../zapatillas.json"
import Item from './Item'
import "../style/ItemList.css"
import  db  from "../services"
import { collection, getDocs } from 'firebase/firestore'

const ItemList = () => {
    const [zapas, setZapas] = useState([])

    useEffect(() => {
        /* CONEXION A GOOGLE FIREBASE */
        const getColData = async () => {
            try {
                const data = collection(db, "zapatillas")
                const col = await getDocs(data)
                const res = col.docs.map((doc)=> doc.data())
                console.log(res)
                setZapas(res)
            }
            catch (error) {
                console.log(error)
            }
        }
        getColData()
        
        /* MOCK PROMESA */

        /* const conexion = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(zapatillas)
            }, 1500);
        })

        conexion.then(res => setZapas(res))
        .catch((err) => console.log(err))
        .finally(()=>console.log("fin promesa")) */
    }, [])

    return ( <> 
                {zapas.length < 1 ? <div className="spinner-border text-warning spinner" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    :zapas.map((zapa)=><Item img={zapa.img} nombre={zapa.nombre} precio={zapa.precio} id={zapa.id} precioNumero={zapa.precioNumero}/>
                                    )}
            </>)
}

export default ItemList;