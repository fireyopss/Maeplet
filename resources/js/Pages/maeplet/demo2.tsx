import { useState, useEffect,useCallback } from 'react';
import { NodeEditor } from "flume";

import FlumeDefaultConfig from './config';

const Demo2 = () => {
    return (
        <div className='h-screen'>

            <NodeEditor
               portTypes={FlumeDefaultConfig.portTypes}
               nodeTypes={FlumeDefaultConfig.nodeTypes}
               
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