import React from 'react'
import cart from '../../../src/cart.png'

const CartWidget = () => {

    return (
            
            <div className="navbar-item">
                <div className="buttons"> 
                    <a className="button is-primary">
                        <span className="icon">
                            <img src={cart} />
                        </span>
                    </a>
                </div>
            </div>
            

    )
    
}

export default CartWidget