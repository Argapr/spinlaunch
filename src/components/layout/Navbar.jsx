import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Logo"
          className="h-9 w-auto"
        />
      </div>

      <div className="space-x-4">
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md font-medium">
          Create token
        </button>
        <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md font-medium">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar