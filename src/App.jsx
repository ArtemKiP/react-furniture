import {Route,Routes} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Catalog from "./pages/Catalog/Catalog";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Room from "./pages/Room/Room";
import NotFound from "./pages/NotFound/NotFound";
import {useEffect, useState} from "react";


import api from "./config/Api/api";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Favorites from "./pages/Favorites/Favorites";

function App() {
    // const [users, setUsers] = useState([]);

//     useEffect(() => {
// api('users').json()
//     .then((res) => console.log(res))
//     }, []);

  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/catalog' element={<Catalog/>}/>
                <Route path='/product/:id' element={<Product/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/room' element={<Room/>}/>
                <Route path='/favorites' element={<Favorites/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>

        </Routes>
    </>
  )
}

export default App
