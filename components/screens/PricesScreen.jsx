'use client';

import { useState } from 'react';

const cropData = [
  { id: 1, name: 'Mango', emoji: '🥭', variety: 'Carabao', price: 38, trend: 'up', change: '+₱3', category: 'Fruits' },
  { id: 2, name: 'Tomato', emoji: '🍅', variety: 'Native', price: 28, trend: 'down', change: '-₱2', category: 'Vegetables' },
  { id: 3, name: 'Corn', emoji: '🌽', variety: 'Yellow', price: 15, trend: 'stable', change: 'no change', category: 'Grains' },
  { id: 4, name: 'Rice', emoji: '🌾', variety: 'Well-milled', price: 22, trend: 'up', change: '+₱1', category: 'Grains' },
  { id: 5, name: 'Onion', emoji: '🧅', variety: 'Red', price: 45, trend: 'up', change: '+₱5', category: 'Vegetables' },
  { id: 6, name: 'Kangkong', emoji: '🥬', variety: 'Fresh', price: 12, trend: 'down', change: '-₱1', category: 'Vegetables' },
  { id: 7, name: 'Banana', emoji: '🍌', variety: 'Saba', price: 18, trend: 'stable', change: 'no change', category: 'Fruits' },
];

export default function PricesScreen({ setActiveScreen }) {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Fruits', 'Vegetables', 'Grains'];

  const filteredCrops = filter === 'All' 
    ? cropData 
    : cropData.filter(crop => crop.category === filter);

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
          <h1 className="text-white font-bold text-lg">Today's Prices — Iloilo City</h1>
        </div>
        <div className="w-10"></div>
      </header>

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
          <div key={crop.id} className="bg-card border border-border p-4 rounded-xl flex items-center justify-between shadow-sm active:bg-gray-50 transition-colors">
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
