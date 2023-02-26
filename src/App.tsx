import { useState } from 'react'
import Game from './components/game'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Game />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <p className="read-the-docs">
        Inspired by <a href="https://reactjs.org/docs/getting-started.html">React</a>
      </p>
    </div>
  )
}

export default App
