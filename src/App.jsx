import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import About from './components/About'
import viteLogo from '/vite.svg'
import './App.css'
import './sass/main.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <About/>
    <Header/>
      <div>
      
      </div>
    </div>
  )
}

export default App
