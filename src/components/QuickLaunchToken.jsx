import React, { useState } from 'react';
import { PlusIcon, ChevronDown, ChevronUp, Wallet } from 'lucide-react';

const QuickLaunchToken = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [showCustomPK, setShowCustomPK] = useState(false);
    return (
        <>
            <div className="bg-[#190544] text-white p-8 rounded-lg shadow-md mb-4">
                <div className="flex justify-between items-start">
                    <div className="w-2/3 pr-8">
                        <h1 className="text-3xl font-bold mb-8">Solana Token Creator</h1>
                            <div className="flex space-x-4 mb-8">
                                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">1</div>
                                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">2</div>
                                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">3</div>
                            </div>
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">NAME</label>
                                        <input type="text" className="w-full p-3 bg-indigo-900 rounded" />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">SYMBOL</label>
                                        <input type="text" className="w-full p-3 bg-indigo-900 rounded" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">DECIMALS</label>
                                        <input type="number" defaultValue={6} className="w-full p-3 bg-indigo-900 rounded" />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">SUPPLY</label>
                                        <input type="number" defaultValue={1000000000} className="w-full p-3 bg-indigo-900 rounded" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium">DESCRIPTION</label>
                                    <textarea className="w-full p-3 bg-indigo-900 rounded" rows={4}></textarea>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium">IMAGE</label>
                                <div className="w-24 h-24 bg-indigo-900 rounded flex items-center justify-center">
                                    <PlusIcon size={24} />
                                </div>
                                <h2 className="text-2xl font-bold mb-6">Advanced Setup (optional)</h2>

                                <div className="space-y-6">
                                    <ToggleOption 
                                        label="IMMUTABLE" 
                                        description="Update Authority allows you to update token metadata"
                                        cost="0.075"
                                    />
                                    <ToggleOption 
                                        label="REVOKE FREEZE" 
                                        description="Freeze Authority allows you to freeze token accounts"
                                        cost="0.075"
                                    />
                                    <ToggleOption 
                                        label="REVOKE MINT" 
                                        description="Mint Authority allows you to mint more supply"
                                        cost="0.075"
                                    />
                                </div>

                                <div className="mt-6 space-y-4">
                                    <DropdownSection
                                        title={showOptions ? "Hide options" : "More options"}
                                        isOpen={showOptions}
                                        toggle={() => setShowOptions(!showOptions)}
                                        >
                                        <InputField label="WEBSITE URL" />
                                        <InputField label="TWITTER LINK" />
                                        <InputField label="TELEGRAM LINK" />
                                    </DropdownSection>

                                    <DropdownSection
                                        title={showCustomPK ? "Use Random PK" : "Use Custom PK"}
                                        isOpen={showCustomPK}
                                        toggle={() => setShowCustomPK(!showCustomPK)}
                                        >
                                        <InputField label="CUSTOM PRIVATE KEY" />
                                    </DropdownSection>
                                </div>

                                <button className="w-full bg-indigo-600 text-white py-3 rounded-lg mt-6 flex items-center justify-center">
                                    <Wallet className="mr-2" size={20} /> Connect Wallet
                                </button>

                                <div className="mt-4 text-center">
                                    Total fees: <span className="text-green-400">~0.075 SOL</span>
                                </div>
                            </div>
                        </form>
                    </div>
                <div className="w-1/3">
                  <div className="bg-purple-700 rounded-lg aspect-video flex items-center justify-center mb-4">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                  </div>
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Launch your own Solana Token to Raydium in 5 minutes</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Connect your Solana Wallet</li>
                        <li>Write the name you want for your Token</li>
                        <li>Indicate the symbol (max 8 characters)</li>
                        <li>Select the decimals quantity (0 for Whitelist Token, 6 for utility token)</li>
                        <li>Put the Supply of your Token</li>
                        <li>Write the description you want for your SPL Token</li>
                        <li>Upload the image for your token (PNG)</li>
                        <li>Upload the image for your token (PNG)</li>
                    </ol>
                </div>
                </div>
            </div>
            </div>
            <div className="bg-[#190544] text-white p-8 rounded-lg shadow-md mb-4">
                <h2 className="text-3xl font-bold mb-4">What is Solana Token Creator?</h2>
                <p className="text-base font-medium mb-4">Solana Token Creator is a Smart Contract that allows everyone, without coding experience, to create SPL Tokens (tokens from Solana Chain) customized with the data you want (supply, name, symbol, description and image).All this process is faster and cheaper that any other option as it is automatically done. This tool is completely safe, audited by different development teams and used by biggest solana projects.</p>
            </div>
            <div className="bg-[#190544] text-white p-8 rounded-lg shadow-md mb-4">
                <h2 className="text-3xl font-bold mb-4">What can Token Admin do?</h2>
                <p className="text-base font-medium mb-4">In token admin you can modify Token metadata (Logo, Symbol, TokenName, Description, Social Links), Revoke Mint Authority, Revoke Freeze Authority, Token Mint, Token Burn. Token Admin</p>
            </div>
            <div className="bg-[#190544] text-white p-8 rounded-lg shadow-md mb-4">
                <h2 className="text-3xl font-bold mb-4">Is it Safe to use Solana Token Creator here?</h2>
                <p className="text-base font-medium mb-4">Yes, our tool is completely safe. It is a dApp that creates your token, giving you and only you the mint and freeze Authority (the control of a SPL Token). Our dApp is audited and used by hundred users every month.</p>
            </div>
            <div className="text-white mb-4">
                <h2 className="text-2xl font-bold mb-2">SPL Token Creator</h2>
                <p className="text-base font-medium">Whether you have development knowledge, our SPL Token Creator software is perfect. It will help you create tokens quickly and securely, saving you time and money.</p>
                <p className="text-base font-medium">Furthermore, you can count on exceptional support to help you with anything. Our highly trained team is available 24/7 to help you resolve any issues or questions you may have.</p>
                <p className="text-base font-medium">Start creating and managing your SPL tokens on Solana today with our reliable and secure online maker. We assure you won't find an easier and more efficient experience elsewhere!</p>
            </div>
            <div className="text-white mb-4">
                <h2 className="text-2xl font-bold mb-2">SOLANA TOKEN MAKER</h2>
                <p className="text-base font-medium">if you're looking for an easy and efficient way to create SPL tokens on the Solana blockchain, our online SPL token Maker is the perfect solution. We offer an intuitive and user-friendly platform that allows users to customize and launch their tokens in just a few minutes. With our Solana token maker, you don't have to be an expert in blockchain technology to create and manage your own tokens.</p>
                <p className="text-base font-medium">Furthermore, we provide our users with high security and privacy. All transactions and token information are protected by our smart contract on chain. You can be sure that your assets are secure during the process and after it finishes.</p>
                <p className="text-base font-medium">We aim to give users a smooth and efficient experience when creating SPL tokens on the Solana blockchain. With our online creator, you can customize your tokens with logos, descriptions and issuance details so they are unique and representative of your brand or project.</p>
            </div>
        </>
    );
};

