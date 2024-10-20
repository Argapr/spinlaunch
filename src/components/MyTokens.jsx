import React from 'react';
import wallet from '../assets/wallet.png';

const MyToken = () => {
  return (
    <div className="bg-[#060136] text-white p-8 rounded-lg shadow-md">
      <h2 className="text-5xl text-center font-bold mb-4">Token Quick Action</h2>
      <button className="mt-10 border border-[#fff] bg-purple-700 hover:bg-purple-800 text-white w-full py-4 rounded-md font-medium flex justify-center items-center">
        <img
          src={wallet}
          alt="Logo"
          className="h-5 w-5 mr-2"
        />
          Connect Wallet
        </button>
    </div>
  );
};

export default MyToken;
