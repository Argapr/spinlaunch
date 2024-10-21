import React, { useState } from 'react';
import { PlusIcon, Check, ChevronDown, ChevronUp, Wallet } from 'lucide-react';
import wallet from '../assets/wallet.png';

const UpdateTokenMetaData = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [showCustomPK, setShowCustomPK] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedToken, setSelectedToken] = useState(null);

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
                        <h1 className="text-3xl font-bold mb-8">Update Token Metadata</h1>
                            
                            <form className="space-y-6">
                                <div className="relative w-full">
                                    <div className="text-white mb-2 text-sm font-bold">TOKEN</div>
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
                                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-7'>
                                <div>
                                    <label className="mb-2 text-xs font-bold">NAME</label>
                                    <input type="text" className="w-full p-3 bg-[#3f3270cc] border-2 border-[#57369e] rounded-2xl" />
                                </div>
                                    <div>
                                    <label className="mb-2 text-xs font-bold">SYMBOL</label>
                                    <input type="text" className="w-full p-3 bg-[#3f3270cc] border-2 border-[#57369e] rounded-2xl" />
                                    </div>
                                </div>
                                <div className='grid grid-cols-3 gap-6 w-full'>
                                <div className='col-span-2'>
                                    <label className="block mb-2 text-xs font-bold">DESCRIPTION</label>
                                    <textarea className="w-full p-3 bg-[#3f3270cc] border-2 border-[#57369e] rounded-2xl" rows={3}></textarea>
                                </div>
                                <div className='w-full'>
                                    <label className="block mb-2 text-xs font-bold">IMAGE</label>
                                    <div className="h-24 bg-[#3f3270cc] border-2 border-[#57369e] rounded-2xl flex items-center justify-center">
                                        <PlusIcon size={30} />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-6 space-y-4 w-full'>
                                <DropdownSection
                                        title={showOptions ? "Hide options" : "More options"}
                                        isOpen={showOptions}
                                        toggle={() => setShowOptions(!showOptions)}
                                        >
                                        <InputField label="WEBSITE URL" />
                                        <InputField label="TWITTER LINK" />
                                        <InputField label="TELEGRAM LINK" />
                                </DropdownSection>
                            </div>
                            <button className="w-full border border-[#fff] bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-md font-medium flex items-center justify-center">
                                <img
                                src={wallet}
                                alt="Logo"
                                className="h-5 w-5 mr-2"
                                />
                                Connect Wallet
                            </button>
                            
                            <div className="text-center text-sm font-semibold">
                                Fees: 0.075 SOL
                            </div>
                            </form>
                        </div>
                        <div className="w-1/3">
                            <div className="bg-purple-700 rounded-lg aspect-video flex items-center justify-center mb-4">
                                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-4">How to Update Token Metadata?</h2>
                                <ol className="list-decimal list-inside space-y-2">
                                    <li>Connect your Solana Wallet</li>
                                    <li>Select the Token from your wallet</li>
                                    <li>* To update metadata you should use the wallet that created the Token (Authority)</li>
                                    <li>Enter the new info you for your Token</li>
                                    <li>Click on Update Token and confirm the Transaction</li>
                                    <li>Wait a minute for your update</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

            <div className="bg-[#060136] text-white p-8 rounded-lg shadow-md mb-4">
                <h2 className="text-2xl font-bold mb-4">What is Update Token Metadata?</h2>
                <p className="text-base font-medium">Update Token Metadata is a dApp that allows all users, without coding experience, to update a solana token if they have the authority wallet. So you can modify your token metadata as you want.</p>
                <p className="text-base font-medium mb-4">All this process is faster and cheaper that any other option as it is automatically done. This tool is completely safe, audited by different developers teams and used by best Solana Project.</p>
            </div>
            <div className="bg-[#060136] text-white p-8 rounded-lg shadow-md mb-4">
                <h2 className="text-2xl font-bold mb-4">Which wallet can I use?</h2>
                <p className="text-base font-medium mb-4">You can use any Solana Wallet as Phantom, Solflare, Backpack, etc.</p>
            </div>
            <div className="bg-[#060136] text-white p-8 rounded-lg shadow-md mb-4">
                <h2 className="text-2xl font-bold mb-4">Is it Safe to Revoke the Mint Authority here?</h2>
                <p className="text-base font-medium mb-4">Yes, our tool is completely safe. It makes the Revoke Mint Authority for you and does not have any access to your information. Our dApp is audited and used by hundred users every month.</p>
            </div>
        </>
  );
};

const DropdownSection = ({ title, isOpen, toggle, children }) => {
    const handleToggle = (e) => {
      e.preventDefault();
      toggle();
    };
  
    return (
      <div className="w-full space-y-4">
        <div className="flex justify-center">
          <button
            onClick={handleToggle}
            className="bg-[#e2d7ff] text-[#7448ff] px-6 py-2 rounded-full flex items-center justify-center space-x-2 font-medium text-sm"
            type="button"
          >
            <span>{title}</span>
            {isOpen ? (
              <ChevronUp size={16} className="text-[#7448ff]" />
            ) : (
              <ChevronDown size={16} className="text-[#7448ff]" />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="space-y-4 w-full">
            {children}
          </div>
        )}
      </div>
    );
  };

  const InputField = ({ label }) => (
    <div className="w-full">
      <label className="block text-xs font-bold mb-2 text-white">{label}</label>
      <input
        type="text"
        className="w-full p-3 bg-[#3f3270] border-2 border-[#57369e] rounded-2xl text-white"
      />
    </div>
  );

export default UpdateTokenMetaData;
