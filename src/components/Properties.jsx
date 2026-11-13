import { TreePanel } from "./FileTree";
import Propertypanel from "./Propertypanel";


function Properties({ nodes, node, editNode, levels, path, flow }) {

    return(
        <aside className="properties">
            <h1>Property</h1>
            <section>
                <Propertypanel
                key={node?.id}
                node={node}
                editNode={editNode}
                />
            </section>
            <TreePanel
            nodes={nodes}
            levels={levels}
            path={path}
            flow={flow}
            />
        </aside>
    )
}

export default Properties;