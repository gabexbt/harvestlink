'use client';

import { useState } from 'react';

const cropData = [
  { 
    id: 1, name: 'Mango', emoji: '🥭', variety: 'Carabao', price: 53, trend: 'up', change: '+₱15', category: 'Fruits',
    history: [45, 42, 48, 50, 48, 53, 53],
    stats: { highest: 55, lowest: 42, demand: 'High' }
  },
  { 
    id: 2, name: 'Tomato', emoji: '🍅', variety: 'Native', price: 28, trend: 'down', change: '-₱2', category: 'Vegetables',
    history: [32, 35, 33, 30, 31, 30, 28],
    stats: { highest: 35, lowest: 28, demand: 'Medium' }
  },
  { 
    id: 3, name: 'Corn', emoji: '🌽', variety: 'Yellow', price: 15, trend: 'stable', change: 'no change', category: 'Grains',
    history: [14, 15, 15, 15, 14, 15, 15],
    stats: { highest: 16, lowest: 14, demand: 'Medium' }
  },
  { 
    id: 4, name: 'Rice', emoji: '🌾', variety: 'Well-milled', price: 22, trend: 'up', change: '+₱1', category: 'Grains',
    history: [20, 21, 21, 22, 21, 21, 22],
    stats: { highest: 23, lowest: 20, demand: 'High' }
  },
  { 
    id: 5, name: 'Onion', emoji: '🧅', variety: 'Red', price: 45, trend: 'up', change: '+₱5', category: 'Vegetables',
    history: [38, 40, 39, 41, 42, 40, 45],
    stats: { highest: 48, lowest: 38, demand: 'High' }
  },
  { 
    id: 6, name: 'Kangkong', emoji: '🥬', variety: 'Fresh', price: 12, trend: 'down', change: '-₱1', category: 'Vegetables',
    history: [14, 13, 14, 12, 13, 13, 12],
    stats: { highest: 15, lowest: 12, demand: 'Low' }
  },
  { 
    id: 7, name: 'Banana', emoji: '🍌', variety: 'Saba', price: 18, trend: 'stable', change: 'no change', category: 'Fruits',
    history: [18, 17, 18, 18, 19, 18, 18],
    stats: { highest: 20, lowest: 17, demand: 'Medium' }
  },
];

