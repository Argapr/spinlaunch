import React, { useState } from "react";
import { Check } from "lucide-react";
import wallet from "../assets/wallet.png";

const CustomCheckIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="10" cy="10" r="9" stroke="#4F46E5" strokeWidth="2" />
        <path
            d="M6 10L9 13L14 7"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const CreateOpenBookMarketID = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isBaseOpen, setBasedIsOpen] = useState(false);
    const [selectedToken, setSelectedToken] = useState(null);
    const [basedToken, setBasedToken] = useState(null);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const toggleBaseDropdown = () => setBasedIsOpen(!isBaseOpen);

    const baseToken = (token) => {
        setBasedToken(token);
        setBasedIsOpen(false);
    };

    const selectToken = (token) => {
        setSelectedToken(token);
        setIsOpen(false);
    };

    const [count, setCount] = useState(1);

    const increment = (e) => {
        e.preventDefault();
        setCount((prevCount) => (parseFloat(prevCount) + 0.01).toFixed(2));
    };

    const decrement = (e) => {
        e.preventDefault();
        setCount((prevCount) => {
            const newCount = parseFloat(prevCount) - 0.01;
            return newCount > 0 ? parseFloat(newCount.toFixed(2)) : 0;
        });
    };
const [countTick, setCountTick] = useState(0.0001);

const incrementTick = (e) => {
    e.preventDefault();
    setCountTick((prevCountTick) => {
        const newCountTick = parseFloat(prevCountTick) + 0.00001;
        return newCountTick.toFixed(5); // Keep five decimal places
    });
};

