import { useChat } from '../context/ChatContext';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

function ChatInterface() {
  const { messages, addMessage, isLoading } = useChat();

  const handleSendMessage = (content: string) => {
    addMessage(content, 'user');
  };

  return (
    <div className="h-full flex flex-col bg-dark-lighter/30 backdrop-blur-md">
      <MessageList messages={messages} isLoading={isLoading} />
      <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
    </div>
  );
}

export default ChatInterface; 