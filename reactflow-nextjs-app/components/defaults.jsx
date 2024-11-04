import Startnode from "./Startnode";
import Endnode from "./Endnode";
import Actionnode from "./Actionnode";
import StandardEdge from "./StandardEdge";

const styles = {
  color: "black",
}

export const initialNodes = [
  { id: '1', type: "start", position: { x: 0, y: 0 }, data: { label: "Start Node" } },
  { id: '2', type: "end", position: { x: 0, y: 100 }, data: { label: 'End Node' } },
];
const dummyUpdater = (nds) => { console.log("DUmmy updater") }

// export const initialEdges = [
//   {
//     id: 'e1-2',
//     type: "standard",
//     source: '1',
//     target: '2',
//     data: {
//       nodesUpdater: dummyUpdater,
//       edgesUpdater: dummyUpdater
//     }
//   }
// ];

export const nodeTypes = {
  start: Startnode,
  end: Endnode,
  action: Actionnode
};

export const edgeTypes = {
  standard: StandardEdge
}