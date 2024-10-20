import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import add from '../../assets/add.png';
import wallet from '../../assets/wallet.png';

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/token-management/quick-launch');
  }

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <a href="/">
        <img
          src={logo}
          alt="Logo"
          className="h-9 w-auto"
        />
        </a>
      </div>
      <div className="flex">
        <button className="border border-[#fff] hover:bg-purple-600 text-white px-4 py-2 m-1 rounded-md font-medium flex justify-between items-center"
        onClick={handleClick}
        >
        <img
          src={add}
          alt="Logo"
          className="h-5 w-5 mr-2"
        />
        Create token
        </button>
        <button className=" border border-[#fff] bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 m-1 rounded-md font-medium flex justify-between items-center">
        <img
          src={wallet}
          alt="Logo"
          className="h-5 w-5 mr-2"
        />
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar