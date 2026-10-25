import { Component } from 'react';
import { WebNode, ApiNode, DatabaseNode, ComponentNode } from './CustomNodes'

const TOOLS_NODE = [
  { 
    type: "web",
    label: "Web",
    color: "bg-blue-200",
    border: "border-blue-700"
  },
  { 
    type: "api",
    label: "API",
    color: "bg-green-200",
    border: "border-green-700"
  },
  { 
    type: "database",
    label: "Database",
    color: "bg-yellow-200",
    border: "border-yellow-700"
  },
  { 
    type: "component",
    label: "Component",
    color: "bg-purple-200",
    border: "border-purple-700"
  }
];



function createNewNode(node, position) {
  return {
    id: `${node.type}-${Date.now()}`,
    type: `${node.type}`,
    position: {
      x: position.x,
      y: position.y,
    },
    data: {
      label: `${node.label}`,
      color: `${node.color}`,
    }


  }
}

const nodeTypes = {
    web: WebNode,
    api: ApiNode,
    database: DatabaseNode,
    component: ComponentNode
}

export {
  TOOLS_NODE,
  nodeTypes,
  createNewNode,
}