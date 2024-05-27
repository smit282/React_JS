import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Home from './components/Home/Home';
import Wishlist from './components/pages/Wishlist';
import Error from './components/pages/errorpage/Error';
import Signin from './components/pages/Signin';
import Shopdetail from './components/shop/Shopdetail';
import Shopdetail2 from './components/shop/Shopdetail2';
import About from './components/about/About';
import Shop from './components/shop/Shop';
import Cart from './components/pages/Cart';

// font-family-name :- jost

import {Provider} from "react-redux"
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path="/Signin" element={<Signin/>}/>
            <Route path="*" element={<Error/>}/>
            <Route path='/shopdetail' element={<Shopdetail/>}></Route>
            <Route path='/shopdetail2' element={<Shopdetail2/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/shop' element={<Shop/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;