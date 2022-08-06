import './App.css';
import NavBar from "./componentes/NavBar"
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer
      texto="Hola, bienvenidos a mi e-commerce de zapatillas!"
      />
    </div>
  );
}

export default App;
