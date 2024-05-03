// import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Headerslider from './components/Headerslider';
import Homesec1 from './components/Homesec1';
import Homesec2 from './components/Homesec2';
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
          <Homesec1/>
          <Homesec2/>
        {/* </Routes> */}
        <Footer/>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;