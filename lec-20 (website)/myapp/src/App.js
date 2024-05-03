// import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Headerslider from './components/Headerslider';
import Homepage1 from './components/Homepage1';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Navbar/>
        {/* <Routes> */}
          {/* <Route path="/" element={<Home/>}/>
          <Route path="#" element={<Homepage/>}/> */}
          <Headerslider/>
          <Homepage1/>
        {/* </Routes> */}
        <Footer/>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;