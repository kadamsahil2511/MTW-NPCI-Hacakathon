import { ClockIcon } from '@heroicons/react/24/outline';

function ContextPanel() {
  return (
    <div className="h-full p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-200">Recent Chats</h2>
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors border border-gray-700"
          >
            <div className="flex items-start space-x-3">
              <ClockIcon className="h-5 w-5 text-gray-400 mt-0.5" />
              <div>
                <h3 className="font-medium text-sm text-gray-200">Previous Chat {i}</h3>
                <p className="text-xs text-gray-400 mt-1">Last message preview...</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContextPanel; 