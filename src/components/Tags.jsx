import React, { memo } from "react";
import { FaBeer } from "react-icons/fa";
import { Handle, useReactFlow, useStoreApi, Position } from "reactflow";

const options = [
  {
    value: "smoothstep",
    label: "Smoothstep",
  },
  {
    value: "step",
    label: "Step",
  },
  {
    value: "default",
    label: "Bezier (default)",
  },
  {
    value: "straight",
    label: "Straight",
  },
];

function Select({ value, handleId, nodeId }) {
  const { setNodes } = useReactFlow();
  const store = useStoreApi();

  const onChange = (evt) => {
    const { nodeInternals } = store.getState();
    setNodes(
      Array.from(nodeInternals.values()).map((node) => {
        if (node.id === nodeId) {
          node.data = {
            ...node.data,
            selects: {
              ...node.data.selects,
              [handleId]: evt.target.value,
            },
          };
        }

        return node;
      })
    );
  };

  return (
    <div className="custom-node__select">
      <div>Name Type</div>
      <select className="nodrag" onChange={onChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Handle type="source" position={Position.Right} id={handleId} />
    </div>
  );
}
function Tags({ id, data }) {
  return (
    <>
      <div className="custom-node__header">
        {/* <FaBeer icon={FaBeer} /> */}
        <strong> Tags </strong>
      </div>
      <div className="custom-node__body">
        {Object.keys(data.selects).map((handleId) => (
          <div
            key={handleId}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <label htmlFor={handleId} style={{ marginRight: "10px" }}>
              {data.selects[handleId]}
            </label>

            <input
              type="radio"
              id={handleId}
              name={handleId}
              value={data.selects[handleId]}
              onChange={(evt) => {
                // Handle radio button change here
              }}
            />
            <Handle type="target" position={Position.Top} id={handleId} />
            <Handle type="source" position={Position.Right} id={handleId} />
          </div>
        ))}
      </div>
    </>
  );
}

export default memo(Tags);
