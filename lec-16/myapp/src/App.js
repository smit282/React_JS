import { createContext } from 'react';
import './App.css';
import ComA from './components/ComA';

const Context1 = createContext();
function App() {
return(
  <div className="App">
    <Context1.Provider value="react-JS">
    <ComA/>
    </Context1.Provider>
  </div>
);
}
export {Context1}
export default App;