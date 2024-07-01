import './App.css'
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home'
import {Routes,Route,Link,NavLink} from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Header from './compenents/Header';

function App() {
  return (
    <>
      <Toaster position='top-right'></Toaster>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shopping-cart' element={<ShoppingCart/>}></Route>
      </Routes>
  
    </>
  )
}




export default App
