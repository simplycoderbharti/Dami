import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './component/utils/store';
import './App.css';
import Home from './component/Home';
import Navbar from './component/navbar/Navbar';
import Products from './component/navbar/Products';
import Product from './component/Product';
import Cart from './component/Cart';
// import Login from './component/login';
// import LogIn from './component/LogIn';
import Registration from './component/Registration';
import Footer from './component/Footer';
import Testimonial from './component/Testimonial';
import SignIn from './component/SignIn';
import History from './component/History';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/testimonial' element={<Testimonial/>} />
          <Route path='/cart' element={<Cart/>} />
          
          <Route path='/register' element={<Registration/>} />
          <Route path='/signIn' element={<SignIn/>} />
          <Route path='/cartHistory' element={<History/>} />


          {/* <Slider/> */}

        </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
