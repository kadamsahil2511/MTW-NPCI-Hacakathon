import React, { useState } from 'react';
import { IndianRupee, Send, BookOpen, ArrowLeft } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your RBI Knowledge Assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Based on the latest RBI guidelines, I can help you with that query. Let me search through our knowledge base...',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);

    setInputMessage('');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center space-x-3 text-[#00875A] hover:text-[#006d48] transition-colors">
              <ArrowLeft size={24} />
              <span className="text-lg font-semibold">Back to Home</span>
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <IndianRupee size={32} className="text-[#00875A]" />
            <h1 className="text-2xl font-bold text-[#00875A]">Aatmanirbhar</h1>
          </div>
          <div className="w-[100px]"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 flex gap-4">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.isUser
                      ? 'bg-[#00875A] text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {!message.isUser && (
                    <div className="flex items-center space-x-2 mb-2">
                      <BookOpen size={20} className="text-[#FF8C42]" />
                      <span className="font-medium">RBI Assistant</span>
                    </div>
                  )}
                  <p className="text-[15px]">{message.text}</p>
                  <div
                    className={`text-xs mt-2 ${
                      message.isUser ? 'text-white/70' : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <form
            onSubmit={handleSendMessage}
            className="border-t border-gray-200 p-4 bg-white"
          >
            <div className="flex space-x-4">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about RBI policies, guidelines, or regulations..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00875A] focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-[#00875A] text-white px-6 py-2 rounded-lg hover:bg-[#006d48] transition-colors flex items-center space-x-2"
                disabled={!inputMessage.trim()}
              >
                <span>Send</span>
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>

        {/* Context Panel */}
        <div className="w-80 bg-white rounded-xl shadow-lg p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">Recent Documents</h2>
          <div className="space-y-4">
            <div className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
              <div className="flex items-center space-x-2 text-[#FF8C42]">
                <BookOpen size={16} />
                <span className="text-sm font-medium">UPI Guidelines 2025</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Latest updates to UPI transaction limits and security measures</p>
            </div>
            <div className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
              <div className="flex items-center space-x-2 text-[#FF8C42]">
                <BookOpen size={16} />
                <span className="text-sm font-medium">Digital Banking Framework</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Updated regulatory framework for digital banking operations</p>
            </div>
            <div className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
              <div className="flex items-center space-x-2 text-[#FF8C42]">
                <BookOpen size={16} />
                <span className="text-sm font-medium">Cryptocurrency Regulations</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Recent guidelines on digital asset management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;