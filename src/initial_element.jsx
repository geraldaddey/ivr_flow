import React from "react";
import { MarkerType, Position } from "reactflow";
import "./App.css";

export const nodes = [
  {
    id: "4",
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
    id: "5",
    type: "caller",
    position: { x: 300, y: 200 },
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
    id: "6",
    type: "condition",
    position: { x: 300, y: 200 },
    data: {
      selects: {
        "handle-0": "Yes",
        "handle-1": "No",
      },
    },
  },
  {
    id: "7",
    type: "tags",
    position: { x: 300, y: 200 },
    data: {
      selects: {
        "handle-0": "Next Step",
      },
    },
  },
  {
    id: "8",
    type: "connect",
    position: { x: 300, y: 200 },
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
    id: "7",
    type: "default",
    className: "annotation",
    data: {
      label: (
        <>
          On the bottom left you see the <strong>Controls</strong> and the
          bottom right the <strong>MiniMap</strong>. This is also just a node 🥳
        </>
      ),
    },
    draggable: false,
    selectable: false,
    position: { x: 150, y: 400 },
  },
];

export const edges = [
  { id: "e1-2", source: "1", target: "2", label: "this is an edge label" },
  { id: "e1-3", source: "4", target: "5", animated: true },
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
  {
    id: "e4-6",
    source: "4",
    target: "6",
    type: "smoothstep",
    sourceHandle: "handle-1",
    data: {
      selectIndex: 1,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];
