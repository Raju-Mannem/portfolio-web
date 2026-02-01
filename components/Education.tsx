"use client";
import { useRef } from "react";
import { Node, ReactFlow, Handle, Position } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion, useScroll, useTransform } from "framer-motion";

type Data = {
  year: string;
  degree: string;
  institution: string;
};

const EducationNode = ({ data }: { data: Data }) => (
  <div className="relative px-6 py-4 bg-white/90 backdrop-blur-xl shadow-lg rounded-xl text-white w-[260px] text-center border border-purple-100">
    <Handle
      type="target"
      position={Position.Top}
      className="opacity-0 !left-1/2 -translate-x-1/2"
      style={{ left: "50%", transform: "translateX(-50%)", opacity: 0 }}
    />
    <div className="flex flex-col gap-1">
      <span className="text-xs text-[#7c3aed] font-mono tracking-widest uppercase font-bold">
        {data.year}
      </span>
      <h3 className="text-lg text-black font-bold leading-tight">
        {data.degree}
      </h3>
      <p className="text-sm text-black/60">{data.institution}</p>
    </div>
    <Handle
      type="source"
      position={Position.Bottom}
      className="opacity-0 !left-1/2 -translate-x-1/2"
      style={{ left: "50%", transform: "translateX(-50%)", opacity: 0 }}
    />
  </div>
);

const nodeTypes = { eduNode: EducationNode };

export default function EducationHierarchy() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const nodes: Node[] = [
    {
      id: "1",
      type: "eduNode",
      data: {
        year: "2025 - 2023",
        degree: "B.S. Computer Science",
        institution: "Acharya Nagarjuna University",
      },
      position: { x: 0, y: 0 },
    },
    {
      id: "2",
      type: "eduNode",
      data: {
        year: "2023 - 2025",
        degree: "Master of Computer Applications",
        institution: "Acharya Nagarjuna University",
      },
      position: { x: 0, y: 200 },
    },
  ];

  const edges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      type: "straight",
      style: { stroke: "#ffffff", strokeWidth: 3, strokeDasharray: "5,5" },
    },
  ];

  return (
    <div
      ref={containerRef}
      className="w-full h-[120vh] flex items-center justify-center px-4 md:px-24 py-64"
      id="education"
    >
      <motion.div
        style={{ scale, opacity }}
        className="relative w-full h-[600px] bg-[#7c3aed] backdrop-blur-md rounded-2xl grid grid-cols-1 md:grid-cols-3 place-items-center overflow-hidden shadow-2xl"
      >
        <style>{`.react-flow__attribution { display: none !important; }`}</style>

        <div className="col-span-1 h-full w-full bg-gradient-to-br from-[#7c3aed] to-[#4c1d95] flex flex-col items-center justify-center border-r border-white/10">
          <h2 className="text-4xl font-bold text-white">Education</h2>
        </div>

        <div className="relative col-span-2 w-full h-full min-h-[500px]">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
            panOnDrag={false}
            zoomOnScroll={false}
            panOnScroll={false}
            zoomOnPinch={false}
            zoomOnDoubleClick={false}
            nodeOrigin={[0.5, 0]}
            fitView
            fitViewOptions={{ padding: 0.3 }}
          />
        </div>
      </motion.div>
    </div>
  );
}
