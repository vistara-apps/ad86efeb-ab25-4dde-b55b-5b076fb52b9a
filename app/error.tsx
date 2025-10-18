'use client';

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-surface rounded-lg border border-white/10 p-8 text-center">
        <div className="w-16 h-16 bg-error/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-8 h-8 text-error" />
        </div>
        <h2 className="text-2xl font-bold text-fg mb-2">Something went wrong</h2>
        <p className="text-fg/60 mb-6">
          We encountered an error while loading QualityVerse. Please try again.
        </p>
        <button
          onClick={reset}
          className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
