import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Coins, PlusCircle, PiggyBank, Building2, Database, Share2, ChevronDown, ChevronUp } from 'lucide-react';

const menuItems = [
  { icon: Coins, text: 'Quick Launch Token', path: '/token-management/quick-launch' },
  { icon: Database, text: 'My Tokens', path: '/token-management/my-tokens' },
  { icon: PlusCircle, text: 'Create token', path: '/token-management/create' },
  { icon: PiggyBank, text: 'Create Liquidity Pool', path: '/token-management/create-liquidity-pool' },
  { icon: Building2, text: 'Additional Tools', path: '/token-management/additional-tools', submenu: ['Tool 1', 'Tool 2', 'Tool 3'] },
  { icon: Database, text: 'Token Manager', path: '/token-management/manager', submenu: ['Manage Tokens', 'Token Analytics', 'Token Settings'] },
  { icon: Share2, text: 'Token Multisender', path: '/token-management/multisender' },
  { icon: Shield, text: 'Affiliate Program', path: '/token-management/affiliate' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="bg-[#190544] text-white w-72 p-4 h-full">
      <div className="mb-4">
        <h3 className="font-bold mb-2">Menu</h3>
        <SidebarItem item={menuItems[0]} active={location.pathname === menuItems[0].path} />
      </div>
      
      <div className="mb-4">
        <h3 className="font-bold mb-2">Token Manager Tools</h3>
        {menuItems.slice(1, 4).map((item, index) => (
          <SidebarItem key={index} item={item} active={location.pathname === item.path} />
        ))}
      </div>
      
      {menuItems.slice(4).map((item, index) => (
        item.submenu ? (
          <SidebarDropdown key={index} item={item} active={location.pathname === item.path} />
        ) : (
          <div key={index} className="mb-4">
            <SidebarItem item={item} active={location.pathname === item.path} />
          </div>
        )
      ))}
    </aside>
  );
};

const SidebarItem = ({ item, active }) => {
  const Icon = item.icon;
  return (
    <Link to={item.path}>
      <div className={`flex items-center mb-2 p-2 rounded ${active ? 'bg-purple-600' : 'hover:bg-purple-700'}`}>
        <Icon className="mr-2" size={20} />
        <span>{item.text}</span>
      </div>
    </Link>
  );
};

const SidebarDropdown = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = item.icon;

  return (
    <div className="mb-4">
      <h3 className="font-bold mb-2">{item.text}</h3>
      <div 
        className="flex items-center mb-2 p-2 rounded hover:bg-purple-700 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon className="mr-2" size={20} />
        <span>{item.text}</span>
        {isOpen ? <ChevronUp className="ml-auto" size={16} /> : <ChevronDown className="ml-auto" size={16} />}
      </div>
      {isOpen && (
        <div className="ml-4">
          {item.submenu.map((subItem, index) => (
            <div key={index} className="py-2 px-4 rounded mb-1 hover:bg-purple-700 cursor-pointer">
              {subItem}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;