export default function PricesScreen({ setActiveScreen }) {
  const [filter, setFilter] = useState('All');
  const [selectedCrop, setSelectedCrop] = useState(null);
  const filters = ['All', 'Fruits', 'Vegetables', 'Grains'];

  const filteredCrops = filter === 'All' 
    ? cropData 
    : cropData.filter(crop => crop.category === filter);

  if (selectedCrop) {
    const maxVal = Math.max(...selectedCrop.history);
    
    return (
      <div className="flex flex-col h-full bg-bg">
        {/* Header */}
        <header className="h-14 bg-primary flex items-center px-4 sticky top-0 z-10 shadow-sm">
          <button onClick={() => setSelectedCrop(null)} className="text-white p-2 -ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex-1 text-center">
            <h1 className="text-white font-bold text-lg">{selectedCrop.name} Stats</h1>
          </div>
          <div className="w-10"></div>
        </header>

        <main className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-6 pb-24 animate-in fade-in slide-in-from-right-4 duration-300">
          {/* Main Info Card */}
          <div className="bg-card border border-border rounded-3xl p-6 shadow-sm flex flex-col items-center text-center space-y-4">
            <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center text-4xl shadow-inner">
              {selectedCrop.emoji}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark">{selectedCrop.name}</h2>
              <p className="text-mid text-sm font-medium">{selectedCrop.variety} Variety</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-dark">₱{selectedCrop.price}</span>
              <span className="text-mid text-xs font-bold uppercase tracking-wider">Per Kilogram</span>
            </div>
          </div>

          {/* Price History Section */}
          <div className="bg-card border border-border rounded-3xl p-6 shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-dark">Price History</h3>
              <span className="text-light text-[10px] font-bold uppercase tracking-widest">Last 7 Days</span>
            </div>
            
            {/* Simple Bar Chart */}
            <div className="h-40 flex items-end justify-between gap-2 pt-4">
              {selectedCrop.history.map((val, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                  <div 
                    className={`w-full rounded-t-lg transition-all duration-500 ${
                      idx === 6 ? 'bg-primary shadow-[0_0_12px_rgba(45,106,79,0.3)]' : 'bg-primary/20'
                    }`}
                    style={{ height: `${(val / maxVal) * 100}%` }}
                  ></div>
                  <span className={`text-[8px] font-bold ${idx === 6 ? 'text-primary' : 'text-light'}`}>
                    Day {idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-border rounded-2xl p-4 space-y-1 shadow-sm">
              <p className="text-light text-[10px] font-bold uppercase tracking-wider">Highest (7d)</p>
              <p className="text-xl font-bold text-dark">₱{selectedCrop.stats.highest}</p>
            </div>
            <div className="bg-white border border-border rounded-2xl p-4 space-y-1 shadow-sm">
              <p className="text-light text-[10px] font-bold uppercase tracking-wider">Lowest (7d)</p>
              <p className="text-xl font-bold text-dark">₱{selectedCrop.stats.lowest}</p>
            </div>
            <div className="bg-white border border-border rounded-2xl p-4 col-span-2 flex items-center justify-between shadow-sm">
              <div>
                <p className="text-light text-[10px] font-bold uppercase tracking-wider">Market Demand</p>
                <p className="text-xl font-bold text-primary">{selectedCrop.stats.demand}</p>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3].map(i => (
                  <div 
                    key={i} 
                    className={`h-2 w-8 rounded-full ${
                      selectedCrop.stats.demand === 'High' ? 'bg-primary' : 
                      selectedCrop.stats.demand === 'Medium' && i < 3 ? 'bg-amber' : 
                      selectedCrop.stats.demand === 'Low' && i < 2 ? 'bg-red-500' : 'bg-border'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <button 
            onClick={() => setActiveScreen('buyers')}
            className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Find Buyers for {selectedCrop.name}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </main>
      </div>
    );
  }

      {/* Filter Pills */}
      <div className="flex overflow-x-auto no-scrollbar gap-2 px-4 py-3 bg-bg sticky top-14 z-10 border-b border-border">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
              filter === f ? 'bg-primary text-white shadow-sm' : 'bg-white border border-border text-mid active:bg-gray-50'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Crop List */}
      <main className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-3 pb-24">
        {filteredCrops.map(crop => (
          <div 
            key={crop.id} 
            onClick={() => setSelectedCrop(crop)}
            className="bg-card border border-border p-4 rounded-xl flex items-center justify-between shadow-sm active:scale-[0.98] transition-all cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-2xl">
                {crop.emoji}
              </div>
              <div>
                <h3 className="font-bold text-dark">{crop.name}</h3>
                <p className="text-light text-xs">{crop.variety}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end space-x-1">
                <span className="font-bold text-dark text-lg">₱{crop.price}/kg</span>
                {crop.trend === 'up' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                )}
                {crop.trend === 'down' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                  </svg>
                )}
                {crop.trend === 'stable' && (
                  <div className="w-3 h-1 bg-light rounded-full ml-1"></div>
                )}
              </div>
              <p className={`text-[10px] ${
                crop.trend === 'up' ? 'text-green-600' : crop.trend === 'down' ? 'text-red-600' : 'text-light'
              }`}>
                {crop.change} from yesterday
              </p>
            </div>
          </div>
        ))}

        {/* Updated Text */}
        <div className="py-6 text-center">
          <p className="text-light text-[10px] uppercase tracking-wider">
            Updated 10 minutes ago  ·  DOST Data
          </p>
        </div>
      </main>
    </div>
  );
}
