
import './App.css'
import Footer from './component/Footer';
import Sign from './component/form/Sign';
import Nav from './component/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Privatecomp from './component/Privatecomp';
import Login from './component/form/Login';
import Addcomponent from './component/Addcomponent';
import Products from './component/Products';


function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<Privatecomp/>} >
          <Route path="/HOME" element={<Products/>}></Route>
          <Route path="/add-product" element={<Addcomponent/>}></Route>
          <Route path="/update-product" element={"update product"}></Route>
          <Route path="/logout" element={"logout"}></Route>
          <Route path="/profile" element={"logout"}></Route>
          </Route>
          <Route path="/Sign" element={<Sign/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          
          
        </Routes>
      </BrowserRouter>
      
      <Footer/>
    </>
  );
}

export default App
