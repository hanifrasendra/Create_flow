  import { useState, useEffect, useCallback } from 'react'
  import { ReactFlow, Controls, Background, useNodesState, useEdgesState } from '@xyflow/react'
  import { nodeTypes, createNewNode, editNode } from './nodes/nodeTypes';
  import { edgeTypes, handleConnect } from './Edges/edgeTypes';
  import { useFlow } from './flowcanvas/FlowCanvas';
  import { pathToKey } from './flowcanvas/flow';
  import '@xyflow/react/dist/style.css'; 

  import Header from './components/Header';
  import Aside from './components/Aside';
  import Properties from './components/Properties'



  function App() {
    const [ nodes, setNodes, onNodesChange ] = useNodesState([]);
    const [ edges, setEdges, onEdgesChange ] = useEdgesState([]);
    const [ selectedNode, setSelectedNode ] = useState(null);

    const flow = useFlow();

    function onAddNode(node) {
      const centerX = window.innerWidth/2;
      const centerY = window.innerHeight/2;

      const centerPosition = {
        x: centerX,
        y: centerY,
      };

      const newNode = createNewNode(node, centerPosition);
      
      setNodes((nds) => {
        const updatedNodes = [...nds, newNode];

        flow.setLevels((prevLevels) => {
          const currentKey = pathToKey(flow.path);
          return {
            ...prevLevels,
            [currentKey]: {
              nodes: updatedNodes,
              edges: edges
            }
          }
        })

        return updatedNodes;
      })
    }

    const onConnect = useCallback((params) => {
      handleConnect(params, setEdges, 'default')
    }, [setEdges])

    function onEditNode(node) {
      editNode(node)  
    }

    return (
      <div className={`w-screen h-screen flex flex-col`}>
        <Header 
        path={flow.pathLabels}
        onNavigate={(index) => flow.handleNavigate(index, setNodes, setEdges)}
        />
        <div className={`flex flex-1`}>
          <Aside 
          onAddNode={onAddNode}
          />
          <main className={`flex-1`}>
            <ReactFlow 
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodeClick={(event, node) => setSelectedNode(node)}
            onPaneClick={() => setSelectedNode(null)}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeDoubleClick={(event, node) => flow.onNewLayer(node, nodes, edges, setNodes, setEdges)}  
            >
              <Background />
              <Controls />
            </ReactFlow>
          </main>
          <Properties 
          nodes={nodes}
          node={selectedNode}
          editNode={onEditNode}
          levels={flow.levels}
          path={flow.path}
          flow={flow}
          />
        </div>
      </div>
    );
  }

  export default App
