import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './components/navbar/navbar';
import Cart from './components/Cart/Cart';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 
import CartProvider from './context/CartContext';
function App() {

  return (
    <div className="App">
     <CartProvider>
       <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route
            path='/'
            element={
              <ItemListContainer
                greeting={"Bienvenidos a Distribuidora JyR"}
              />
            }
          />
         <Route
             path='/category/:categoryId'
             element={<ItemListContainer />}
          />
         <Route
            path='/detail/:productid'
            element={<ItemDetailContainer />}
          />
          <Route
           path='/Cart'
           element={<Cart />}
          />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
       </BrowserRouter> 
      </CartProvider>
    
      
        
    </div>
  );
}

export default App;
