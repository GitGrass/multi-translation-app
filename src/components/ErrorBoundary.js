import React from 'react';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.eventHandler = this.updateError.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  updateError() {
    this.setState({ hasError: true });
  }

  componentDidMount() {
    window.addEventListener('unhandledrejection', this.eventHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.eventHandler);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
