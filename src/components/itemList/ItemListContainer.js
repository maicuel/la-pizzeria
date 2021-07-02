import React from 'react'

const ItemListContainer = (props) => {

    return (
            
        <section class="section">
        <h1 class="title">{props.titulo}</h1>
        <h2 class="subtitle">
            {props.texto}
        </h2>
        </section>
        

    )
    
}

export default ItemListContainer