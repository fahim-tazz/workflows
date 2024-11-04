import React from 'react';

const Overlay = ({ onClose, node, onUpdate }) => {
    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    let newLabel: string;
    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(node.id, newLabel);
        onClose()
    }

    return (
        <div
            className="fixed inset-0 flex justify-end z-50"
            onClick={handleBackgroundClick}
        >
            <div className="bg-black bg-opacity-50 w-2/3 h-full" />
            <div className="bg-white p-6 w-1/3 h-full shadow-lg">
                <h2 className="text-xl font-bold text-black mb-4">Action</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-black">Action Name</label>
                        <input
                            type="text"
                            value={newLabel}
                            placeholder={node.data.label}
                            className="w-full px-3 py-2 border rounded text-black"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-500 text-white rounded mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Overlay;