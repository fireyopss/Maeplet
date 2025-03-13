import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import { useState, useEffect,useCallback } from 'react';

import { ReactFlow, Background, Controls,applyNodeChanges,applyEdgeChanges,addEdge, MiniMap } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
    {
      id: '1',
      type: 'input',
      data: { label: 'Input Node' },
      position: { x: 250, y: 25 },
    },

    {
      id: '2',
      // you can also pass a React component as a label
      data: { label: <div>Default Node</div> },
      position: { x: 100, y: 125 },
    },
    {
      id: '3',
      type: 'output',
      data: { label: 'Output Node' },
      position: { x: 250, y: 250 },
    },
  ];

  const initialEdges = [
    // { id: 'e1-2', source: '1', target: '2' },
    // { id: 'e2-3', source: '2', target: '3', animated: true },
  ];


const FlowDemo = () => {

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes:any) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes],
      );
      const onEdgesChange = useCallback(
        (changes:any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges],
      );

      const onConnect = useCallback(
        (connection:any) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges],
      );

      const defaultEdgeOptions = { animated: true };



    return (
        <div className='h-screen'>
        <ReactFlow
            draggable={true}
            nodes={nodes} edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            defaultEdgeOptions={defaultEdgeOptions}

        >
          {/* <Controls /> */}
          <MiniMap  nodeStrokeWidth={3} zoomable pannable />
          <Background />

        </ReactFlow>
      </div>
    )
}

export default FlowDemo;
