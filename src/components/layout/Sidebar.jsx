import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Coins, PlusCircle, PiggyBank, Building2, Database, Share2, ChevronDown, ChevronUp } from 'lucide-react';

const menuItems = [
  { icon: Coins, text: 'Quick Launch Token', path: '/token-management/quick-launch' },
  { icon: Database, text: 'My Tokens', path: '/token-management/my-tokens' },
  { icon: PlusCircle, text: 'Create token', path: '/token-management/create' },
  { icon: PiggyBank, text: 'Create Liquidity Pool', path: '/token-management/create-liquidity-pool' },
  { icon: Building2, text: 'Additional Tools', path: '/token-management/additional-tools', submenu: [{ text: 'Create Staking Token', path: '/pools' }] },
  {
    icon: Database,
    text: 'Token Manager',
    path: '/token-management/manager',
    submenu: [
      { text: 'Create OpenBook Market ID', path: '/token-management/market-id/create' },
      { text: 'Burn LP Pool', path: '/token-management/raydium/lp-v4/burn' },
      { text: 'Withdraw LP Pool', path: '/token-management/raydium/lp-v4/withdraw' },
      { text: 'Revoke Freeze Authority', path: '/token-management/spl-token/revoke-freeze' },
      { text: 'Revoke Mint Authority', path: '/token-management/spl-token/revoke-mint' },
      { text: 'Make Token Immutable', path: '/token-management/spl-token/revoke-mutable' },
      { text: 'Update Token MetaData', path: '/token-management/update' },
      { text: 'Token Mint', path: '/token-management/spl-token/mint' },
      { text: 'Token Burn', path: '/token-management/spl-token/burn' },
      { text: 'Manage Token Holders', path: '/token-management/account-holders' },
      { text: 'Freeze Account', path: '/token-management/spl-token/freeze-account' }
    ]
  },
  { icon: Share2, text: 'Token Multisender', path: '/token-management/multisender' },
  { icon: Shield, text: 'Affiliate Program', path: '/token-management/affiliate' }
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="bg-[#060136] text-white w-72 pt-10 p-5">
      <div className="mb-4">
        <h3 className="font-medium mb-2">Menu</h3>
        <SidebarItem item={menuItems[0]} active={location.pathname === menuItems[0].path} />
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-2">Token Manager Tools</h3>
        {menuItems.slice(1, 4).map((item, index) => (
          <SidebarItem key={index} item={item} active={location.pathname === item.path} />
        ))}
      </div>

      {menuItems.slice(4).map((item, index) => (
        item.submenu ? (
          <SidebarDropdown key={index} item={item} location={location} />
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

const SidebarDropdown = ({ item, location }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Automatically open dropdown if any of the submenu paths are active
  useEffect(() => {
    const isSubmenuActive = item.submenu.some(subItem => location.pathname === subItem.path);
    if (isSubmenuActive) {
      setIsOpen(true);
    }
  }, [location.pathname, item.submenu]);

  const Icon = item.icon;

  return (
    <div className="mb-4">
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
            <Link to={subItem.path} key={index}>
              <div className={`py-2 px-4 rounded mb-1 cursor-pointer ${location.pathname === subItem.path ? 'bg-purple-600' : 'hover:bg-purple-700'}`}>
                {subItem.text}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
