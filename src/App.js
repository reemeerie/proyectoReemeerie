import './App.css';
import NavBar from "./componentes/NavBar"
import ItemListContainer from './componentes/ItemListContainer';
import ItemCount from './componentes/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer texto="Hola, bienvenidos a mi e-commerce de zapatillas!">
        <ItemCount/>
      </ItemListContainer>
    </div>
  );
}

export default App;