const ToggleOption = ({ label, description, cost }) => {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleToggle = () => {
      setIsChecked(!isChecked);
    };
  
    return (
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center">
            <div 
              className={`w-12 h-6 ${isChecked ? 'bg-indigo-600' : 'bg-indigo-800'} rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out`}
              onClick={handleToggle}
            >
              <div 
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                  isChecked ? 'translate-x-6' : ''
                }`}
              ></div>
            </div>
            <span className="ml-3 font-medium">{label}</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">{description}</p>
        </div>
        <span className={`${isChecked ? 'text-green-400' : 'text-gray-500'}`}>
          {isChecked ? `+ ${cost} SOL` : ''}
        </span>
      </div>
    );
  };

  const InstructionStep = ({ number, text }) => (
    <div className="flex items-start">
      <span className="font-bold mr-2">{number}.</span>
      <p>{text}</p>
    </div>
  );
    

  const DropdownSection = ({ title, isOpen, toggle, children }) => {
    return (
      <div>
        <button
          onClick={toggle}
          className="bg-indigo-700 text-white px-4 py-2 rounded-full flex items-center justify-between w-full"
        >
          {title}
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {isOpen && <div className="mt-4 space-y-4">{children}</div>}
      </div>
    );
  };
  
  const InputField = ({ label }) => (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type="text"
        className="w-full bg-indigo-800 rounded-lg p-2 text-white"
        placeholder={label}
      />
    </div>
  );

export default QuickLaunchToken;
