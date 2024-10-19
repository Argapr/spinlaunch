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
    <div className="mb-4">
      <h3 className="font-bold mb-2">Menu</h3>
      <div className="flex items-center mb-2">
        <Coins className="mr-2" size={20} />
        <span>Quick Launch Token</span>
      </div>
    </div>
    <div className="mb-4">
      <h3 className="font-bold mb-2">Token Manager Tools</h3>
      <div className="flex items-center mb-2">
        <Database className="mr-2" size={20} />
        <span>My Tokens</span>
      </div>
      <div className="flex items-center mb-2">
        <PlusCircle className="mr-2" size={20} />
        <span>Create token</span>
      </div>
      <div className="flex items-center mb-2">
        <PiggyBank className="mr-2" size={20} />
        <span>Create Liquidity Pool</span>
      </div>
    </div>
    <div className="mb-4">
      <h3 className="font-bold mb-2">Additional Tools</h3>
      <div className="flex items-center mb-2">
        <Building2 className="mr-2" size={20} />
        <span>Additional Tools</span>
      </div>
    </div>
    <div className="mb-4">
      <h3 className="font-bold mb-2">Token Manager</h3>
      <div className="flex items-center mb-2">
        <Database className="mr-2" size={20} />
        <span>Token Manager</span>
      </div>
    </div>
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <Share2 className="mr-2" size={20} />
        <span>Token Multisender</span>
      </div>
    </div>
    <div className="mb-4">
      <div className="flex items-center mb-2 bg-purple-600 p-2 rounded">
        <Shield className="mr-2" size={20} />
        <span>Affiliate Program</span>
      </div>
    </div>
  </aside>
    );
  };
  
  export default Sidebar;