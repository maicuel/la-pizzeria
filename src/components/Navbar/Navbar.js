import React from "react"

import logo from '../../../src/logo.png';

const Navbar = (props) => {

    return (
            <>
            <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item" href="#">
                    <img src={logo} alt={props.name}></img>
                </div>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                <a className="navbar-item">
                    Inicio
                </a>

                <a className="navbar-item">
                    Nosotros
                </a>

                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                    Productos
                    </a>

                    <div className="navbar-dropdown">
                    <a className="navbar-item">
                        Pizzas
                    </a>
                    <a className="navbar-item">
                        Acompañamientos
                    </a>
                    <a className="navbar-item">
                        Postres
                    </a>
                    </div>
                </div>
                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <a className="button is-primary">
                    <span>Mi pedido</span>   
                    <span className="icon">
                        <i className="fas fa-shopping-cart"></i>
                    </span>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </nav>
            </>

    )
    
}

export default Navbar