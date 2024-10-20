import React from 'react';
import wallet from '../assets/wallet.png';

const ManageTokenHolders = () => {
    return (
        <div className="bg-[#060136] text-white p-8 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold mb-4">Manage Token Holders</h2>
            <p className="mb-6 font-semibold">
            Manage accounts holding your token, you can modify the state of the account if you have the authority to do so.
            </p>
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

export default ManageTokenHolders;
