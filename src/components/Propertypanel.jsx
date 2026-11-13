import { useState } from 'react';
 
function Propertypanel({ node, editNode }) {
    const [ nodeProperty, setNodeProperty ] = useState({ label: node?.data.label, type: node?.type })

    function onChangeLabel(event) {
        const newLabel = event.target.value;

        setNodeProperty((prev) => ({
            ...prev, label: newLabel
        }))
    }

    function onSubmitChangeHandler(event) {
        event.preventDefault

        editNode(nodeProperty);
        setNodeProperty(nodeProperty);
    }

    if (!node) {
        return (
            <div className="p-4 text-gray-400 text-sm border-l">
                Pilih salah satu node untuk melihat properti.
            </div>
        );
    }

    return(
        <div>
            <form 
            onSubmit={onSubmitChangeHandler}
            action="">
                <label htmlFor="">Name</label>
                <input 
                className="block border"
                value={nodeProperty.label} onChange={onChangeLabel}
                />
                <label htmlFor="">type: {nodeProperty.type}</label>
            </form>
        </div>
    )
}

export default Propertypanel;