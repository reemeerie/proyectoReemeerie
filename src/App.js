import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from "./componentes/NavBar"
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
