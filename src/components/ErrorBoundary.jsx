import React from 'react';

/**
 * Error Boundary component to catch JavaScript errors anywhere in the child component tree
 * and display a fallback UI instead of crashing the entire application
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);

    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#faf8f5] p-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-stone-200">
            <div className="mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-stone-900 mb-2">
                Oops! Something went wrong
              </h2>
              <p className="text-gray-600 mb-6 text-sm">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
            </div>

            <div className="space-y-3.5">
              <button
                onClick={this.handleReload}
                className="w-full bg-[#D4AF37] text-black px-6 py-3 rounded-full font-bold hover:bg-[#bc962b] transition-colors duration-300 shadow-md"
              >
                Refresh Page
              </button>

              <button
                onClick={() => window.history.back()}
                className="w-full bg-stone-200 text-stone-800 px-6 py-3 rounded-full font-bold hover:bg-stone-300 transition-colors duration-300"
              >
                Go Back
              </button>
            </div>

            {/* Development mode: Show error details */}
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-xs text-gray-500 hover:text-gray-700">
                  Error Details (Development Mode)
                </summary>
                <div className="mt-2 p-3 bg-stone-50 rounded-lg text-xs text-gray-700 overflow-auto max-h-40 border border-stone-200">
                  <div className="font-semibold mb-1">Error:</div>
                  <div className="mb-3 whitespace-pre-wrap">{this.state.error.toString()}</div>

                  <div className="font-semibold mb-1">Component Stack:</div>
                  <div className="whitespace-pre-wrap">{this.state.errorInfo.componentStack}</div>
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
