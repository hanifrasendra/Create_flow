import { addEdge, MarkerType, StraightEdge } from "@xyflow/react"

function handleConnect(params, setEdges) {
    setEdges((eds) => addEdge({ 
        ...params, 
        type: 'default',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 20,
            height: 20,
            color: '#64748b'
        }
    }, eds));
}

const edgeTypes = {
    'custom-edge': StraightEdge
}

export {
    edgeTypes,
    handleConnect
}