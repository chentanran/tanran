import { Component } from "react";

interface State {
    hasError: boolean;
    message: string;
}

class ErrorBoundary extends Component {
  state: State;
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false
    } as State;
  }

  static getDerivedStateFromError(error: { message: any; }) {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>出错了： {this.state.message}</div>;
    }
    return (this.props as any).children;
  }
}

function Bbb() {
    const b = ((window as any).a as any).b;

    return <div>{b}</div>
}

export default function App() {
    return <Bbb></Bbb>
}