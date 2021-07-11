import React, {useState } from 'react'

const ItemCount = ( {stock} )=> {
        const [count, setcount] = useState(0);
        
        function aumentar() {
            if(count === parseInt(stock) ){
                alert('llegaste al maximo de stock') 
                return; 
              }   
          setcount(count + 1);
        }

        function disminuir() {
            if(count === 0){
                return;  
              }              
          setcount(count - 1);
        }

    return (
        <>
        <div className="counterContainer">
            <button className="button" onClick={disminuir}>-</button>
            <div className="numberContainer">{count}</div>
            <button className="button" onClick={aumentar}>+</button>
            <button className="button is-success"> Comprar </button>
        </div>
        <p className="stock">Stock disponible {stock}</p> 
        </>
        

    )
    
}

export default ItemCount