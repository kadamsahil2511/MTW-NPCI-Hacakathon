import { Message } from '../types';
import { UserCircleIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

function MessageList({ messages, isLoading }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto py-4 px-4 md:px-6 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
      {messages.length === 0 && (
        <div className="h-full flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="bg-gradient-to-r from-accent-purple to-accent-pink p-3 rounded-xl inline-block">
              <ChatBubbleLeftRightIcon className="h-12 w-12 text-white" />
            </div>
            <p className="text-gray-400">Start a conversation by typing a message below.</p>
          </div>
        </div>
      )}
      
      <div className="space-y-6">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start space-x-3">
            {message.role === 'assistant' ? (
              <div className="flex-shrink-0 bg-gradient-to-r from-accent-purple to-accent-pink p-2 rounded-full">
                <ComputerDesktopIcon className="h-6 w-6 text-white" />
              </div>
            ) : (
              <div className="flex-shrink-0">
                <UserCircleIcon className="h-10 w-10 text-gray-400" />
              </div>
            )}
            <div
              className={`flex-1 rounded-2xl px-4 py-3 max-w-[85%] shadow-lg ${
                message.role === 'assistant'
                  ? 'bg-dark/80 border border-white/5'
                  : 'bg-gradient-to-r from-accent-blue to-accent-purple'
              }`}
            >
              <p className="text-sm text-white whitespace-pre-wrap">{message.content}</p>
              <span className="text-xs mt-1 block text-white/50">
                {new Date(message.timestamp).toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {isLoading && (
        <div className="flex items-start space-x-3 mt-6">
          <div className="flex-shrink-0 bg-gradient-to-r from-accent-purple to-accent-pink p-2 rounded-full">
            <ComputerDesktopIcon className="h-6 w-6 text-white" />
          </div>
          <div className="bg-dark/80 border border-white/5 rounded-2xl px-4 py-3 shadow-lg">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce delay-150" />
              <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce delay-300" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MessageList; 