//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Produit from './produit';
import ProduitCreate from './produitCreate';
import ProduitRead from './produitRead';
import ProduitUpdate from './produitUpdate';

function App() {
  return (
    <div className="App">
      <h1>CRUD PRODUITS</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Produit />}> </Route>
          <Route path='/produit/create' element={<ProduitCreate />}></Route>

          <Route path='/produit/read/:prodid' element={<ProduitRead />}></Route>
          <Route path='/produit/update/:prodid' element={<ProduitUpdate />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
