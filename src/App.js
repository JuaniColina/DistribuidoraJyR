import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/counter';
import Navbar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
function App() {

  const accept = () => {
    console.log ('cancele')
  }
  return (
    <div className="App">
      
        <Counter />
        <Navbar />
        <ItemListContainer greeting={'Bienvenidos'} />
    </div>
  );
}

export default App;
