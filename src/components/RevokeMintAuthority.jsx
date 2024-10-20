import React, { useState } from 'react';
import { Check } from 'lucide-react';
import wallet from '../assets/wallet.png';

const CustomCheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="9" stroke="#4F46E5" strokeWidth="2"/>
        <path d="M6 10L9 13L14 7" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
);

const RevokeMintAuthority = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedToken, setSelectedToken] = useState(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectToken = (token) => {
        setSelectedToken(token);
        setIsOpen(false);
    };

    const tokens = [
        { id: 1, name: 'No Data Found' },
    ];
    return (
        <>
        
        <div className="bg-[#060136] text-white p-8 rounded-lg shadow-md mb-4">
                <div className="flex justify-between items-start">
                    <div className="w-2/3 pr-8">
                        <h1 className="text-4xl font-bold mb-8">Revoke Mint Authority</h1>
                        <form className="space-y-6 flex flex-col items-center">
                            <div className="relative w-full">
                            <div className="text-white mb-2 text-sm font-bold">TOKEN</div>
                            <div 
                                className="bg-indigo-900 border-2 border-[#57369e] rounded-lg p-3 flex items-center justify-between cursor-pointer"
                                onClick={toggleDropdown}
                            >
                                <div className="flex items-center">
                                <div className="w-8 h-8 bg-indigo-700 rounded-full mr-3"></div>
                                <span className="text-gray-400">
                                    {selectedToken ? selectedToken.name : 'Select token'}
                                </span>
                                </div>
                                <CustomCheckIcon />
                            </div>
                            
                            {isOpen && (
                                <div className="absolute w-full mt-2 bg-indigo-900 rounded-lg shadow-lg z-10">
                                {tokens.length > 0 ? (
                                    tokens.map((token) => (
                                    <div 
                                        key={token.id}
                                        className="p-4 hover:bg-indigo-800 cursor-pointer flex items-center justify-between"
                                        onClick={() => selectToken(token)}
                                    >
                                        <span className="w-full text-center flex justify-center items-center">
                                            {token.name}
                                        </span>   
                                        {selectedToken && selectedToken.id === token.id && (
                                        <Check className="text-green-500" size={20} />
                                        )}
                                    </div>
                                    ))
                                ) : (
                                    <div className="p-4 text-center text-gray-400">No data found</div>
                                )}
                                </div>
                            )}
                            </div>
                            <button className=" border border-[#fff] bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 m-1 rounded-md font-medium flex items-center">
                                <img
                                src={wallet}
                                alt="Logo"
                                className="h-5 w-5 mr-2"
                                />
                                Connect Wallet
                            </button>
                        </form>
                    </div>
                    <div className="w-1/3">
                        <div className="bg-purple-700 rounded-lg aspect-video flex items-center justify-center mb-4">
                            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-4">How to make token immutable?</h2>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>Connect your Solana Wallet</li>
                                <li>Select the Token from your wallet</li>
                                <li>To Make token mutable you should use the wallet that created that Token (Authority)</li>
                                <li>Click on Make Immutable</li>
                                <li>Accept the Transaction</li>
                                <li>Wait a second and the changes will be applied</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="bg-[#060136] text-white p-8 rounded-lg shadow-md mb-4">
                <h2 className="text-3xl font-bold mb-4">What is Revoke Mint Authority?</h2>
                <p className="text-base font-medium">Revoke Mint Authority is a dApp that allows all users, without coding experience, to revoke the mint authority of a token you have created.</p>
                <p className="text-base font-medium mb-4">All this process is faster and cheaper that any other option as it is automatically done. This tool is completely safe, audited by different developers teams and used by best Solana Projects.</p>
            </div>
            <div className="bg-[#060136] text-white p-8 rounded-lg shadow-md mb-4">
                <h2 className="text-3xl font-bold mb-4">Which wallet can I use?</h2>
                <p className="text-base font-medium mb-4">You can use any Solana Wallet as Phantom, Solflare, Backpack, etc.</p>
            </div>
            <div className="bg-[#060136] text-white p-8 rounded-lg shadow-md mb-4">
                <h2 className="text-3xl font-bold mb-4">Is it Safe to Revoke the Mint Authority here?</h2>
                <p className="text-base font-medium mb-4">Yes, our tool is completely safe. It makes the Revoke Mint Authority for you and does not have any access to your information. Our dApp is audited and used by hundred users every month.</p>
            </div>
        </>
  );
};

export default RevokeMintAuthority;
