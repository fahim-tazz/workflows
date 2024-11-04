import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  Connection,
  MiniMap,
  Background,
  Controls,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import { initialNodes, initialEdges, nodeTypes, edgeTypes } from "@/components/defaults";
import OverlayAction from "@/components/OverlayAction";

const nodeColor = (node: Node) => {
  if (node.type == "start") {
    return 'green'
  } else if (node.type == "end") {
    return 'red'
  } else {
    return 'white'
  }
}

export default function Flow() {
  const [openNode, setOpenNode] = useState(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [isEdgesUpdated, setIsEdgesUpdated] = useState(false)
  // console.log("Current edges array is ", edges);
  // if (!isEdgesUpdated) {
  //   setEdges((eds) => initialEdges.map((ed) => {
  //     return {
  //       ...ed,
  //       data: { nodesUpdater: setNodes, edgesUpdater: setEdges }
  //     };
  //   }));
  //   setIsEdgesUpdated(true)
  //   console.log("Updated edges to have nodesUpdater", edges)
  // }

  // useEffect(() => {
  //   if (!isEdgesUpdated) {
  //     setEdges((eds) =>
  //       initialEdges.map((ed) => ({
  //         ...ed,
  //         data: { nodesUpdater: setNodes, edgesUpdater: setEdges },
  //       }))
  //     );
  //     setIsEdgesUpdated(true);
  //   }
  // }, []);
  // useEffect(() => { console.log("Updated edges to have nodesUpdater", edges[0].data.nodesUpdater) }, [edges]);

  const initialEdges = [
    {
      id: 'e1-2',
      type: "standard",
      source: '1',
      target: '2',
      data: {
        nodesUpdater: setNodes,
        edgesUpdater: setEdges
      }
    }
  ];

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );


  const handleNodeClick = (event, node) => {
    if (node.type != "start" && node.type != "end") {
      console.log("The current nodes array is:", nodes)

      setOpenNode(node);
    }
  }

  const closeOverlay = () => {
    setOpenNode(null)
  }

  const updateNode = (nodeId, newLabel) => {
    console.log("current nodes are ", nodes)
    setNodes((nds) =>
      nds.map((node) => {
        console.log("Checking node", node.id, "against updated node:", nodeId)
        return node.id == nodeId
          ? { ...node, data: { ...(node.data), label: newLabel } }
          : node
      }
      )
    );
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        defaultNodes={initialNodes}
        defaultEdges={initialEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        onNodeClick={handleNodeClick}
      >
        <MiniMap nodeColor={nodeColor} />
        <Background color="#ccc" variant='cross' bgColor='white' />
        <Controls className='text-black' />
      </ReactFlow>
      {(openNode) && <OverlayAction onClose={closeOverlay} node={openNode} onUpdate={updateNode} />}
    </div>
  );
}