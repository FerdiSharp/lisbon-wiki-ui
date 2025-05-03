import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PersonalInfo from "./components/PersonalInfo.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PersonalInfo fullName='Ferdi Keskin' age='47'/>
        <PersonalInfo fullName='Nuriye Demirci Keskin' age='49'/>
        <p></p>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>      
      </div>      
    </>
  )
}

export default App
