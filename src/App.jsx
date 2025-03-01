import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(Number(localStorage.getItem( "count")))

     useEffect(() => {
         localStorage.setItem("count", count);
     },   [count]);
  return (
    <>
      <div className='App'>
          Hello World!
          <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
          </button>
      </div>  
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
