import React, { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'You' }]);
      setInput('');
    }
  };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-4 bg-white rounded shadow-lg">
                <h1 className="mb-4 text-2xl font-bold text-center text-gray-800">Chat App</h1>
                <div className="h-64 p-2 mb-4 overflow-y-auto border border-gray-200 rounded">
                    {messages.map((message, index) => (
                        <div key={index} className="mb-2">
                            <span className="font-semibold">{message.sender}: </span>
                            <span>{message.text}</span>
                        </div>
                    ))}
                </div>
                <div className="flex">
                    <input
                        type="text"
                        className="flex-1 p-2 mr-2 border border-gray-300 rounded"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    />
                    <button
                        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                        onClick={handleSendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
