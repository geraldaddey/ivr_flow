import React, { useMemo,useState, useRef, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
} from "reactflow";
import "reactflow/dist/style.css";

import Sidebar from "./Sidebar";

import "../index.css";
import {
  nodes as initialNodes,
  edges as initialEdges,
} from "../initial_element";
import Salesforce from "./Salesforce";
import CallerIntent from "./CallerIntent";
import Condition from "./Condition";
import Tags from "./Tags";
import Connect from "./Connect";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );
  
    const nodeTypes = useMemo(
      () => ({
        custom: Salesforce,
        caller: CallerIntent,
        condition: Condition,
        tags: Tags,
        connect: Connect,
      }),
      []
    );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      // reactFlowInstance.project was renamed to reactFlowInstance.screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { selects: initialNodes[id].data.selects },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div className="dndflow">
      <DndProvider backend={HTML5Backend}>
        <ReactFlowProvider>
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              nodes={nodes} 
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              fitView
              attributionPosition="bottom-left"
              nodeTypes={nodeTypes}
            >
              <Controls />
            </ReactFlow>
          </div>
          <Sidebar />
        </ReactFlowProvider>
      </DndProvider>
    </div>
  );
};

export default DnDFlow;
