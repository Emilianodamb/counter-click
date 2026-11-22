import { useState } from 'react'
import Counter from './components/counter/Counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const handleClick = () => setCount(count + 1)

  const handleReset = () => setCount(0)

  return (
    <div className="app-container">
      <h1>Contador de Clics!</h1>
      <Counter props={count}/>

      <div className="buttons">
        <button onClick={handleClick} className='click-btn'>
          Click
        </button>
        <button onClick={handleReset} className='reset-btn'>
          Reset
        </button>
      </div>
      
    </div>
  )
}

export default App
