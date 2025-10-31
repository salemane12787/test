import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';
import PoleIndustrie from './PoleIndustrie';

type LoadingState = 'loading' | 'fading' | 'hidden';

// Preloader component remains the same.
interface PreloaderProps {
  isFading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isFading }) => {
  return (
    <div
      className={`fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999] transition-opacity duration-500 ease-in-out
      ${isFading ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="w-16 h-16 border-4 border-gray-200 border-t-[#005A9E] rounded-full animate-spin"></div>
      <p className="mt-6 text-lg font-medium text-[#005A9E]">
        Chargement en cours...
      </p>
    </div>
  );
};

const App: React.FC = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>('loading');
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    // Preloader logic
    const loadingTimer = setTimeout(() => {
      setLoadingState('fading');
      const hideTimer = setTimeout(() => {
        setLoadingState('hidden');
      }, 500); // This duration must match the transition duration
      return () => clearTimeout(hideTimer);
    }, 2000); // Simulate a 2-second load time.

    // Hash change listener for routing
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      clearTimeout(loadingTimer);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    switch (route) {
      case '#pole-industrie':
        return <PoleIndustrie />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {loadingState !== 'hidden' && <Preloader isFading={loadingState === 'fading'} />}
      
      {/* The main content is rendered underneath the preloader and revealed on fade-out */}
      {renderContent()}
    </div>
  );
};

export default App;
