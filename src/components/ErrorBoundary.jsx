import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("App error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050b16] flex items-center justify-center px-6 text-center">
          <div className="max-w-md rounded-2xl border border-cyan-400/20 bg-[#08111f] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">Portfolio Error</p>
            <h2 className="mt-3 text-2xl font-bold text-white">Something went wrong</h2>
            <p className="mt-3 text-sm text-slate-400">
              The page could not render properly. Please refresh the browser and try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
