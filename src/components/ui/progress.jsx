import React from "react";

export function Progress({ value, max = 100 }) {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    return (
        <div className="w-full h-4 bg-gray-200 rounded">
            <div
                className="h-full bg-blue-500 rounded"
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
}