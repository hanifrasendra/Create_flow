import { Component } from 'react';
import { WebNode, ApiNode, DatabaseNode, ComponentNode } from './CustomNodes'

const STORAGE_KEY = 'fl_beta-v';

const TOOLS_NODE = [
  { 
    type: "web",
    label: "Web",
    icon: "W",
    color_icon: "text-blue-500",
    color: "bg-blue-200",
    border: "border-blue-500"
  },
  { 
    type: "api",
    label: "API",
    icon: "A",
    color_icon: "text-green-500",
    color: "bg-green-200",
    border: "border-green-700"
  },
  { 
    type: "database",
    label: "Database",
    icon: "D",
    color_icon: "text-yellow-500",
    color: "bg-yellow-200",
    border: "border-yellow-700"
  },
  { 
    type: "component",
    label: "Component",
    icon: "C",
    color_icon: "text-purple-500",
    color: "bg-purple-200",
    border: "border-purple-700"
  }
];



function createNewNode(node, position) {
  return {
    id: `${node.type}-${Date.now()}`,
    type: `${node.type}`,
    icon: `${node.icon}`,
    color_icon: `${node.color_icon}`,
    position: {
      x: position.x,
      y: position.y,
    },
    data: {
      label: `${node.label}`,
      color: `${node.color}`,
      border: `${node.border}`
    }


  }
}

function editNode(property) {
  
}

const nodeTypes = {
    web: WebNode,
    api: ApiNode,
    database: DatabaseNode,
    component: ComponentNode
}

export {
  TOOLS_NODE,
  STORAGE_KEY,
  nodeTypes,
  createNewNode,
  editNode,
}