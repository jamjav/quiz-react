import React from "react";
import classNames from "classnames";

// Contenedor general de una tarjeta
export function Card({ children, className }) {
    return (
        <div className={classNames("border rounded-lg shadow-md bg-white", className)}>
            {children}
        </div>
    );
}

// Contenido interior de la tarjeta
export function CardContent({ children, className }) {
    return (
        <div className={classNames("p-4", className)}>
            {children}
        </div>
    );
}