const decrementTick = (e) => {
    e.preventDefault();
    setCountTick((prevCountTick) => {
        const newCountTick = parseFloat(prevCountTick) - 0.00001;
        return newCountTick >= 0.0001 ? newCountTick.toFixed(5) : 0.0001;
    });
};

    const tokens = [{ id: 1, name: "SOL" }];
    const basetokens = [{ id: 1, name: "SOL" }];
    return (
        <>
            <div className="bg-[#060136] text-white p-8 rounded-lg shadow-md mb-4">
                <div className="flex justify-between items-start">
                    <div className="w-2/3 pr-8">
                        <h1 className="text-4xl font-bold mb-8">
                            Create OpenBook Market ID
                        </h1>
                        <form className="space-y-6 flex flex-col items-center">
                            <div className="relative w-full">
                                <div className="flex gap-3">
                                    <div className="w-1/2">
                                        <div className="text-white mb-2 text-sm font-bold">
                                            Base token
                                        </div>
                                        <div
                                            className="bg-indigo-900 border-2 border-[#57369e] rounded-lg p-3 flex items-center justify-between cursor-pointer"
                                            onClick={toggleBaseDropdown}
                                        >
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 bg-indigo-700 rounded-full mr-3"></div>
                                                <span className="text-gray-400">
                                                    {basedToken
                                                        ? basedToken.name
                                                        : "Select token"}
                                                </span>
                                            </div>
                                            <CustomCheckIcon />
                                        </div>
                                        {isBaseOpen && (
                                            <div className="absolute w-1/2 mt-2 bg-indigo-900 rounded-lg shadow-lg z-10">
                                                {basetokens.length > 0 ? (
                                                    basetokens.map((token) => (
                                                        <div
                                                            key={token.id}
                                                            className="p-4 hover:bg-indigo-800 cursor-pointer flex items-center justify-between"
                                                            onClick={() =>
                                                                baseToken(token)
                                                            }
                                                        >
                                                            <span className="w-full text-center flex justify-center items-center">
                                                                {token.name}
                                                            </span>
                                                            {basedToken &&
                                                                basedToken.id ===
                                                                    token.id && (
                                                                    <Check
                                                                        className="text-green-500"
                                                                        size={
                                                                            20
                                                                        }
                                                                    />
                                                                )}
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="p-4 text-center text-gray-400">
                                                        No data found
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    <div className="w-1/2">
                                        <div className="text-white mb-2 text-sm font-bold">
                                            Quote token
                                        </div>
                                        <div
                                            className="bg-indigo-900 border-2 border-[#57369e] rounded-lg p-3 flex items-center justify-between cursor-pointer"
                                            onClick={toggleDropdown}
                                        >
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 bg-indigo-700 rounded-full mr-3"></div>
                                                <span className="text-gray-400">
                                                    {selectedToken
                                                        ? selectedToken.name
                                                        : "Select token"}
                                                </span>
                                            </div>
                                            <CustomCheckIcon />
                                        </div>
                                        {isOpen && (
                                            <div className="absolute w-1/2 mt-2 bg-indigo-900 rounded-lg shadow-lg z-10">
                                                {tokens.length > 0 ? (
                                                    tokens.map((token) => (
                                                        <div
                                                            key={token.id}
                                                            className="p-4 hover:bg-indigo-800 cursor-pointer flex items-center justify-between"
                                                            onClick={() =>
                                                                selectToken(
                                                                    token
                                                                )
                                                            }
                                                        >
                                                            <span className="w-full text-center flex justify-center items-center">
                                                                {token.name}
                                                            </span>
                                                            {selectedToken &&
                                                                selectedToken.id ===
                                                                    token.id && (
                                                                    <Check
                                                                        className="text-green-500"
                                                                        size={
                                                                            20
                                                                        }
                                                                    />
                                                                )}
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="p-4 text-center text-gray-400">
                                                        No data found
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-3">
                                    <div className="w-1/2">
                                        <div className="text-white mb-2 text-sm font-bold">
                                            Min Order Size (Minimum Buy):
                                        </div>
                                        <div className="bg-indigo-900 border-2 border-[#57369e] rounded-lg p-3 flex items-center justify-between cursor-pointer">
                                            <div className="flex items-center">
                                                <button
                                                    onClick={decrement}
                                                    className="text-gray-400 bg-indigo-700 w-8 h-8 rounded-full flex items-center justify-center mr-3"
                                                >
                                                    -
                                                </button>
                                                <span className="text-gray-400">
                                                    {count}
                                                </span>
                                                <button
                                                    onClick={increment}
                                                    className="text-gray-400 bg-indigo-700 w-8 h-8 rounded-full flex items-center justify-center ml-3"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2">
                                        <div className="text-white mb-2 text-sm font-bold">
                                            Min Order Size (Minimum Buy):
                                        </div>
                                        <div className="bg-indigo-900 border-2 border-[#57369e] rounded-lg p-3 flex items-center justify-between cursor-pointer">
                                            <div className="flex items-center">
                                                <button
                                                    onClick={decrementTick}
                                                    className="text-gray-400 bg-indigo-700 w-8 h-8 rounded-full flex items-center justify-center mr-3"
                                                >
                                                    -
                                                </button>
                                                <span className="text-gray-400">
                                                    {countTick}
                                                </span>
                                                <button
                                                    onClick={incrementTick}
                                                    className="text-gray-400 bg-indigo-700 w-8 h-8 rounded-full flex items-center justify-center ml-3"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm mt-1">Your balance: 0 </p>
                                <ToggleOption />
                                <div className="flex justify-between mt-2">
                                    <p className="text-sm">Total tokens: 0</p>
                                    <p className="text-sm">
                                        Total Addresses: 0
                                    </p>
                                </div>
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
                                How to use Solana Multisender?
                            </h2>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>Connect your Solana Wallet</li>
                                <li>Select the token you want to airdrop</li>
                                <li>
                                    Introduce the token quantity each wallet
                                    will receive
                                </li>
                                <li>Write the list of addresses</li>
                                <li>Verify all the information is correct</li>
                                <li>
                                    Write the description you want for your SPL
                                    Token
                                </li>
                                <li>
                                    Click on Process Send Token and accept the
                                    transaction
                                </li>
                                <li>Wait until your airdrop has finished!</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#190544] text-white p-8 rounded-lg shadow-md mb-4">
                <h2 className="text-2xl font-bold mb-2">
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
            <div className="bg-[#190544] text-white p-8 rounded-lg shadow-md mb-4">
                <h2 className="text-2xl font-bold mb-2">
                    What can Token Admin do?
                </h2>
                <p className="text-base font-medium mb-4">
                    In token admin you can modify Token metadata (Logo, Symbol,
                    TokenName, Description, Social Links), Revoke Mint
                    Authority, Revoke Freeze Authority, Token Mint, Token Burn.
                    Token Admin
                </p>
            </div>
            <div className="bg-[#190544] text-white p-8 rounded-lg shadow-md mb-4">
                <h2 className="text-2xl font-bold mb-2">
                    Is it Safe to use Solana Token Creator here?
                </h2>
                <p className="text-base font-medium mb-4">
                    Yes, our tool is completely safe. It is a dApp that creates
                    your token, giving you and only you the mint and freeze
                    Authority (the control of a SPL Token). Our dApp is audited
                    and used by hundred users every month.
                </p>
            </div>
        </>
    );
};
const ToggleOption = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="flex flex-col mt-4">
            <div>
                <div className="flex items-center">
                    <div
                        className={`w-12 h-6 ${
                            isChecked ? "bg-indigo-600" : "bg-indigo-800"
                        } rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out`}
                        onClick={handleToggle}
                    >
                        <div
                            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                                isChecked ? "translate-x-6" : ""
                            }`}
                        ></div>
                    </div>
                </div>
            </div>
            <span className={`${isChecked ? "block" : "hidden"}`}>
                <div className="mt-4">
                    <textarea
                        className="w-full p-3 bg-indigo-900 rounded"
                        rows={4}
                        placeholder="Address, amount"
                    ></textarea>
                </div>
            </span>
            <button
                className={`${
                    isChecked
                        ? "hidden"
                        : "mt-3 border border-[#fff] bg-transparent hover:bg-purple-700 text-white px-4 py-2 m-1 rounded-md font-medium"
                }`}
            >
                Add Recipient
            </button>
        </div>
    );
};

export default CreateOpenBookMarketID;
