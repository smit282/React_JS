import './App.css';
import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0)
    const increment = () => {
      setCount(count + 1)
    }
    const decrement = () => {
      setCount(count - 1)
    }
    
    return (
      <body className='bg-gradient-to-r from-cyan-500 to-blue-500 '>
        <div className="App flex items-center justify-center min-h-screen">
          <button className='bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full py-3 px-5 text-xl italic' onClick={increment}>Increment</button>
          <h3 className="ml-6 text-3xl italic">{count}</h3>
          <button className='ml-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full py-3 px-6 text-xl italic' onClick={decrement}>Decrement</button>
        </div>
      </body>
    );
}

export default App;