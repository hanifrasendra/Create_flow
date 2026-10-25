import { BaseEdge, getStraightPath, getArr } from '@xyflow/react';

function StraightEdge({ id, sourceX, sourceY, targetX, targetY }) {
    const [straightPath] = getStraightPath({
        sourceX,
        sourceY,
        targetX,
        targetY
    })

    return(
        <BaseEdge id={id} path={straightPath} />
    )
}

export {
    StraightEdge
}