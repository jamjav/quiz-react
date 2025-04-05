import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error en el componente hijo:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Algo salió mal. Por favor, inténtalo más tarde.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;