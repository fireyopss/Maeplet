import { useState, useEffect,useCallback } from 'react';
import { NodeEditor } from "flume";

import FlumeDefaultConfig from './config';

import "./demo2.css"

const Demo2 = () => {

    const [nodes, setNodes] = useState({})



    // useEffect(()=>{},[])


    return (
        <div className='h-screen'>

            <NodeEditor
               portTypes={FlumeDefaultConfig.portTypes}
               nodeTypes={FlumeDefaultConfig.nodeTypes}
                onChange={(nodes)=>{
                    console.log(nodes)
                    setNodes(nodes)
                }}
               defaultNodes={[
                {
                  type: "homepage",
                  x: 190,
                  y: -150
                }
              ]}
            />

        </div>
    )
}

export default Demo2;
