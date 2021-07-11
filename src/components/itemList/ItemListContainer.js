import React from 'react'
import ItemCount from '../itemCount/ItemCount'

const ItemListContainer = ({titulo, texto}) => {

    return (
            
        <section className="hero">
            <div>
                <p className="title">{titulo}</p>
                <p className="subtitle">
                    {texto}
                </p>
                <ItemCount stock="8" />


            </div>
        </section>
        

    )
    
}

export default ItemListContainer