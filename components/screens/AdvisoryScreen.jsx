'use client';

const advisoryData = [
  { 
    id: 1, 
    type: 'warning', 
    title: 'Heavy Rain Warning in Iloilo', 
    body: 'Expect delays in transport and possible price changes in corn and tomato over the next 3–5 days. Plan your selling schedule accordingly.', 
    time: '20 minutes ago', 
    icon: '⚠️' 
  },
  { 
    id: 2, 
    type: 'good', 
    title: 'Mango Season Peak in Western Visayas', 
    body: 'Good time to sell now. Market demand is high — prices have risen ₱3/kg this week. Best selling point: Iloilo City Public Market.', 
    time: '1 hour ago', 
    icon: '📈' 
  },
  { 
    id: 3, 
    type: 'info', 
    title: 'DOST Market Report — March 2026', 
    body: 'Weekly price bulletin now available. Onion prices rising due to reduced supply from Nueva Ecija.', 
    time: '3 hours ago', 
    icon: 'ℹ️' 
  },
  { 
    id: 4, 
    type: 'warning', 
    title: 'Pest Alert: Mango Pulp Weevil', 
    body: 'Reported cases in Guimaras. Inspect your mango produce before selling. Affected fruit rejected at market.', 
    time: 'Yesterday', 
    icon: '⚠️' 
  },
  { 
    id: 5, 
    type: 'good', 
    title: 'Rice Prices Trending Up', 
    body: 'Price increase of ₱1/kg recorded this week. Recommend holding stock if possible for 5–7 more days.', 
    time: 'Yesterday', 
    icon: '📈' 
  }
];

export default function AdvisoryScreen({ setActiveScreen }) {
  const getBorderColor = (type) => {
    switch (type) {
      case 'warning': return 'border-l-[#F4A261]';
      case 'good': return 'border-l-[#2D6A4F]';
      case 'info': return 'border-l-[#3B82F6]';
      default: return 'border-l-border';
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case 'warning': return 'text-[#F4A261]';
      case 'good': return 'text-[#2D6A4F]';
      case 'info': return 'text-[#3B82F6]';
      default: return 'text-mid';
    }
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
          <h1 className="text-white font-bold text-lg">Advisories For You</h1>
        </div>
        <div className="w-10"></div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4 pb-24">
        {advisoryData.map(advisory => (
          <div 
            key={advisory.id} 
            className={`bg-card border border-border border-l-4 p-4 rounded-xl shadow-sm flex space-x-3 active:bg-gray-50 transition-colors ${getBorderColor(advisory.type)}`}
          >
            <div className={`text-xl shrink-0 ${getIconColor(advisory.type)}`}>
              {advisory.icon}
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="font-bold text-dark leading-tight">{advisory.title}</h3>
              <p className="text-mid text-sm leading-relaxed">{advisory.body}</p>
              <div className="text-right">
                <span className="text-light text-[10px] uppercase tracking-wide font-medium">{advisory.time}</span>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
