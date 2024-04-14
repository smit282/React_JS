import './App.css';
import Propsdata from './Component/Propsdata';
import Propscard from './Component/Propscard';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center' }}>

      {Propsdata.map((cvalue, index, array) => {
        console.log(cvalue, "cvalue")
        return <Propscard key={index} name={cvalue.name} discription={cvalue.discription} coures={cvalue.coures} button={cvalue.button} image={cvalue.image} />
      })}

      </div>
    </div>
  );
}

export default App;