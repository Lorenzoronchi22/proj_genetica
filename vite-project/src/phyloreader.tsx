import React, { useEffect } from 'react';
import phyloTree from 'phylotree';

function Phylotree_viewer({jsonTree}) {
  useEffect(() => {
    const tree = phyloTree();

    tree(jsonTree).svg("#phylo-tree");

    return () => {
      tree.clear();
    };
  }, [jsonTree]);

  return (
    <div id="phylo-tree" />
  );
}

export default Phylotree_viewer;







