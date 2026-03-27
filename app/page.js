'use client';

import { useState } from 'react';
import BottomNav from '@/components/BottomNav';
import HomeScreen from '@/components/screens/HomeScreen';
import ChatScreen from '@/components/screens/ChatScreen';
import PricesScreen from '@/components/screens/PricesScreen';
import BuyersScreen from '@/components/screens/BuyersScreen';
import AdvisoryScreen from '@/components/screens/AdvisoryScreen';

export default function Home() {
  const [activeScreen, setActiveScreen] = useState('home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <HomeScreen setActiveScreen={setActiveScreen} />;
      case 'chat':
        return <ChatScreen setActiveScreen={setActiveScreen} />;
      case 'market':
        return <PricesScreen setActiveScreen={setActiveScreen} />;
      case 'buyers':
        return <BuyersScreen setActiveScreen={setActiveScreen} />;
      case 'advisory':
        return <AdvisoryScreen setActiveScreen={setActiveScreen} />;
      default:
        return <HomeScreen setActiveScreen={setActiveScreen} />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-bg">
      <div className="flex-1 overflow-hidden relative">
        <div 
          key={activeScreen}
          className="h-full w-full screen-fade-up"
        >
          {renderScreen()}
        </div>
      </div>
      
      <BottomNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </div>
  );
}
