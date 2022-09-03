import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from "./componentes/NavBar"
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { CartProvider } from "./context/CartContext"
import Cart from './pages/Cart';

function App() {
  return (
    <>
    <CartProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
      </CartProvider>
    </>
  );
}

export default App;
