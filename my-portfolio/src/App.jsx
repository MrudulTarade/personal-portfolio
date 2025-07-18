import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <h1>This is the navbar</h1>
          </div>
        </nav>
      </header>
    </>
  )
}

export default App
