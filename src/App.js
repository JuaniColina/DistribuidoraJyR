import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 
import { useState } from 'react';
import Animation from './components/Animation/Animation';
function App() {

  return (
    <div className="App">
    
      <BrowserRouter>
        <Navbar /> 
        <Routes>
         <Route path='/' element ={<ItemListContainer greeting={'Bienvenidos a distribuidora JyR'} />}/>
         <Route path='/category/:categoryId' element={<ItemListContainer />}/>
         <Route path='/detail/:productid' element={<ItemDetailContainer />}/>
         <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
  </BrowserRouter> 

        
    </div>
  );
}

export default App;
