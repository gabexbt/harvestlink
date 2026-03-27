'use client';

import { useState, useEffect, useRef } from 'react';

const responses = [
  {
    keywords: ["mango", "mangga"],
    reply: "Mango prices today in Iloilo are at ₱38/kg — trending up. Best selling point is Iloilo City Public Market. Juan's Produce is buying at ₱36/kg right now, 3.2km from you."
  },
  {
    keywords: ["tomato", "kamatis"],
    reply: "Tomatoes are at ₱28/kg today, slightly down from last week. Ramos Agri-Trading in Jarro is actively buying — they're 1.5km away."
  },
  {
    keywords: ["price", "presyo", "magkano", "how much"],
    reply: "Here are today's prices in Iloilo City:\n• Mango: ₱38/kg ↑\n• Tomato: ₱28/kg ↓\n• Corn: ₱15/kg →\n• Rice: ₱22/kg ↑\n\nPrices are updated from DOST data. Want me to find buyers for a specific crop?"
  },
  {
    keywords: ["buyer", "sell", "sino", "who"],
    reply: "Here are verified buyers near you:\n1. Juan's Produce — Iloilo City Public Market (3.2km) — buys Mango, Corn\n2. Ramos Agri-Trading — Jarro (1.5km) — buys Tomato, Rice\n3. Villanueva Store — Pavia (5.1km) — buys Mango, Rice\n\nTap 'Find Buyers' on the home screen to contact them directly."
  },
  {
    keywords: ["rain", "weather", "flood", "ulan"],
    reply: "⚠️ Active advisory: Heavy rain warning in Iloilo. Expect transport delays and possible price fluctuations in corn and rice over the next 3–5 days. Consider selling sooner if your produce is ready."
  },
  {
    default: "I can help you with crop prices, finding buyers, and weather advisories in Iloilo. Try asking: 'What's the price of mango today?' or 'Who can I sell my tomatoes to?'"
  }
];

export default function ChatScreen({ setActiveScreen }) {
  const [messages, setMessages] = useState([
    { role: 'user', content: "I have 50 kilos of mango in Iloilo. What's a fair price?" },
    { role: 'ai', content: "Based on current market data, a fair price is ₱35–₱42 per kilo. Prices are highest right now at Iloilo City Public Market.\n\nWould you like me to find buyers near you?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // AI Logic
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let replyContent = '';

      const match = responses.find(r => 
        r.keywords && r.keywords.some(k => lowerInput.includes(k))
      );

      if (match) {
        replyContent = match.reply;
      } else {
        replyContent = responses.find(r => r.default).default;
      }

      setMessages(prev => [...prev, { role: 'ai', content: replyContent }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col h-full bg-bg">
      {/* Header */}
      <header className="h-14 bg-primary flex items-center px-4 sticky top-0 z-10 shadow-sm">
        <button onClick={() => setActiveScreen('home')} className="text-white p-2 -ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex-1 text-center">
          <h1 className="text-white font-bold text-lg">HarvestLink AI</h1>
        </div>
        <div className="w-10"></div>
      </header>

      {/* Chat Area */}
      <main 
        ref={scrollRef}
        className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4 pb-20"
      >
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
            {msg.role === 'ai' && (
              <span className="text-[10px] text-light mb-1 ml-1">HarvestLink AI</span>
            )}
            <div 
              className={`max-w-[85%] p-3 text-sm shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-primary text-white rounded-l-2xl rounded-br-2xl' 
                  : 'bg-card border border-border text-dark rounded-r-2xl rounded-bl-2xl'
              }`}
            >
              <p className="whitespace-pre-line leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex flex-col items-start">
            <span className="text-[10px] text-light mb-1 ml-1">HarvestLink AI</span>
            <div className="bg-card border border-border p-3 rounded-r-2xl rounded-bl-2xl shadow-sm">
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 bg-light rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-light rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-light rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Input Bar */}
      <div className="fixed bottom-16 left-0 right-0 max-w-[430px] mx-auto bg-white border-t border-border p-3 flex items-center gap-3">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
          className="flex-1 bg-bg border border-border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <button 
          onClick={handleSend}
          className="bg-primary p-2.5 rounded-full text-white active:scale-95 transition-transform"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  );
}
