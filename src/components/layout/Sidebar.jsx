import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Coins, PlusCircle, PiggyBank, Building2, Database, Share2 } from 'lucide-react';

const menuItems = [
  { icon: Coins, text: 'Quick Launch Token', path: '/token-management/quick-launch' },
  { icon: Database, text: 'My Tokens', path: '/token-management/my-tokens' },
  { icon: PlusCircle, text: 'Create token', path: '/token-management/create' },
  { icon: PiggyBank, text: 'Create Liquidity Pool', path: '/token-management/create-liquidity-pool' },
  { icon: Building2, text: 'Additional Tools', path: '/token-management/additional-tools' },
  { icon: Database, text: 'Token Manager', path: '/token-management/manager' },
  { icon: Share2, text: 'Token Multisender', path: '/token-management/multisender' },
  { icon: Shield, text: 'Affiliate Program', path: '/token-management/affiliate' },
];

const Sidebar = () => {
    const location = useLocation();
  
    return (
      <aside className="bg-purple-800 text-white w-64 p-4 h-screen">
        {menuItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.path}
            className={`flex items-center mb-2 p-2 rounded ${location.pathname === item.path ? 'bg-purple-600' : ''}`}
          >
            <item.icon className="mr-2" size={20} />
            <span>{item.text}</span>
          </Link>
        ))}
      </aside>
    );
  };
  
  export default Sidebar;