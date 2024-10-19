import React from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col bg-[#2A1A57]">
      <Navbar />
      <div className="flex flex-1 overflow-y-auto">
        <Sidebar />
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
