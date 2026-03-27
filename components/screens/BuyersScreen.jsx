'use client';

import { useState } from 'react';

const buyersData = [
  { id: 1, name: "Juan's Produce", location: "Iloilo City Public Market", distance: "3.2 km", buys: ["Mango", "Corn"], phone: "+63 912 345 6789", emoji: "🥭" },
  { id: 2, name: "Ramos Agri-Trading", location: "Jarro, Iloilo City", distance: "1.5 km", buys: ["Tomato", "Rice"], phone: "+63 933 221 4455", emoji: "🍅" },
  { id: 3, name: "Villanueva Store", location: "Pavia, Iloilo", distance: "5.1 km", buys: ["Mango", "Rice"], phone: "+63 917 889 0012", emoji: "🥭" },
  { id: 4, name: "San Jose Trading", location: "Leganes, Iloilo", distance: "7.8 km", buys: ["Corn", "Kangkong", "Banana"], phone: "+63 908 112 3344", emoji: "🌽" },
  { id: 5, name: "AgriMart Iloilo", location: "Mandurriao, Iloilo City", distance: "4.6 km", buys: ["Rice", "Onion"], phone: "+63 921 667 8890", emoji: "🌾" },
];

export default function BuyersScreen({ setActiveScreen }) {
  const [selectedBuyer, setSelectedBuyer] = useState(null);

  return (
    <div className="flex flex-col h-full bg-bg relative">
      {/* Header */}
      <header className="h-14 bg-primary flex items-center px-4 sticky top-0 z-20 shadow-sm">
        <button onClick={() => setActiveScreen('home')} className="text-white p-2 -ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex-1 text-center">
          <h1 className="text-white font-bold text-lg">Buyers Near You</h1>
        </div>
        <div className="w-10"></div>
      </header>

      {/* Map Placeholder */}
      <section className="h-[180px] bg-[#E8F0E9] relative overflow-hidden border-b border-border shrink-0">
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="border-[0.5px] border-white/30"></div>
          ))}
        </div>
        
        {/* Pins */}
        <span className="absolute top-10 left-10 text-2xl animate-bounce">📍</span>
        <span className="absolute top-24 left-40 text-2xl animate-bounce [animation-delay:0.2s]">📍</span>
        <span className="absolute top-32 left-10 text-2xl animate-bounce [animation-delay:0.4s]">📍</span>
        <span className="absolute top-12 left-72 text-2xl animate-bounce [animation-delay:0.6s]">📍</span>
        
        {/* Your Location */}
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
          <span className="text-red-500">📍</span>
          <span className="text-[10px] font-bold text-dark">Your location</span>
        </div>
      </section>

      {/* Buyer Cards */}
      <main className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4 pb-24">
        {buyersData.map(buyer => (
          <div key={buyer.id} className="bg-card border border-border p-4 rounded-xl shadow-sm flex flex-col space-y-3">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-xl shrink-0">
                  {buyer.emoji}
                </div>
                <div>
                  <h3 className="font-bold text-dark leading-tight">{buyer.name}</h3>
                  <p className="text-light text-[10px]">{buyer.location} · {buyer.distance} away</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedBuyer(buyer)}
                className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm active:scale-95 transition-transform"
              >
                Contact
              </button>
            </div>
            <div className="text-[10px] text-primary font-bold bg-primary-light px-2 py-1 rounded-md w-fit">
              Buys: {buyer.buys.join(', ')}
            </div>
          </div>
        ))}
      </main>

      {/* Contact Modal */}
      {selectedBuyer && (
        <div className="absolute inset-0 bg-black/40 z-50 flex items-center justify-center p-6 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm flex flex-col items-center space-y-6 shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center text-4xl">
              {selectedBuyer.emoji}
            </div>
            <div className="text-center space-y-1">
              <h2 className="text-xl font-bold text-dark">{selectedBuyer.name}</h2>
              <p className="text-light text-sm">{selectedBuyer.phone}</p>
            </div>
            <div className="flex flex-col w-full gap-3">
              <a 
                href={`tel:${selectedBuyer.phone}`}
                className="bg-primary text-white font-bold py-4 rounded-2xl text-center shadow-lg active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <button 
                onClick={() => setSelectedBuyer(null)}
                className="bg-white text-mid border border-border font-bold py-4 rounded-2xl active:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
