import { ReactFlow, Handle, Position, MarkerType } from "@xyflow/react";

import "@xyflow/react/dist/style.css";

const nodeTypes = {
  custom: CustomNode,
  final: FinalNode
};

const initialNodes = [
  { id: "d", position: { x: 0, y: 0 }, data: { label: "1", section: "AC" }, type: "custom" },
  { id: "abc", position: { x: 0, y: 100 }, data: { label: "2", section: "AC" }, type: "final" },
];
const initialEdges = [{ id: "e1-2", source: "d", target: "abc", reconnectable: true, markerEnd: { type: MarkerType.ArrowClosed } }];

function Graph() {
  return (
    <div className="w-[500px] h-[300px] border-solid border-red-300 border-2 rounded-md">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        fitView={true}
      />
    </div>
  );
}

function CustomNode({ data }: any) {
  return (
    <>
      <div className="bg-blue-950 rounded-full w-14 h-14 flex flex-col items-center justify-center">
      <div className="text-center text-white">{data.section}</div>
        <div className="text-center text-white">{data.label}</div>
      </div>
      <Handle type="source" position={Position.Bottom} style={{visibility: "hidden", bottom: "3px"}} />
    </>
  );
}

function FinalNode({ data }: any) {
  return (
    <>
      <Handle type="target" position={Position.Top} style={{visibility: "hidden", top: "3px"}} />
      <div className="bg-red-600 rounded-full w-14 h-14 flex flex-col items-center justify-center">
      <div className="text-center text-white">{data.section}</div>
        <div className="text-center text-white">{data.label}</div>
      </div>
    </>
  );
}

export default Graph;
