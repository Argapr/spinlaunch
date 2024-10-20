import React, { useState } from 'react';
import { Check } from 'lucide-react';
import wallet from '../assets/wallet.png';

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);
    
  const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
  
const CreateLiquidityPool = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedToken, setSelectedToken] = useState(null);
    const [marketID, setMarketID] = useState('');
    const [isDateEnabled, setIsDateEnabled] = useState(true);
    const [selectedDate, setSelectedDate] = useState('20 October, 2024 00:00');

    const toggleDateInput = () => {
        setIsDateEnabled(!isDateEnabled);
    };

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectToken = (token) => {
        setSelectedToken(token);
        setIsOpen(false);
    };

    const tokens = [
        { id: 1, name: 'No Data Found' },
    ]

    return (
        <>
        <div className="bg-[#060136] text-white p-8 rounded-lg shadow-md mb-4">
                <div className="flex justify-between items-start">
                    <div className="w-2/3 pr-8">
                        <h1 className="text-4xl font-bold mb-4">Create Solana Liquidity Pool</h1>
                        <p className="text-base font-medium mb-4">Easily create a Liquidity Pool of any Solana Token. Your token will be available for trading on Raydium, Birdeye & DexScreener.</p>
                        <form className="space-y-6 flex flex-col items-center">
                            <button className=" border-4 border-solid border-[#d1d1d1] bg-[#fff] hover:bg-[#d1d1d1] text-black px-2 py-2 m-2 rounded-md font-medium text-sm">
                                Raydium V2
                            </button>

                            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7">
                                <div className="relative w-full">
                                <div className="text-white mb-2 text-xs font-bold">BASE TOKEN</div>
                                    <div 
                                        className="bg-[#3f3270cc] border-2 border-[#57369e] rounded-lg p-3 flex items-center justify-between cursor-pointer"
                                        onClick={toggleDropdown}
                                    >
                                        <div className="flex items-center">
                                        <div className="w-8 h-8 bg-indigo-700 rounded-full mr-3"></div>
                                        <span className="text-gray-400">
                                            {selectedToken ? selectedToken.name : 'Select token'}
                                        </span>
                                        </div>
                                        <span className="py-2 inline-block">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-light-gray-500"
                                        >
                                            <path
                                            d="M18 9C18 13.9706 13.9706 18 9 18C4.02942 18 0 13.9706 0 9C0 4.02942 4.02942 0 9 0C13.9706 0 18 4.02942 18 9ZM7.95898 13.7654L14.6364 7.08801C14.8631 6.86127 14.8631 6.49361 14.6364 6.26687L13.8153 5.44573C13.5885 5.21895 13.2209 5.21895 12.9941 5.44573L7.54839 10.8914L5.00592 8.34892C4.77918 8.12217 4.41152 8.12217 4.18475 8.34892L3.3636 9.17006C3.13686 9.3968 3.13686 9.76445 3.3636 9.9912L7.1378 13.7654C7.36458 13.9922 7.7322 13.9922 7.95898 13.7654Z"
                                            fill="currentColor"
                                            />
                                        </svg>
                                        </span>
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

                                {/* Quote Token */}
                                <div className="relative w-full">
                                <div className="text-white mb-2 text-sm font-bold">QUOTE TOKEN</div>
                                    <div 
                                        className="bg-[#3f3270cc] border-2 border-[#57369e] rounded-lg p-3 flex items-center justify-between cursor-pointer"
                                        onClick={toggleDropdown}
                                    >
                                        <div className="flex items-center">
                                        <div className="w-8 h-8 bg-indigo-700 rounded-full mr-3"></div>
                                        <span className="text-gray-400">
                                            {selectedToken ? selectedToken.name : 'Select token'}
                                        </span>
                                        </div>
                                        <span className="py-2 inline-block">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-light-gray-500"
                                        >
                                            <path
                                            d="M18 9C18 13.9706 13.9706 18 9 18C4.02942 18 0 13.9706 0 9C0 4.02942 4.02942 0 9 0C13.9706 0 18 4.02942 18 9ZM7.95898 13.7654L14.6364 7.08801C14.8631 6.86127 14.8631 6.49361 14.6364 6.26687L13.8153 5.44573C13.5885 5.21895 13.2209 5.21895 12.9941 5.44573L7.54839 10.8914L5.00592 8.34892C4.77918 8.12217 4.41152 8.12217 4.18475 8.34892L3.3636 9.17006C3.13686 9.3968 3.13686 9.76445 3.3636 9.9912L7.1378 13.7654C7.36458 13.9922 7.7322 13.9922 7.95898 13.7654Z"
                                            fill="currentColor"
                                            />
                                        </svg>
                                        </span>
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
                            </div>

                            <div className="relative w-full">
                            <h2 className="text-xs font-bold mb-2">MARKET ID</h2>
                            <div 
                                className="border-2 border-[#57369e] bg-[#3f3270cc] rounded-lg p-4 flex items-center justify-between cursor-pointer"
                                onClick={toggleDropdown}
                            >
                                <input
                                type="text"
                                className="bg-transparent outline-none w-full"
                                placeholder="Select market ID"
                                value={marketID}
                                onChange={(e) => setMarketID(e.target.value)}
                                readOnly
                                />
                                <span className="text-gray-400">
                                {isOpen ? <SearchIcon /> : <ChevronDownIcon />}
                                </span>
                            </div>
                            {isOpen && (
                                <div className="absolute w-full bg-indigo-900 mt-1 rounded-lg p-4">
                                <p className="text-gray-400">No data found</p>
                                </div>
                            )}
                            </div>

                            <div className='w-full'>
                                <p className="text-lg font-bold">Add liquidity</p>
                                <p className='txt-xs font-medium'>Once we set the OpenBook Market we just need to add liquidityOnce we set the OpenBook Market we just need to add liquidity</p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 w-full">
                                    <div>
                                        <label className="mb-2 text-xs font-bold">BASE TO BE ADDED</label>
                                        <input type="number" defaultValue={1000000000} className="w-full p-3 bg-[#3f3270cc] border-2 border-[#57369e] rounded-xl" />
                                        <label className="mb-2 tex-xs font-medium">Balance: 0</label>
                                    </div>
                                    <div>
                                        <label className="mb-2 text-xs font-bold">QUETO TO BE ADDED</label>
                                        <input type="number" defaultValue={3} className="w-full p-3 bg-[#3f3270cc] border-2 border-[#57369e] rounded-xl" />
                                        <label className="mb-2 tex-xs font-medium">Balance: 0</label>
                                    </div>
                            </div>

                            <div className="w-full">
                                <h2 className="text-sm font-bold mb-2">SET LAUNCH DATE</h2>
                                <button
                                    type='button'
                                    className={`w-12 h-6 rounded-full p-1 ${isDateEnabled ? 'bg-purple-600' : 'bg-gray-600'}`}
                                    onClick={toggleDateInput}
                                >
                                    <div
                                    className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 ease-in-out ${
                                        isDateEnabled ? 'transform translate-x-6' : ''
                                    }`}
                                    />
                                </button>

                                <p className="mb-4 text-sm font-semibold">
                                Select the time when Liquidity Pool will go live (Local Time)
                                </p>

                                {isDateEnabled && (
                                <div>
                                    <h3 className="text-xs font-bold mb-1">SELECT THE DATE</h3>
                                    <div className="bg-[#3f3270cc] border-2 border-[#57369e] rounded-lg p-4 flex items-center">
                                    <svg
                                        className="w-6 h-6 mr-3 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <input
                                        type="text"
                                        className="bg-transparent outline-none w-full"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        placeholder="Select date and time"
                                    />
                                    </div>
                                </div>
                                )}
                            </div>

                            <button className=" border border-[#fff] bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 mt-5 rounded-md font-medium flex items-center">
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
                            <h2 className="text-xl font-bold mb-4">How to Create Liquidity Pool?</h2>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>Connect your Solana Wallet</li>
                                <li>Select the Token pair</li>
                                <li>Quote Token (usually SOL/USDC) will define the price of the Base Token (the token you created)</li>
                                <li>Set OpenBook Market ID</li>
                                <li>Set how much Liquidity you want to add</li>
                                <li>Set Launch Date if you need (optional)</li>
                                <li>If you need auto buy, set Custom Wallet Buy and add your wallet to auto buy with input private key address</li>
                                <li>Click on create Liquidity Pool and accept the transaction. It will take some seconds.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#060136] text-white p-8 rounded-lg shadow-md mb-4">
                <h2 className="text-2xl font-bold mb-2">How does this Create Liquidity Pool Tool work?</h2>
                <p className="text-base font-medium">Our Tool make the whole process of creating a liquidity pool on Solana for you. We work with Raydium API for giving you the best experience for creating a liquidity pool.</p>
                <p className="text-base font-medium mb-4">All this process is faster and cheaper that any other option as it is automatically done. This tool is completely safe, audited by different developers teams and used by best Solana Projects.</p>
            </div>
            <div className="bg-[#060136] text-white p-8 rounded-lg shadow-md mb-4">
                <h2 className="text-2xl font-bold mb-2">Which wallet can I use?</h2>
                <p className="text-base font-medium mb-4">You can use any Solana Wallet as Phantom, Solflare, Backpack, etc.</p>
            </div>
            <div className="bg-[#060136] text-white p-8 rounded-lg shadow-md mb-4">
                <h2 className="text-2xl font-bold mb-2">Is it Safe to Create a Liquidity here?</h2>
                <p className="text-base font-medium mb-4">Yes, our tool is completely safe. It creates the Liquidity Pool on Raydium and does not have any access to your information. Our dApp is audited and used by hundred users every month.</p>
            </div>
        </>
  );
};

export default CreateLiquidityPool;
