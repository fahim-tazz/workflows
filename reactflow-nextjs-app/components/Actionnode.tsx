import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

const handleClick = () => {

}

function Actionnode({ data }) {
    return (
        <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
            <div className="flex">
                <div className="text-black">
                    {data.label}
                </div>
            </div>

            <Handle
                type="target"
                position={Position.Top}
                className="w-16 !bg-blue-500"
            />
            <Handle
                type="source"
                position={Position.Bottom}
                className="w-16 !bg-blue-500"
            />
        </div>
    );
}

export default memo(Actionnode);