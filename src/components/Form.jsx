import React from 'react'
import "../style/Form.css"
import { useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import db from '../services'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const navigate = useNavigate()

    const { total, itemsCarrito, clearCarro } = useContext(CartContext)

    const [formulario, setFormulario] = useState({
        buyer: {
            nombre: '',
            apellido:'',
            email: '',
            telefono: ''
        },
        total: total,
        items: itemsCarrito
    })

    const { buyer: {nombre, apellido, email, telefono}} = formulario

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            buyer: {
                ...formulario.buyer,
                [name]: value
            }
        })
    }

    const saveToFirebase = async (orden) => {
        try {
            if (!nombre || !apellido || !email || !telefono) {
                return Swal.fire({
                    title: 'Error',
                    text: 'Completa todos los campos',
                    icon: 'warning',
                    confirmButtonText: 'Bueno',
                    confirmButtonColor: '#ffc107',
                    focusConfirm: 'false'
                  })
            }
            setTimeout(() => navigate('/'), 3000)

            const col = collection(db, "ordenes")

            const generarOrden = await addDoc(col, orden)


            clearCarro();

            Swal.fire({
                title: 'Listo!',
                text: `Orden registrada con ID ${generarOrden.id}, muchas gracias por su compra`,
                icon: 'success',
                timer: 5000,
                timerProgressBar: true,
                showConfirmButton: false,
            })
        }
        catch (error) {
            console.log(error)
        }
    }

  return (
        <div className='elPadre'>
            <form action="" className='contenedor'>
                <div className='container form'>
                    <div className="form-floating mb-3 mt-3">
                        <input value={nombre} name='nombre' type="text" onChange={handleChange} className="form-control" id="floatingNombre" placeholder="Nombre" required/>
                        <label htmlFor="floatingInput">Nombre</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={apellido} name='apellido' type="text" onChange={handleChange} className="form-control" id="floatingApellido" placeholder="Apellido"/>
                        <label htmlFor="floatingInput">Apellido</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={telefono} name='telefono' type="text" onChange={handleChange} className="form-control" id="floatingTelefono" placeholder="Telefono"/>
                        <label htmlFor="floatingInput">Telefono</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={email} name='email' type="email" onChange={handleChange} className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                </div>
                <div onClick={() => saveToFirebase(formulario)} className="card-button">
                    Terminar mi compra
                </div>
            </form>
        </div>
  )
}

export default Form