import React from "react";
import { MarkerType, Position } from "reactflow";
import "./App.css";

export const nodes = [
  {
    id: "1",
    type: "custom",
    position: { x: 100, y: 200 },
    data: {
      selects: {
        "handle-0": "On Success",
        "handle-1": "On Fail",
      },
    },
  },
  {
    id: "2",
    type: "caller",
    position: { x: 100, y: 400 },
    data: {
      selects: {
        "handle-0": "Demo",
        "handle-1": "Pricing",
        "handle-2": "No Input",
        "handle-3": "Wrong Input",
      },
    },
  },
  {
    id: "3",
    type: "condition",
    position: { x: 500, y: 200 },
    data: {
      selects: {
        "handle-0": "Yes",
        "handle-1": "No",
      },
    },
  },
  {
    id: "4",
    type: "tags",
    position: { x: 500, y: 400 },
    data: {
      selects: {
        "handle-0": "Next Step",
      },
    },
  },
  {
    id: "5",
    type: "connect",
    position: { x: 800, y: 200 },
    data: {
      label: <>Sales</>,
      selects: {
        "handle-0": "Answer",
        "handle-1": "Hangup",
        "handle-2": "No Answe",
        "handle-3": "Failure",
      },
    },
  },
  {
    id: "6",
    type: "default",
    className: "annotation",
    data: {
      label: (
        <>
          This is a sample demo of an IVR flow. Styling and Theming can be customized for all components here including dragging functionality. You can use the controls below as well as the minimap. Let me know what you think Thomas.
        </>
      ),
    },
    draggable: false,
    selectable: false,
    position: { x: 150, y: 600 },
  },
];

export const edges = [
  {
    id: "e4-5",
    source: "1",
    target: "2",
    type: "smoothstep",
    sourceHandle: "handle-0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e4-6",
    source: "2",
    target: "3",
    type: "smoothstep",
    sourceHandle: "handle-0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e4-5",
    source: "3",
    target: "4",
    type: "smoothstep",
    sourceHandle: "handle-0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    type: "smoothstep",
    sourceHandle: "handle-0",
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  
];
