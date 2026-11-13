import "../index.css";
import { pathToKey } from '../flowcanvas/flow';


function buildTree(levels) { 

    function buildChildren(parentKey, currentPath) {
        const levelData = levels[parentKey];
        console.log("current level in buildTree", levelData);

        return levelData.nodes.map((node) => {
            const newPath = [...currentPath, node.id];
            const childKey = pathToKey(newPath);

            return{
                id:       node.id,
                key:      childKey,
                label:    node.data.label,
                nodeType: node.type || node.data.nodeType,
                color_icon: node.color_icon || node.data.color_icon,
                color:   node.data.color,
                path:     newPath,
                children: levels[childKey] ? buildChildren(childKey, newPath) : []
            }
        })
    }

    return {
        key: 'Main',
        label: 'Main',
        path: ['Main'],
        node: null,
        children: buildChildren('Main', ['Main'])
    }
}
function TreeNode({ treeData, currentPath, depth = 0 }) {
    const hasChildren = treeData.children.length > 0;

    return(
        <div className="file_card"
        style={{ paddingLeft: `${depth * 20}px` }}
        >
            <div className="node_card">
                <div className={`tree_icon ${treeData.color_icon} ${treeData.color}`}>
                    {
                        treeData.nodeType ? treeData.nodeType.charAt(0).toUpperCase() : "M"
                    }
                </div>
                <p>{treeData.label}</p>
            </div>
            {hasChildren && (
                <div>
                    {treeData.children.map((childNode) => (
                        <TreeNode 
                            key={childNode.id || childNode.key}
                            treeData={childNode}
                            currentPath={currentPath}
                            depth={depth + 1} // Tambah kedalaman agar menjorok ke dalam
                        />
                    ))}
                </div>
            )}
        </div>
        
    )
}

function TreePanel({ flow }) {
    

    const treeData = buildTree(flow.levels);
    const currentPathKey = pathToKey(flow.path);
    
    return(
        <div className="node_tree">
            <TreeNode
            flow={flow}
            treeData={treeData}
            currentPath={currentPathKey}
            />
        </div>
    )
}

export { 
    TreeNode,
    TreePanel 
};