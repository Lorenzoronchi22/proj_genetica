import React, { useState, useEffect } from 'react';
import { phylotree } from 'phylotree';

const PhyloXMLReader = () => {
  const [phyloXMLString, setPhyloXMLString] = useState(null);

  useEffect(() => {
    const fetchPhyloXML = async () => {
      try {
        const response = await fetch('/chr11_54,438,913-54,454,947.tree.xml'); // Assicurati che il percorso sia corretto
        if (!response.ok) {
          throw new Error('Errore nel recupero del file PhyloXML');
        }
        const xmlString = await response.text();
        setPhyloXMLString(xmlString);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPhyloXML();
  }, []);
  
  return (
    <div>
      {phyloXMLString && (
        <div>
          <h2>Contenuto del file PhyloXML:</h2>
          <pre>{phyloXMLString}</pre>
        </div>
      )}
    </div>
  );
};


export default PhyloXMLReader;








