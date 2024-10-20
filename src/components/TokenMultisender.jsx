import React from 'react';

const TokenMultiSender = () => {
    return (
        <>
            <div className="bg-[#190544] text-white p-8 rounded-lg shadow-md mb-4">
                <h2 className="text-3xl font-bold mb-4">What is Solana Token Multisender?</h2>
                <p className="text-xl font-medium mb-4">Solana Multisender is a dApp that allows users, without coding experience, to send Tokens to a list of wallets, with custom quantities. You can fill the list manually or upload a CSV.</p>
                <p className="text-xl font-medium mb-4">All this process is faster and cheaper that any other option as it is automatically done. This tool is completely safe, audited by different developers teams and used by the biggest Solana Collections.</p>
            </div>
            <div className="bg-[#190544] text-white p-8 rounded-lg shadow-md mb-4">
                <h2 className="text-3xl font-bold mb-4">Which wallet can I use?</h2>
                <p className="text-xl font-medium mb-4">You can use any Solana Wallet as Phantom, Solflare, Backpack, etc.</p>
            </div>
            <div className="bg-[#190544] text-white p-8 rounded-lg shadow-md mb-4">
                <h2 className="text-3xl font-bold mb-4">Is it Safe to Create a Liquidity here?</h2>
                <p className="text-xl font-medium mb-4">Yes, our tool is completely safe. It creates the Liquidity Pool on Raydium and does not have any access to your information. Our dApp is audited and used by hundred users every month.</p>
            </div>
        </>
  );
};

export default TokenMultiSender;
