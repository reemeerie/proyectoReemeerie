import React from "react"
import CartWidget from "./CartWidget"
import "../style/NavBar.css"


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container-fluid ">
                <a className="navbar-brand" href="#">The Sneakers Store</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Marcas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre nosotros</a>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center justify-content-center padreLinks">
                        <CartWidget />
                        <i className="fa-solid fa-user text-dark icon fa-lg"></i>
                        <a href="#" className="links">Log in</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;