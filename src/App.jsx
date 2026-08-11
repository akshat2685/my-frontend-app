import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>🚀 Live CI/CD Pipeline Update!</h1>
      <p>This change was deployed automatically via GitHub Actions.</p>
      <div style={{ margin: '20px' }}>
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
    </div>
  )
}

export default App