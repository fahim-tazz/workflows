import { BaseEdge, EdgeLabelRenderer, getBezierPath as getStraightPath, useReactFlow } from '@xyflow/react';

export default function StandardEdge({ id, source, target, sourceX, sourceY, targetX, targetY, data }) {
  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const { setEdges, setNodes } = useReactFlow();

  const handleAddNode = () => {
    const newNodeId = `node-${Date.now()}`

    const newNodePosition = {
      x: (sourceX + targetX) / 2,
      y: (sourceY + targetY) / 2
    };

    const newNode = {
      id: newNodeId,
      position: newNodePosition,
      data: { label: "New Action" },
      type: "action"
    }

    const updaters = data
    const newEdges = [
      {
        id: `e-${source}-${newNodeId}`,
        source,
        target: newNodeId,
        type: 'standard', // Adjust the type as needed
        animated: true,
        label: 'Edge to New Node',
        data: {
          nodesUpdater: updaters.nodesUpdater,
          edgesUpdater: updaters.edgesUpdater
        }
      },
      {
        id: `e-${newNodeId}-${target}`,
        source: newNodeId,
        target,
        type: 'standard', // Adjust the type as needed
        animated: true,
        label: 'Edge from New Node',
        data: {
          nodesUpdater: updaters.nodesUpdater,
          edgesUpdater: updaters.edgesUpdater
        }
      }
    ]
    setNodes((nds) => {
      const newArray = nds.concat(newNode)
      console.log("The new nodes array is:", newArray)
      return newArray
    });
    setEdges((eds) => {
      const newArray = eds.filter((e) => e.id !== id).concat(newEdges);
      console.log("The new edges array is:", newEdges);
      return newArray;
    });
  };

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: 'all',
          }}
          className="flex"
        >
          <button
            onClick={handleAddNode}
            className="nodrag nopan w-4 h-4 flex items-center justify-center border border-gray-300 rounded bg-gray-50 text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            +
          </button>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}