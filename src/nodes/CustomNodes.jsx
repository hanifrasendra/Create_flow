import React from 'react'
import CustomHandle from '../Edges/CustomHandle'

function WebNode ({ data }) {
    
    return(
        <div
        className={`card
        ${data.color} ${data.border}    
        `}
        >
            <CustomHandle/>
            <div>
                <label htmlFor="text">{ data.label }</label>
            </div>
        </div>
    )
}

function ApiNode({ data }) {
    return(
        <div
        className={`card
        ${data.color} ${data.border}    
        `}
        >
            <CustomHandle/>
            <div>
                <label htmlFor="text">{ data.label }</label>
            </div>
        </div>
    )
}

function DatabaseNode({ data }) {
    return(
        <div
        className={`card
        ${data.color} ${data.border}    
        `}
        >
            <CustomHandle/>
            <div>
                <label htmlFor="text">{ data.label }</label>
            </div>
        </div>
    )
}

function ComponentNode({ data }) {
    return(
        <div
        className={`card
        ${data.color} ${data.border}    
        `}
        >
            <CustomHandle/>
            <div>
                <label htmlFor="text">{ data.label }</label>
            </div>
        </div>
    )
}
export { 
    WebNode, 
    ApiNode,
    DatabaseNode,
    ComponentNode
}