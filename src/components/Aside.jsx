import { TOOLS_NODE } from "../nodes/nodeTypes"
import "../index.css"

const Aside = ({ onAddNode }) => {
    

    function onNewNodeHandle(tool) {
        onAddNode(tool);
    }

    return(
        <div className={`h-full w-50 border-r p-[20px_10px]`}>
            <h1>ToolBox</h1>
            <div className={`flex flex-col gap-3 py-7`}>
                {TOOLS_NODE.map((tool) => (
                    <div
                    key={tool.type}
                    onClick={() => onNewNodeHandle(tool)}
                    className={`tool ${tool.border} ${tool.color} `}
                    >
                        <label htmlFor="">
                            {tool.label}
                        </label>
                    </div>
                ))}
            </div> 
        </div>
    )
}

export default Aside