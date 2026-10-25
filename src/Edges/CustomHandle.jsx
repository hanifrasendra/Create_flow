import React from 'react'
import { Handle, Position } from "@xyflow/react"
import "../index.css"

function CustomHandle() {
    const handlePositions = [
        { position: Position.Top, id: 'top' },
        { position: Position.Bottom, id: 'bottom' },
        { position: Position.Left, id: 'left' },
        { position: Position.Right, id: 'right' }
    ];

    return(
        <>
            {handlePositions.map(({ position, id }) => (
                <React.Fragment key={id}>
                    <Handle
                    type='target'
                    position={position}
                    id={`${id}-target`}
                    className="handle"
                    />
                    <Handle
                    type='source'
                    position={position}
                    id={`${id}-source`}
                    className="handle"
                    />
                </React.Fragment>
            ))}
        </>
    )
}

export default CustomHandle
