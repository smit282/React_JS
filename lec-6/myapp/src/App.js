// import './App.css';
import Card1 from './components/Card1';
import Img1 from './components/assets/c.png'
import Img2 from './components/assets/c++.jpg'
import Img3 from './components/assets/html.jpg'
import Img4 from './components/assets/css.png'
import Img5 from './components/assets/js.png'
import Img6 from './components/assets/React.png'

function App() {
  return (
    <div className="App">
        <div className='flex flex-wrap justify-evenly mt-48 rounded-full text-center display: flex;'>
            <Card1 name="C" img={Img1} title="devloper" p="The lorem text the section contain contains header having open andclose functionality." button="View More"/>
            <Card1 name="C++" img={Img2} title="devloper" p="The lorem text the section contain contains header having open andclose functionality." button="View More"/>
            <Card1 name="HTML" img={Img3} title="devloper" p="The lorem text the section contain contains header having open andclose functionality." button="View More"/>
            <Card1 name="CSS" img={Img4} title="devloper" p="The lorem text the section contain contains header having open andclose functionality."/>
            <Card1 name="JAVA SCRIPT" img={Img5} title="devloper" p="The lorem text the section contain contains header having open andclose functionality."/>
            <Card1 name="REACT" img={Img6} title="devloper" p="The lorem text the section contain contains header having open andclose functionality."/>
        </div>
    </div>
  );
}

export default App;