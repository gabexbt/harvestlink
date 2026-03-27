'use client';

export default function HomeScreen({ setActiveScreen }) {
  return (
    <div className="flex flex-col h-full bg-bg">
      {/* Header */}
      <header className="h-14 bg-primary flex items-center justify-between px-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center space-x-2">
          <span className="text-xl">🍃</span>
          <h1 className="text-white font-bold text-lg">HarvestLink</h1>
        </div>
        <button className="text-white p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar pb-24 px-4 pt-6 space-y-6">
        {/* Greeting */}
        <section>
          <h2 className="text-2xl font-bold text-dark flex items-center gap-2">
            Good morning, Jose 👋
          </h2>
          <p className="text-mid text-sm mt-1">What would you like to do today?</p>
        </section>

        {/* Action Cards */}
        <section className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => setActiveScreen('chat')}
            className="bg-primary aspect-square rounded-2xl flex flex-col items-center justify-center text-white space-y-3 shadow-lg active:scale-95 transition-transform"
          >
            <div className="bg-white/20 p-3 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <span className="font-bold text-lg">Ask AI</span>
          </button>

          <button 
            onClick={() => setActiveScreen('market')}
            className="bg-amber aspect-square rounded-2xl flex flex-col items-center justify-center text-white space-y-3 shadow-lg active:scale-95 transition-transform"
          >
            <div className="bg-white/20 p-3 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-bold text-lg text-center leading-tight px-2">Today's Prices</span>
          </button>

          <button 
            onClick={() => setActiveScreen('buyers')}
            className="col-span-2 relative overflow-hidden h-32 rounded-2xl bg-amber flex flex-col items-center justify-center text-white shadow-lg active:scale-[0.98] transition-transform"
          >
            {/* Farm Illustration Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber/80 to-[#D97706]/90"></div>
            <div className="absolute bottom-0 left-0 right-0 h-16 opacity-30">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                <path d="M0 100 C 20 80 40 120 60 100 C 80 80 100 120 120 100 L 120 120 L 0 120 Z" fill="currentColor" />
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col items-center space-y-2">
              <div className="bg-white/20 p-2 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <span className="font-bold text-2xl">Find Buyers</span>
            </div>
          </button>
        </section>

        {/* Quick Advisory Strip */}
        <section 
          onClick={() => setActiveScreen('advisory')}
          className="bg-card border border-border p-4 rounded-xl flex items-center justify-between shadow-sm active:bg-gray-50 transition-colors"
        >
          <div className="flex items-center space-x-3 overflow-hidden">
            <span className="text-amber text-xl shrink-0">⚠️</span>
            <div className="overflow-hidden">
              <h4 className="font-bold text-sm text-dark truncate">Heavy Rain Warning in Iloilo</h4>
              <p className="text-light text-xs truncate">Expect delays in transport and price changes...</p>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </section>
      </main>
    </div>
  );
}
