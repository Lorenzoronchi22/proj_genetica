import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { xml2json } from 'xml-js';
import { phylotree } from 'phylotree';
import './App.css'
import Phylotree_viewer from './phyloreader';

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

// Caricamento file dalla directory Public e creazione albero
function loadPhyloXMLFromPublic() {
  try {
    const phylo_xml_tree = 'chr11_54,438,913-54,454,947.tree.xml';
    
    // Creo l'albero filogenetico utilizzando phylotree
    const tree = new phylotree(phylo_xml_tree);
    
    // Restituisco l'albero
    return tree;
  } catch (error) {
    console.error('Error parsing PhyloXML:', error);
    return null;
  }
}


const phyloTree = loadPhyloXMLFromPublic();
console.log(phyloTree)




export default App
