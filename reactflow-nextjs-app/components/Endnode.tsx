import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

function Endnode({ data }) {
    return (
        <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
            <div className="flex">
                <div className="text-black">
                    End
                </div>
                <div className="ml-2">
                    <div className="text-lg font-bold"></div>
                    <div className="text-gray-500"></div>
                </div>
            </div>

            <Handle
                type="target"
                position={Position.Top}
                className="w-16 !bg-red-500"
            />
            <Handle
                type="source"
                position={Position.Bottom}
                className="w-16 !bg-red-500"
            />
        </div>
    );
}

export default memo(Endnode);