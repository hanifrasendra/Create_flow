import { useState } from 'react';
import { pathToKey } from './flow'

function useFlow() {
    const [ path, setPath ] = useState(['Main']);
    const [ pathLabels, setPathLabels ] = useState(['Main']);
    const [ levels, setLevels ] = useState({ Main: { nodes: [], edges: [] } }); 

    function onNewLayer(node, nodes, edges, setNodes, setEdges) {
        const currentKey = pathToKey(path);
        const newPath = [...path, node.id];
        const newKey = pathToKey(newPath);

        const currentLabel = [...pathLabels, node.data.label];

        setLevels((prev) => {
            
            const updatedLevels = {
                ...prev, 
                [currentKey]: { nodes: nodes, edges: edges }
            };

            const targetLevel = updatedLevels[newKey] || { nodes: [], edges: [] };
            
            // Pindahkan setNodes dan setEdges ke dalam scope ini agar data valid
            setNodes(targetLevel.nodes);
            setEdges(targetLevel.edges);
            setPath(newPath);
            setPathLabels(currentLabel);

            return updatedLevels;
        });
    }   

    return{
        path,
        pathLabels,
        levels,
        setLevels,
        onNewLayer
    }
}

export {
    useFlow
};