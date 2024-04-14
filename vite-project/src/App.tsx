import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { phylotree } from 'phylotree';
import './App.css';
import PhyloXMLReader from './phyloreader';

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
      <PhyloXMLReader></PhyloXMLReader>
    </>
  )
}

// Caricamento file dalla directory Public e creazione albero
function loadPhyloXMLFromPublic() {
  try {
    //const phylo_xml_tree = '((((Pig:0.147969,Cow:0.21343):0.085099,Horse:0.165787,Cat:0.264806):0.058611, ((RhMonkey{Foreground}:0.002015,Baboon{Foreground}:0.003108){Foreground}:0.022733 ,(Human{Foreground}:0.004349,Chimp{Foreground}:0.000799){Foreground}:0.011873):0.101856) :0.340802,Rat:0.050958,Mouse:0.09795)';
    const phylo_xml_tree = '/chr11_54,438,913-54,454,947.tree.xml';

    // Creo l'albero filogenetico utilizzando phylotree
    const tree = new phylotree(phylo_xml_tree);
    //var fs = require('fs');
    //var px = require('./phyloxml').phyloXml;
   // var stream = fs.createReadStream(xmlFile, {encoding: 'utf8'});
    //px.parseAsync(stream, {trim: true, normalize: true});
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
