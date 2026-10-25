  import { useState, useEffect, useCallback } from 'react'
  import { ReactFlow, Controls, Background, useNodesState, useEdgesState } from '@xyflow/react'
  import { nodeTypes, createNewNode } from './nodes/nodeTypes';
  import { edgeTypes, handleConnect } from './Edges/edgeTypes';
  import '@xyflow/react/dist/style.css'; 

  import Header from './components/Header';
  import Aside from './components/Aside';



  function App() {
    const [ nodes, setNodes, onNodesChange ] = useNodesState([]);
    const [ edges, setEdges, onEdgesChange ] = useEdgesState([]);

    function onAddNode(node) {
      const centerX = window.innerWidth/2;
      const centerY = window.innerHeight/2;

      const centerPosition = {
        x: centerX,
        y: centerY,
      };

      const newNode = createNewNode(node, centerPosition);
      
      setNodes((nds) => [...nds, newNode])
    }

    const onConnect = useCallback((params) => {
      handleConnect(params, setEdges, 'default')
    }, [setEdges])

    return (
      <div className={`w-screen h-screen flex flex-col`}>
        <Header />
        <div className="flex items-center gap-1 px-3 py-1 text-sm border-b">

        </div>
        <div className={`flex flex-1`}>
          <Aside 
          onAddNode={onAddNode}
          />
          <main className={`flex-1`}>
            <ReactFlow 
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            >
              <Background />
              <Controls />
            </ReactFlow>
          </main>
        </div>
      </div>
    );
  }

  export default App
