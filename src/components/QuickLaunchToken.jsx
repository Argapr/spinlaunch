import React, { useState } from "react";
import { PlusIcon, ChevronDown, ChevronUp, Wallet } from "lucide-react";
import wallet from '../assets/wallet.png';

const QuickLaunchToken = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [showCustomPK, setShowCustomPK] = useState(false);
    return (
        <>
            <div className="bg-[#060136] text-white p-8 rounded-lg shadow-md mb-4">
                <div className="flex justify-between items-start">
                    <div className="w-2/3 pr-8">
                        <div className="w-full flex items-center px-5">
                            {/* Step 1 */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#7b5bd9] text-white text-lg font-semibold">
                                1
                            </div>
                            {/* Line */}
                            <div className="flex-1 h-[1px] bg-white"></div>
                            {/* Step 2 */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent text-white border-2 border-white text-lg font-semibold">
                                2
                            </div>
                            {/* Line */}
                            <div className="flex-1 h-[1px] bg-white"></div>
                            {/* Step 3 */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent text-white border-2 border-white text-lg font-semibold">
                                3
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-white text-sm font-medium">
                                Create Token
                            </p>
                            <p className="text-white text-sm font-medium">
                                Create Market ID
                            </p>
                            <p className="text-white text-sm font-medium">
                                Add Liquidity
                            </p>
                        </div>
                        <h1 className="mt-8 text-3xl font-bold mb-8">
                            Solana Token Creator
                        </h1>
                        <form className="space-y-6">
                        <div className="w-full grid grid-cols-2 gap-6">
                                <div>
                                    <label className="mb-2 text-xs font-bold">NAME</label>
                                    <input type="text" className="w-full p-3 bg-[#3f3270cc] border-2 border-[#57369e] rounded-2xl" />
                                </div>
                                <div>
                                    <label className="mb-2 text-xs font-bold">SYMBOL</label>
                                    <input type="text" className="w-full p-3 bg-[#3f3270cc] border-2 border-[#57369e] rounded-2xl" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6 w-full">
                                <div>
                                    <label className="mb-2 text-xs font-bold">DECIMALS</label>
                                    <input type="number" defaultValue={6} className="w-full p-3 bg-[#3f3270cc] border-2 border-[#57369e] rounded-2xl" />
                                </div>
                                <div>
                                    <label className="mb-2 text-xs font-bold">SUPPLY</label>
                                    <input type="number" defaultValue={1000000000} className="w-full p-3 bg-[#3f3270cc] border-2 border-[#57369e] rounded-2xl" />
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
                            <div className='w-full'>
                                <h2 className="text-lg font-bold mb-4">Advanced Setup (optional)</h2>

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
                            </div>

                            <div className="mt-6 space-y-4 w-full">
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

                            <button className="w-full border border-[#fff] bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-md font-medium flex items-center justify-center">
                                <img
                                src={wallet}
                                alt="Logo"
                                className="h-5 w-5 mr-2"
                                />
                                Connect Wallet
                            </button>
                            
                            <div className="text-center text-sm font-semibold">
                                Total fees: <span className="text-green-400">~0.075 SOL</span>
                            </div>
                        </form>
                    </div>
                    <div className="w-1/3">
                        <div className="bg-purple-700 rounded-lg aspect-video flex items-center justify-center mb-4">
                            <svg
                                className="w-16 h-16 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path
                                    fillRule="evenodd"
                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-4">
                                Launch your own Solana Token to Raydium in 5
                                minutes
                            </h2>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>Connect your Solana Wallet</li>
                                <li>Write the name you want for your Token</li>
                                <li>Indicate the symbol (max 8 characters)</li>
                                <li>
                                    Select the decimals quantity (0 for
                                    Whitelist Token, 6 for utility token)
                                </li>
                                <li>Put the Supply of your Token</li>
                                <li>
                                    Write the description you want for your SPL
                                    Token
                                </li>
                                <li>Upload the image for your token (PNG)</li>
                                <li>Upload the image for your token (PNG)</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#060136] text-white p-8 rounded-lg shadow-md mb-4">
                <h2 className="text-3xl font-bold mb-4">
                    What is Solana Token Creator?
                </h2>
                <p className="text-base font-medium mb-4">
                    Solana Token Creator is a Smart Contract that allows
                    everyone, without coding experience, to create SPL Tokens
                    (tokens from Solana Chain) customized with the data you want
                    (supply, name, symbol, description and image).All this
                    process is faster and cheaper that any other option as it is
                    automatically done. This tool is completely safe, audited by
                    different development teams and used by biggest solana
                    projects.
                </p>
            </div>
            <div className="bg-[#060136] text-white p-8 rounded-lg shadow-md mb-4">
                <h2 className="text-3xl font-bold mb-4">
                    What can Token Admin do?
                </h2>
                <p className="text-base font-medium mb-4">
                    In token admin you can modify Token metadata (Logo, Symbol,
                    TokenName, Description, Social Links), Revoke Mint
                    Authority, Revoke Freeze Authority, Token Mint, Token Burn.
                    Token Admin
                </p>
            </div>
            <div className="bg-[#060136] text-white p-8 rounded-lg shadow-md mb-4">
                <h2 className="text-3xl font-bold mb-4">
                    Is it Safe to use Solana Token Creator here?
                </h2>
                <p className="text-base font-medium mb-4">
                    Yes, our tool is completely safe. It is a dApp that creates
                    your token, giving you and only you the mint and freeze
                    Authority (the control of a SPL Token). Our dApp is audited
                    and used by hundred users every month.
                </p>
            </div>
            <div className="text-white mb-4">
                <h2 className="text-2xl font-bold mb-2">SPL Token Creator</h2>
                <p className="text-base font-medium">
                    Whether you have development knowledge, our SPL Token
                    Creator software is perfect. It will help you create tokens
                    quickly and securely, saving you time and money.
                </p>
                <p className="text-base font-medium">
                    Furthermore, you can count on exceptional support to help
                    you with anything. Our highly trained team is available 24/7
                    to help you resolve any issues or questions you may have.
                </p>
                <p className="text-base font-medium">
                    Start creating and managing your SPL tokens on Solana today
                    with our reliable and secure online maker. We assure you
                    won't find an easier and more efficient experience
                    elsewhere!
                </p>
            </div>
            <div className="text-white mb-4">
                <h2 className="text-2xl font-bold mb-2">SOLANA TOKEN MAKER</h2>
                <p className="text-base font-medium">
                    if you're looking for an easy and efficient way to create
                    SPL tokens on the Solana blockchain, our online SPL token
                    Maker is the perfect solution. We offer an intuitive and
                    user-friendly platform that allows users to customize and
                    launch their tokens in just a few minutes. With our Solana
                    token maker, you don't have to be an expert in blockchain
                    technology to create and manage your own tokens.
                </p>
                <p className="text-base font-medium">
                    Furthermore, we provide our users with high security and
                    privacy. All transactions and token information are
                    protected by our smart contract on chain. You can be sure
                    that your assets are secure during the process and after it
                    finishes.
                </p>
                <p className="text-base font-medium">
                    We aim to give users a smooth and efficient experience when
                    creating SPL tokens on the Solana blockchain. With our
                    online creator, you can customize your tokens with logos,
                    descriptions and issuance details so they are unique and
                    representative of your brand or project.
                </p>
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
      <span className="text-xs font-bold">{label}</span>
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
        </div>
        <p className="text-xs text-gray-400 mt-1">{description}</p>
      </div>
      <span className={`${isChecked ? 'text-green-400' : 'text-gray-500'}`}>
        {isChecked ? `+ ${cost} SOL` : ''}
      </span>
    </div>
  );
}

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


export default QuickLaunchToken;
