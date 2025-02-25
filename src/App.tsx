import { ChatProvider } from './context/ChatContext';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';
import ContextPanel from './components/ContextPanel';
import { useState } from 'react';

function App() {
  const [showContext, setShowContext] = useState(true);

  return (
    <ChatProvider>
      <div className="h-screen flex flex-col bg-gradient-to-br from-dark via-dark-lighter to-dark-light">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative flex flex-col h-screen">
          <Header onToggleContext={() => setShowContext(!showContext)} />
          <div className="flex-1 flex overflow-hidden">
            <main className="flex-1 relative max-w-5xl mx-auto w-full backdrop-blur-sm">
              <ChatInterface />
            </main>
            {showContext && (
              <aside className="w-80 border-l border-white/10 bg-dark-lighter/50 backdrop-blur-md hidden lg:block">
                <ContextPanel />
              </aside>
            )}
          </div>
        </div>
      </div>
    </ChatProvider>
  );
}

export default App;