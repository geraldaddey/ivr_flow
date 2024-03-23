import React from "react";
import {
  nodes as initialNodes,
  edges as initialEdges,
} from "../initial_element"; 
import { useDrag } from "react-dnd";
import { FaSalesforce, FaPhone, FaCheck, FaTags, FaLink, FaComment }  from "react-icons/fa";

const componentNames = {

  custom: "Salesforce",
  caller: "CallerIntent",
  condition: "Condition",
  tags: "Tags",
  connect: "Connect",
  default: "Annotation"
};

const getNodeIcon = (nodeType) => {
  switch (nodeType) {
    case "custom":
      return <FaSalesforce />;
    case "caller":
      return <FaPhone />;
    case "condition":
      return <FaCheck />;
    case "tags":
      return <FaTags />;
    case "connect":
      return <FaLink />;
    default:
      return <FaComment />;
  }
};
const getNodeStyle = (nodeType) => {
  let backgroundColor;
  switch (nodeType) {
    case "custom":
      backgroundColor = "#add8e6";
      break;
    case "caller":
      backgroundColor = "#680493";
      break;
    case "condition":
      backgroundColor = "#d63030";
      break;
    case "tags":
      backgroundColor = "#e7e73a";
      break;
    case "connect":
      backgroundColor = "#aeade6";
      break;
    default:
      backgroundColor = "gray";
  }
  return {
    backgroundColor,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    margin: "20px auto",
  };
};

export default () => {
 const onDragStart = (event, nodeType) => {
   event.dataTransfer.setData("application/reactflow", nodeType);
   event.dataTransfer.effectAllowed = "copy";
 };
  return (
    <aside>
      <div className="description">
        You can drag these nodes to the flow on the left.
      </div>
      {initialNodes.map((node) => (
        <div
          key={node.id}
          // className={`dndnode ${node.type}`}
          onDragStart={(event) => onDragStart(event, node.type)}
          draggable
          style={{ ...getNodeStyle(node.type) }}
        >
          { getNodeIcon( node.type ) }
        </div>
      ))}
    </aside>
  );
};
