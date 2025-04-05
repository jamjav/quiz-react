import React from "react";
import classNames from "classnames";

export function Button({ children, onClick, className, type = "button" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={classNames(
                "px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition",
                className
            )}
        >
            {children}
        </button>
    );
}