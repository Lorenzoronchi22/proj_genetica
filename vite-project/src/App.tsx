import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import xmljs from 'xml-js';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

fetch('/chr11_54,438,913-54,454,947.tree.xml')
  .then(response => response.text())
  .then(data => {
    const jsonTree = xmljs.xml2json(data, { compact: true, spaces: 2 });
    console.log(jsonTree);
  })
  .catch(error => {
    console.error('Si è verificato un errore durante il recupero dei dati:', error);
  });



export default App
