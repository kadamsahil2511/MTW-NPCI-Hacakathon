import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

function Header({ onToggleContext }: { onToggleContext: () => void }) {
  return (
    <header className="bg-dark-lighter/50 backdrop-blur-md border-b border-white/10">
      <div className="h-16 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-accent-purple to-accent-pink p-2 rounded-lg">
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-xl font-semibold text-white">AI Assistant</h1>
        </div>
        <button
          onClick={onToggleContext}
          className="px-4 py-2 text-sm text-gray-300 hover:bg-white/10 rounded-md transition-all duration-300"
        >
          Toggle Context
        </button>
      </div>
    </header>
  );
}

export default Header; 