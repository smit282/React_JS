import './App.css';
import React, {useRef} from "react"

function App() {
  const ref = useRef();
  console.log(ref, "ref");

    const handleRef = () => {
      // ref.current.focus();
      ref.current.style.color="red";
      // ref.current.style.display="none";
    }

    return (
      <div className="App">
        <input type="text" ref={ref}/>
        <button onClick={handleRef}>Click Me</button>
      </div>
    );
}

export default App;