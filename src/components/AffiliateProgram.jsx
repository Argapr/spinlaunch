import React from 'react';

const Affiliate = () => {
  return (
    <div className="bg-[#190544] text-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">Affiliate Program</h2>
      <p className="mb-6">
        Earn passive income simply by just sharing the link! Enjoy commission up to 30% from the transaction fee!
      </p>
      <div>
        <h3 className="text-xl font-semibold mb-2">How it works?</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Share your referral link to your friends, family, or anyone</li>
          <li>When someone uses your referral link to create a token, you will get a commission up to 30% from the transaction fee</li>
          <li>The commission will be sent to your wallet automatically</li>
        </ul>
      </div>
      <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-md font-medium transition duration-200">
        Connect Wallet
      </button>
    </div>
  );
};

export default Affiliate;
