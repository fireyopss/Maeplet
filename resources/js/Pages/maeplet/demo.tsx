import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import { useState, useEffect,useCallback } from 'react';

import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const edges = [{ id: '1-2', source: '1', label:'sleep', target: '2' }];

const nodes = [
    {
      id: '1', // required
      position: { x: 0, y: 0 }, // required
      data: { label: 'launch browser' }, // required
    },
    {
        id: '2',
        position: { x: 100, y: 100 },
        data: { label: 'sleep' },
      },
      {
        id: '3',
        position: { x: 100, y: 100 },
        data: { label: 'fetch html with AI' },
      }
  ];

const FlowDemo = () => {
    return (
        <div className='h-screen'>
        <ReactFlow nodes={nodes} edges={edges}>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    )
}

export default FlowDemo;