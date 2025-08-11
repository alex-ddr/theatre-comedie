// [TheatreComedie-Vite-Bold] #3
import React from "react";

type State = { hasError: boolean; error?: Error };

export default class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("UI error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto max-w-xl p-6">
          <h1 className="text-2xl font-bold">Une erreur est survenue</h1>
          <p className="mt-2 text-sm text-muted-foreground">Rechargez la page. Si le problème persiste, vérifiez la console.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
