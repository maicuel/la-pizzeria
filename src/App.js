
import 'bulma/css/bulma.css';
import ItemListContainer from './components/itemList/ItemListContainer';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar name="La Pizzeria" />
      <ItemListContainer 
        titulo="Bienvenidos a la Pizzeria"
        texto="Las mejores pizzas a domicilio"
      />
    </div>
  );
}

export default App;
