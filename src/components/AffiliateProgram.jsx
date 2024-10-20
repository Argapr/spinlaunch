import React from 'react';
import wallet from '../assets/wallet.png';

const Affiliate = () => {
  return (
    <div className="bg-[#060136] text-white p-8 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold mb-4">Affiliate Program</h2>
      <p className="mb-6 font-bold">
        Earn passive income simply by just sharing the link! Enjoy commission up to 30% from the transaction fee!
      </p>
      <div>
        <h3 className="text-sm font-semibold mb-2">How it works?</h3>
        <ol className="list-decimal list-inside mb-6">
          <li>Share your referral link to your friends, family, or anyone</li>
          <li>When someone uses your referral link to create a token, you will get a commission up to 30% from the transaction fee</li>
          <li>The commission will be sent to your wallet automatically</li>
        </ol>
      </div>
      <button className=" border border-[#fff] bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 m-1 rounded-md font-medium flex justify-between items-center">
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

export default Affiliate;
