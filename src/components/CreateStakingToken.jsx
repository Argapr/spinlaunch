import React, { useState } from "react";

const CreateStakingToken = () => {
    const [isLive, setIsLive] = useState(true);
    const [isStakedOnly, setIsStakedOnly] = useState(false);
    return (
        <div>
            <p className="text-center text-4xl m-[85px] font-bold">
                Staking Pool
            </p>
            <div className="flex items-center justify-between mx-20">
                {/* Toggle Live / Finished */}
                <div className="flex items-center space-x-2">
                    <div className="flex bg-[#3f3270cc] rounded-full border border-purple-500">
                        <button
                            className={`px-3 py-1 rounded-full ${
                                isLive
                                    ? "bg-purple-600 text-[#fff] font-bold text-sm"
                                    : "text-[#fff] font-bold text-sm"
                            }`}
                            onClick={() => setIsLive(true)}
                        >
                            Live
                        </button>
                        <button
                            className={`px-3 py-1 rounded-full ${
                                !isLive
                                    ? "bg-purple-600 text-[#fff] font-bold text-sm"
                                    : "text-[#fff] font-bold text-sm"
                            }`}
                            onClick={() => setIsLive(false)}
                        >
                            Finished
                        </button>
                    </div>

                    {/* Staked Only */}
                    <div className="flex flex-col space-y-1">
                        <span className="text-white text-xs font-bold">
                            STAKED ONLY
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only"
                                checked={isStakedOnly}
                                onChange={() => setIsStakedOnly(!isStakedOnly)}
                            />
                            <div className="w-12 h-7 bg-[#3f3270cc] rounded-full p-1">
                                <div
                                    className={`h-5 w-5 bg-white rounded-full transition-transform ${
                                        isStakedOnly
                                            ? "translate-x-4"
                                            : "translate-x-0"
                                    }`}
                                ></div>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    {/* Sort By */}
                    <div className="flex items-center space-x-2">
                        <span className="text-white text-xs font-bold">
                            SORT BY
                        </span>
                        <div className="relative">
                            <select className="bg-[#3f3270cc] font-bold text-white text-xs border border-white rounded-full py-2 px-4 pr-10 appearance-none outline-none">
                                <option className="text-xs font-bold">
                                    APR
                                </option>
                                <option className="text-xs font-bold">
                                    Earned
                                </option>
                                <option className="text-xs font-bold">
                                    Total Staked
                                </option>
                                <option className="text-xs font-bold">
                                    Latest
                                </option>
                            </select>
                            {/* Custom Arrow */}
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="relative flex items-center">
                        <span className="text-white text-xs font-bold mr-2">
                            SEARCH
                        </span>
                        <input
                            type="text"
                            placeholder="Search pools"
                            className="bg-[#3f3270cc] placeholder:text-[#fff] border border-white rounded-full py-2 px-4 text-xs outline-none font-bold text-[#fff]"
                        />
                        <svg
                            className="w-5 h-5 absolute right-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-4.35-4.35m1.45-5.65A7.5 7.5 0 1110 2.5a7.5 7.5 0 017.5 7.5z"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-center my-7 mx-20">
                <div class="overflow-hidden rounded-3xl bg-[#0d0734]">
                    <div class="p-6 flex items-center justify-between bg-cardHeader">
                        <div>
                            <p class="text-xl font-bold">Earn MINKY</p>
                            <span class="text-xs">Stake MINKY</span>
                        </div>
                        <img
                            src="https://ipfs.io/ipfs/QmWYhygttQtriJz8t3hezBL9StTw86ZZCYKZvi5iCeVL3m"
                            alt="token"
                            width="60"
                            height="60"
                            loading="lazy"
                            class="w-[60px] h-[60px] rounded-full object-cover"
                        />
                    </div>
                    <div class="p-6 border-b border-border">
                        <div class="flex items-center justify-between">
                            <button data-state="closed">
                                <div class="underline underline-offset-2 decoration-dashed decoration-[#9c9ae9]">
                                    APR:
                                </div>
                            </button>
                            <button
                                type="button"
                                class="text-base font-bold flex items-center gap-1 w-fit hover:opacity-70"
                            >
                                <span class="">
                                    <span>0.00</span>%
                                </span>
                                <svg
                                    viewBox="0 0 24 24"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                >
                                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"></path>
                                    <path d="M11.25 7.72H6.25V9.22H11.25V7.72Z"></path>
                                    <path d="M18 15.75H13V17.25H18V15.75Z"></path>
                                    <path d="M18 13.25H13V14.75H18V13.25Z"></path>
                                    <path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"></path>
                                    <path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="mt-6">
                            <span class="uppercase text-primary block mb-2 font-bold">
                                Pool has ended
                            </span>
                            <button
                                type="button"
                                class="text-white rounded-md h-[45px] border transition-all overflow-hidden font-bold font-sans text-base relative hover:opacity-90 group enabled:active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed px-5 flex items-center justify-center gap-2 whitespace-nowrap bg-[#6f56b3] border-primary-border"
                            >
                                <svg
                                    width="15"
                                    height="12"
                                    viewBox="0 0 15 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.25 0H1.5C1.10218 0 0.720644 0.135079 0.43934 0.375522C0.158035 0.615965 0 0.942075 0 1.28211V10.2569C0 10.5969 0.158035 10.923 0.43934 11.1635C0.720644 11.4039 1.10218 11.539 1.5 11.539H13.5C13.8978 11.539 14.2794 11.4039 14.5607 11.1635C14.842 10.923 15 10.5969 15 10.2569V3.20528C15 3.03526 14.921 2.87221 14.7803 2.75199C14.6397 2.63176 14.4489 2.56423 14.25 2.56423H2.25C2.05109 2.56423 1.86032 2.49669 1.71967 2.37646C1.57902 2.25624 1.5 2.09319 1.5 1.92317C1.5 1.75315 1.57902 1.5901 1.71967 1.46987C1.86032 1.34965 2.05109 1.28211 2.25 1.28211H15V0.641056C15 0.471038 14.921 0.307982 14.7803 0.187761C14.6397 0.0675396 14.4489 0 14.25 0ZM12.375 6.09003C12.5975 6.09003 12.815 6.14643 13 6.25209C13.185 6.35775 13.3292 6.50793 13.4144 6.68364C13.4995 6.85934 13.5218 7.05269 13.4784 7.23922C13.435 7.42574 13.3278 7.59708 13.1705 7.73156C13.0132 7.86604 12.8127 7.95762 12.5945 7.99473C12.3762 8.03183 12.15 8.01279 11.9445 7.94001C11.7389 7.86723 11.5632 7.74398 11.4396 7.58585C11.316 7.42771 11.25 7.2418 11.25 7.05162C11.25 6.79659 11.3685 6.55201 11.5795 6.37168C11.7905 6.19134 12.0766 6.09003 12.375 6.09003Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                Connect Wallet
                            </button>
                        </div>
                    </div>
                    <div class="px-6 py-4">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <div class="border-2 border-primary-border flex items-  center justify-between gap-1 rounded-full py-1 px-2 w-[90px]">
                                    <span> Manual</span>
                                </div>
                                <button data-state="closed" class="">
                                    <svg
                                        width="11"
                                        height="11"
                                        viewBox="0 0 11 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11 5.5C11 8.53824 8.53735 11 5.5 11C2.46265 11 0 8.53824 0 5.5C0 2.46353 2.46265 0 5.5 0C8.53735 0 11 2.46353 11 5.5ZM5.64759 1.81855C4.43899 1.81855 3.66815 2.32768 3.06283 3.23254C2.98442 3.34977 3.01065 3.50787 3.12305 3.5931L3.89258 4.17658C4.00801 4.26412 4.17248 4.24329 4.26217 4.12952C4.65834 3.62703 4.93 3.33564 5.533 3.33564C5.98606 3.33564 6.54646 3.62723 6.54646 4.06656C6.54646 4.39869 6.27228 4.56926 5.82494 4.82006C5.30324 5.11252 4.6129 5.47651 4.6129 6.3871V6.47581C4.6129 6.62278 4.73206 6.74194 4.87903 6.74194H6.12097C6.26794 6.74194 6.3871 6.62278 6.3871 6.47581V6.44624C6.3871 5.81503 8.23195 5.78875 8.23195 4.08065C8.23195 2.79431 6.89764 1.81855 5.64759 1.81855ZM5.5 7.31855C4.93747 7.31855 4.47984 7.77618 4.47984 8.33871C4.47984 8.90122 4.93747 9.35887 5.5 9.35887C6.06253 9.35887 6.52016 8.90122 6.52016 8.33871C6.52016 7.77618 6.06253 7.31855 5.5 7.31855Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <button
                                type="button"
                                class="px-2 flex items-center justify-end basis-[10%] gap-1 text-[#2da648]"
                            >
                                <p class="font-bold text-base">Details</p>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class=""
                                >
                                    <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="overflow-hidden rounded-3xl bg-[#0d0734]">
                    <div class="p-6 flex items-center justify-between bg-cardHeader">
                        <div>
                            <p class="text-xl font-bold">Earn IM</p>
                            <span class="text-xs">Stake IM</span>
                        </div>
                        <img
                            src="https://raw.githubusercontent.com/axion-labs/other/master/IM.png"
                            alt="token"
                            width="60"
                            height="60"
                            loading="lazy"
                            class="w-[60px] h-[60px] rounded-full object-cover"
                        />
                    </div>
                    <div class="p-6 border-b border-border">
                        <div class="flex items-center justify-between">
                            <button data-state="closed">
                                <div class="underline underline-offset-2 decoration-dashed decoration-[#9c9ae9]">
                                    APR:
                                </div>
                            </button>
                            <button
                                type="button"
                                class="text-base font-bold flex items-center gap-1 w-fit hover:opacity-70"
                            >
                                <span class="">
                                    <span>0.00</span>%
                                </span>
                                <svg
                                    viewBox="0 0 24 24"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                >
                                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"></path>
                                    <path d="M11.25 7.72H6.25V9.22H11.25V7.72Z"></path>
                                    <path d="M18 15.75H13V17.25H18V15.75Z"></path>
                                    <path d="M18 13.25H13V14.75H18V13.25Z"></path>
                                    <path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"></path>
                                    <path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="mt-6">
                            <span class="uppercase text-primary block mb-2 font-bold">
                                Start earning
                            </span>
                            <button
                                type="button"
                                class="text-white rounded-md h-[45px] border transition-all overflow-hidden font-bold font-sans text-base relative hover:opacity-90 group enabled:active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed px-5 flex items-center justify-center gap-2 whitespace-nowrap bg-[#6f56b3] border-primary-border"
                            >
                                <svg
                                    width="15"
                                    height="12"
                                    viewBox="0 0 15 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.25 0H1.5C1.10218 0 0.720644 0.135079 0.43934 0.375522C0.158035 0.615965 0 0.942075 0 1.28211V10.2569C0 10.5969 0.158035 10.923 0.43934 11.1635C0.720644 11.4039 1.10218 11.539 1.5 11.539H13.5C13.8978 11.539 14.2794 11.4039 14.5607 11.1635C14.842 10.923 15 10.5969 15 10.2569V3.20528C15 3.03526 14.921 2.87221 14.7803 2.75199C14.6397 2.63176 14.4489 2.56423 14.25 2.56423H2.25C2.05109 2.56423 1.86032 2.49669 1.71967 2.37646C1.57902 2.25624 1.5 2.09319 1.5 1.92317C1.5 1.75315 1.57902 1.5901 1.71967 1.46987C1.86032 1.34965 2.05109 1.28211 2.25 1.28211H15V0.641056C15 0.471038 14.921 0.307982 14.7803 0.187761C14.6397 0.0675396 14.4489 0 14.25 0ZM12.375 6.09003C12.5975 6.09003 12.815 6.14643 13 6.25209C13.185 6.35775 13.3292 6.50793 13.4144 6.68364C13.4995 6.85934 13.5218 7.05269 13.4784 7.23922C13.435 7.42574 13.3278 7.59708 13.1705 7.73156C13.0132 7.86604 12.8127 7.95762 12.5945 7.99473C12.3762 8.03183 12.15 8.01279 11.9445 7.94001C11.7389 7.86723 11.5632 7.74398 11.4396 7.58585C11.316 7.42771 11.25 7.2418 11.25 7.05162C11.25 6.79659 11.3685 6.55201 11.5795 6.37168C11.7905 6.19134 12.0766 6.09003 12.375 6.09003Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                Connect Wallet
                            </button>
                        </div>
                    </div>
                    <div class="px-6 py-4">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <div class="border-2 border-primary-border flex items-  center justify-between gap-1 rounded-full py-1 px-2 w-[90px]">
                                    <span> Manual</span>
                                </div>
                                <button data-state="closed" class="">
                                    <svg
                                        width="11"
                                        height="11"
                                        viewBox="0 0 11 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11 5.5C11 8.53824 8.53735 11 5.5 11C2.46265 11 0 8.53824 0 5.5C0 2.46353 2.46265 0 5.5 0C8.53735 0 11 2.46353 11 5.5ZM5.64759 1.81855C4.43899 1.81855 3.66815 2.32768 3.06283 3.23254C2.98442 3.34977 3.01065 3.50787 3.12305 3.5931L3.89258 4.17658C4.00801 4.26412 4.17248 4.24329 4.26217 4.12952C4.65834 3.62703 4.93 3.33564 5.533 3.33564C5.98606 3.33564 6.54646 3.62723 6.54646 4.06656C6.54646 4.39869 6.27228 4.56926 5.82494 4.82006C5.30324 5.11252 4.6129 5.47651 4.6129 6.3871V6.47581C4.6129 6.62278 4.73206 6.74194 4.87903 6.74194H6.12097C6.26794 6.74194 6.3871 6.62278 6.3871 6.47581V6.44624C6.3871 5.81503 8.23195 5.78875 8.23195 4.08065C8.23195 2.79431 6.89764 1.81855 5.64759 1.81855ZM5.5 7.31855C4.93747 7.31855 4.47984 7.77618 4.47984 8.33871C4.47984 8.90122 4.93747 9.35887 5.5 9.35887C6.06253 9.35887 6.52016 8.90122 6.52016 8.33871C6.52016 7.77618 6.06253 7.31855 5.5 7.31855Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <button
                                type="button"
                                class="px-2 flex items-center justify-end basis-[10%] gap-1 text-[#2da648]"
                            >
                                <p class="font-bold text-base">Details</p>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class=""
                                >
                                    <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="overflow-hidden rounded-3xl bg-[#0d0734]">
                    <div class="p-6 flex items-center justify-between bg-cardHeader">
                        <div>
                            <p class="text-xl font-bold">Earn SPIN</p>
                            <span class="text-xs">Stake SPIN</span>
                        </div>
                        <img
                            src="https://ipfs.io/ipfs/bafkreiase53etptbcpm36cmh6iwqidrloyhqao7cmzc7r3fltwx2qvpsma"
                            alt="token"
                            width="60"
                            height="60"
                            loading="lazy"
                            class="w-[60px] h-[60px] rounded-full object-cover"
                        />
                    </div>
                    <div class="p-6 border-b border-border">
                        <div class="flex items-center justify-between">
                            <button data-state="closed">
                                <div class="underline underline-offset-2 decoration-dashed decoration-[#9c9ae9]">
                                    APR:
                                </div>
                            </button>
                            <button
                                type="button"
                                class="text-base font-bold text-[#2da648] flex items-center gap-1 w-fit hover:opacity-70"
                            >
                                <span class="">
                                    <span>36.00</span>%
                                </span>
                                <svg
                                    viewBox="0 0 24 24"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                >
                                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"></path>
                                    <path d="M11.25 7.72H6.25V9.22H11.25V7.72Z"></path>
                                    <path d="M18 15.75H13V17.25H18V15.75Z"></path>
                                    <path d="M18 13.25H13V14.75H18V13.25Z"></path>
                                    <path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"></path>
                                    <path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="mt-6">
                            <span class="uppercase text-primary block mb-2 font-bold">
                                Pool has ended
                            </span>
                            <button
                                type="button"
                                class="text-white rounded-md h-[45px] border transition-all overflow-hidden font-bold font-sans text-base relative hover:opacity-90 group enabled:active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed px-5 flex items-center justify-center gap-2 whitespace-nowrap bg-[#6f56b3] border-primary-border"
                            >
                                <svg
                                    width="15"
                                    height="12"
                                    viewBox="0 0 15 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.25 0H1.5C1.10218 0 0.720644 0.135079 0.43934 0.375522C0.158035 0.615965 0 0.942075 0 1.28211V10.2569C0 10.5969 0.158035 10.923 0.43934 11.1635C0.720644 11.4039 1.10218 11.539 1.5 11.539H13.5C13.8978 11.539 14.2794 11.4039 14.5607 11.1635C14.842 10.923 15 10.5969 15 10.2569V3.20528C15 3.03526 14.921 2.87221 14.7803 2.75199C14.6397 2.63176 14.4489 2.56423 14.25 2.56423H2.25C2.05109 2.56423 1.86032 2.49669 1.71967 2.37646C1.57902 2.25624 1.5 2.09319 1.5 1.92317C1.5 1.75315 1.57902 1.5901 1.71967 1.46987C1.86032 1.34965 2.05109 1.28211 2.25 1.28211H15V0.641056C15 0.471038 14.921 0.307982 14.7803 0.187761C14.6397 0.0675396 14.4489 0 14.25 0ZM12.375 6.09003C12.5975 6.09003 12.815 6.14643 13 6.25209C13.185 6.35775 13.3292 6.50793 13.4144 6.68364C13.4995 6.85934 13.5218 7.05269 13.4784 7.23922C13.435 7.42574 13.3278 7.59708 13.1705 7.73156C13.0132 7.86604 12.8127 7.95762 12.5945 7.99473C12.3762 8.03183 12.15 8.01279 11.9445 7.94001C11.7389 7.86723 11.5632 7.74398 11.4396 7.58585C11.316 7.42771 11.25 7.2418 11.25 7.05162C11.25 6.79659 11.3685 6.55201 11.5795 6.37168C11.7905 6.19134 12.0766 6.09003 12.375 6.09003Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                Connect Wallet
                            </button>
                        </div>
                    </div>
                    <div class="px-6 py-4">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <div class="border-2 border-primary-border flex items-  center justify-between gap-1 rounded-full py-1 px-2 w-[90px]">
                                    <span> Manual</span>
                                </div>
                                <button data-state="closed" class="">
                                    <svg
                                        width="11"
                                        height="11"
                                        viewBox="0 0 11 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11 5.5C11 8.53824 8.53735 11 5.5 11C2.46265 11 0 8.53824 0 5.5C0 2.46353 2.46265 0 5.5 0C8.53735 0 11 2.46353 11 5.5ZM5.64759 1.81855C4.43899 1.81855 3.66815 2.32768 3.06283 3.23254C2.98442 3.34977 3.01065 3.50787 3.12305 3.5931L3.89258 4.17658C4.00801 4.26412 4.17248 4.24329 4.26217 4.12952C4.65834 3.62703 4.93 3.33564 5.533 3.33564C5.98606 3.33564 6.54646 3.62723 6.54646 4.06656C6.54646 4.39869 6.27228 4.56926 5.82494 4.82006C5.30324 5.11252 4.6129 5.47651 4.6129 6.3871V6.47581C4.6129 6.62278 4.73206 6.74194 4.87903 6.74194H6.12097C6.26794 6.74194 6.3871 6.62278 6.3871 6.47581V6.44624C6.3871 5.81503 8.23195 5.78875 8.23195 4.08065C8.23195 2.79431 6.89764 1.81855 5.64759 1.81855ZM5.5 7.31855C4.93747 7.31855 4.47984 7.77618 4.47984 8.33871C4.47984 8.90122 4.93747 9.35887 5.5 9.35887C6.06253 9.35887 6.52016 8.90122 6.52016 8.33871C6.52016 7.77618 6.06253 7.31855 5.5 7.31855Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <button
                                type="button"
                                class="px-2 flex items-center justify-end basis-[10%] gap-1 text-[#2da648]"
                            >
                                <p class="font-bold text-base">Details</p>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class=""
                                >
                                    <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="overflow-hidden rounded-3xl bg-[#0d0734]">
                    <div class="p-6 flex items-center justify-between bg-cardHeader">
                        <div>
                            <p class="text-xl font-bold">Earn SOLCHAT</p>
                            <span class="text-xs">Stake SOLCHAT</span>
                        </div>
                        <img
                            src="https://ipfs.io/ipfs/bafkreiek2ki64nyhophxjmv3lixky4mnifyzk7e2wq7rcpqbqk25clma4e"
                            alt="token"
                            width="60"
                            height="60"
                            loading="lazy"
                            class="w-[60px] h-[60px] rounded-full object-cover"
                        />
                    </div>
                    <div class="p-6 border-b border-border">
                        <div class="flex items-center justify-between">
                            <button data-state="closed">
                                <div class="underline underline-offset-2 decoration-dashed decoration-[#9c9ae9]">
                                    APR:
                                </div>
                            </button>
                            <button
                                type="button"
                                class="text-base font-bold flex items-center gap-1 w-fit hover:opacity-70"
                            >
                                <span class="">
                                    <span>0.00</span>%
                                </span>
                                <svg
                                    viewBox="0 0 24 24"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                >
                                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"></path>
                                    <path d="M11.25 7.72H6.25V9.22H11.25V7.72Z"></path>
                                    <path d="M18 15.75H13V17.25H18V15.75Z"></path>
                                    <path d="M18 13.25H13V14.75H18V13.25Z"></path>
                                    <path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"></path>
                                    <path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="mt-6">
                            <span class="uppercase text-primary block mb-2 font-bold">
                                Pool has ended
                            </span>
                            <button
                                type="button"
                                class="text-white rounded-md h-[45px] border transition-all overflow-hidden font-bold font-sans text-base relative hover:opacity-90 group enabled:active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed px-5 flex items-center justify-center gap-2 whitespace-nowrap bg-[#6f56b3] border-primary-border"
                            >
                                <svg
                                    width="15"
                                    height="12"
                                    viewBox="0 0 15 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.25 0H1.5C1.10218 0 0.720644 0.135079 0.43934 0.375522C0.158035 0.615965 0 0.942075 0 1.28211V10.2569C0 10.5969 0.158035 10.923 0.43934 11.1635C0.720644 11.4039 1.10218 11.539 1.5 11.539H13.5C13.8978 11.539 14.2794 11.4039 14.5607 11.1635C14.842 10.923 15 10.5969 15 10.2569V3.20528C15 3.03526 14.921 2.87221 14.7803 2.75199C14.6397 2.63176 14.4489 2.56423 14.25 2.56423H2.25C2.05109 2.56423 1.86032 2.49669 1.71967 2.37646C1.57902 2.25624 1.5 2.09319 1.5 1.92317C1.5 1.75315 1.57902 1.5901 1.71967 1.46987C1.86032 1.34965 2.05109 1.28211 2.25 1.28211H15V0.641056C15 0.471038 14.921 0.307982 14.7803 0.187761C14.6397 0.0675396 14.4489 0 14.25 0ZM12.375 6.09003C12.5975 6.09003 12.815 6.14643 13 6.25209C13.185 6.35775 13.3292 6.50793 13.4144 6.68364C13.4995 6.85934 13.5218 7.05269 13.4784 7.23922C13.435 7.42574 13.3278 7.59708 13.1705 7.73156C13.0132 7.86604 12.8127 7.95762 12.5945 7.99473C12.3762 8.03183 12.15 8.01279 11.9445 7.94001C11.7389 7.86723 11.5632 7.74398 11.4396 7.58585C11.316 7.42771 11.25 7.2418 11.25 7.05162C11.25 6.79659 11.3685 6.55201 11.5795 6.37168C11.7905 6.19134 12.0766 6.09003 12.375 6.09003Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                Connect Wallet
                            </button>
                        </div>
                    </div>
                    <div class="px-6 py-4">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <div class="border-2 border-primary-border flex items-  center justify-between gap-1 rounded-full py-1 px-2 w-[90px]">
                                    <span> Manual</span>
                                </div>
                                <button data-state="closed" class="">
                                    <svg
                                        width="11"
                                        height="11"
                                        viewBox="0 0 11 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11 5.5C11 8.53824 8.53735 11 5.5 11C2.46265 11 0 8.53824 0 5.5C0 2.46353 2.46265 0 5.5 0C8.53735 0 11 2.46353 11 5.5ZM5.64759 1.81855C4.43899 1.81855 3.66815 2.32768 3.06283 3.23254C2.98442 3.34977 3.01065 3.50787 3.12305 3.5931L3.89258 4.17658C4.00801 4.26412 4.17248 4.24329 4.26217 4.12952C4.65834 3.62703 4.93 3.33564 5.533 3.33564C5.98606 3.33564 6.54646 3.62723 6.54646 4.06656C6.54646 4.39869 6.27228 4.56926 5.82494 4.82006C5.30324 5.11252 4.6129 5.47651 4.6129 6.3871V6.47581C4.6129 6.62278 4.73206 6.74194 4.87903 6.74194H6.12097C6.26794 6.74194 6.3871 6.62278 6.3871 6.47581V6.44624C6.3871 5.81503 8.23195 5.78875 8.23195 4.08065C8.23195 2.79431 6.89764 1.81855 5.64759 1.81855ZM5.5 7.31855C4.93747 7.31855 4.47984 7.77618 4.47984 8.33871C4.47984 8.90122 4.93747 9.35887 5.5 9.35887C6.06253 9.35887 6.52016 8.90122 6.52016 8.33871C6.52016 7.77618 6.06253 7.31855 5.5 7.31855Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <button
                                type="button"
                                class="px-2 flex items-center justify-end basis-[10%] gap-1 text-[#2da648]"
                            >
                                <p class="font-bold text-base">Details</p>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class=""
                                >
                                    <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="overflow-hidden rounded-3xl bg-[#0d0734]">
                    <div class="p-6 flex items-center justify-between bg-cardHeader">
                        <div>
                            <p class="text-xl font-bold">Earn USACAT</p>
                            <span class="text-xs">Stake USACAT</span>
                        </div>
                        <img
                            src="https://ipfs.io/ipfs/bafkreiesgxbxzmm6jtxig25tttpbsefnlivh3tcy3bqlvgwvg6dt3j7kwm"
                            alt="token"
                            width="60"
                            height="60"
                            loading="lazy"
                            class="w-[60px] h-[60px] rounded-full object-cover"
                        />
                    </div>
                    <div class="p-6 border-b border-border">
                        <div class="flex items-center justify-between">
                            <button data-state="closed">
                                <div class="underline underline-offset-2 decoration-dashed decoration-[#9c9ae9]">
                                    APR:
                                </div>
                            </button>
                            <button
                                type="button"
                                class="text-base font-bold flex items-center gap-1 w-fit hover:opacity-70"
                            >
                                <span class="">
                                    <span>0.00</span>%
                                </span>
                                <svg
                                    viewBox="0 0 24 24"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                >
                                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"></path>
                                    <path d="M11.25 7.72H6.25V9.22H11.25V7.72Z"></path>
                                    <path d="M18 15.75H13V17.25H18V15.75Z"></path>
                                    <path d="M18 13.25H13V14.75H18V13.25Z"></path>
                                    <path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"></path>
                                    <path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="mt-6">
                            <span class="uppercase text-primary block mb-2 font-bold">
                                Start earning
                            </span>
                            <button
                                type="button"
                                class="text-white rounded-md h-[45px] border transition-all overflow-hidden font-bold font-sans text-base relative hover:opacity-90 group enabled:active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed px-5 flex items-center justify-center gap-2 whitespace-nowrap bg-[#6f56b3] border-primary-border"
                            >
                                <svg
                                    width="15"
                                    height="12"
                                    viewBox="0 0 15 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.25 0H1.5C1.10218 0 0.720644 0.135079 0.43934 0.375522C0.158035 0.615965 0 0.942075 0 1.28211V10.2569C0 10.5969 0.158035 10.923 0.43934 11.1635C0.720644 11.4039 1.10218 11.539 1.5 11.539H13.5C13.8978 11.539 14.2794 11.4039 14.5607 11.1635C14.842 10.923 15 10.5969 15 10.2569V3.20528C15 3.03526 14.921 2.87221 14.7803 2.75199C14.6397 2.63176 14.4489 2.56423 14.25 2.56423H2.25C2.05109 2.56423 1.86032 2.49669 1.71967 2.37646C1.57902 2.25624 1.5 2.09319 1.5 1.92317C1.5 1.75315 1.57902 1.5901 1.71967 1.46987C1.86032 1.34965 2.05109 1.28211 2.25 1.28211H15V0.641056C15 0.471038 14.921 0.307982 14.7803 0.187761C14.6397 0.0675396 14.4489 0 14.25 0ZM12.375 6.09003C12.5975 6.09003 12.815 6.14643 13 6.25209C13.185 6.35775 13.3292 6.50793 13.4144 6.68364C13.4995 6.85934 13.5218 7.05269 13.4784 7.23922C13.435 7.42574 13.3278 7.59708 13.1705 7.73156C13.0132 7.86604 12.8127 7.95762 12.5945 7.99473C12.3762 8.03183 12.15 8.01279 11.9445 7.94001C11.7389 7.86723 11.5632 7.74398 11.4396 7.58585C11.316 7.42771 11.25 7.2418 11.25 7.05162C11.25 6.79659 11.3685 6.55201 11.5795 6.37168C11.7905 6.19134 12.0766 6.09003 12.375 6.09003Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                Connect Wallet
                            </button>
                        </div>
                    </div>
                    <div class="px-6 py-4">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <div class="border-2 border-primary-border flex items-  center justify-between gap-1 rounded-full py-1 px-2 w-[90px]">
                                    <span> Manual</span>
                                </div>
                                <button data-state="closed" class="">
                                    <svg
                                        width="11"
                                        height="11"
                                        viewBox="0 0 11 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11 5.5C11 8.53824 8.53735 11 5.5 11C2.46265 11 0 8.53824 0 5.5C0 2.46353 2.46265 0 5.5 0C8.53735 0 11 2.46353 11 5.5ZM5.64759 1.81855C4.43899 1.81855 3.66815 2.32768 3.06283 3.23254C2.98442 3.34977 3.01065 3.50787 3.12305 3.5931L3.89258 4.17658C4.00801 4.26412 4.17248 4.24329 4.26217 4.12952C4.65834 3.62703 4.93 3.33564 5.533 3.33564C5.98606 3.33564 6.54646 3.62723 6.54646 4.06656C6.54646 4.39869 6.27228 4.56926 5.82494 4.82006C5.30324 5.11252 4.6129 5.47651 4.6129 6.3871V6.47581C4.6129 6.62278 4.73206 6.74194 4.87903 6.74194H6.12097C6.26794 6.74194 6.3871 6.62278 6.3871 6.47581V6.44624C6.3871 5.81503 8.23195 5.78875 8.23195 4.08065C8.23195 2.79431 6.89764 1.81855 5.64759 1.81855ZM5.5 7.31855C4.93747 7.31855 4.47984 7.77618 4.47984 8.33871C4.47984 8.90122 4.93747 9.35887 5.5 9.35887C6.06253 9.35887 6.52016 8.90122 6.52016 8.33871C6.52016 7.77618 6.06253 7.31855 5.5 7.31855Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <button
                                type="button"
                                class="px-2 flex items-center justify-end basis-[10%] gap-1 text-[#2da648]"
                            >
                                <p class="font-bold text-base">Details</p>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class=""
                                >
                                    <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="overflow-hidden rounded-3xl bg-[#0d0734]">
                    <div class="p-6 flex items-center justify-between bg-cardHeader">
                        <div>
                            <p class="text-xl font-bold">Earn SPIN</p>
                            <span class="text-xs">Stake SPIN</span>
                        </div>
                        <img
                            src="https://ipfs.io/ipfs/bafkreiase53etptbcpm36cmh6iwqidrloyhqao7cmzc7r3fltwx2qvpsma"
                            alt="token"
                            width="60"
                            height="60"
                            loading="lazy"
                            class="w-[60px] h-[60px] rounded-full object-cover"
                        />
                    </div>
                    <div class="p-6 border-b border-border">
                        <div class="flex items-center justify-between">
                            <button data-state="closed">
                                <div class="underline underline-offset-2 decoration-dashed decoration-[#9c9ae9]">
                                    APR:
                                </div>
                            </button>
                            <button
                                type="button"
                                class="text-base font-bold text-[#2da648] flex items-center gap-1 w-fit hover:opacity-70"
                            >
                                <span class="">
                                    <span>33.00</span>%
                                </span>
                                <svg
                                    viewBox="0 0 24 24"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                >
                                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"></path>
                                    <path d="M11.25 7.72H6.25V9.22H11.25V7.72Z"></path>
                                    <path d="M18 15.75H13V17.25H18V15.75Z"></path>
                                    <path d="M18 13.25H13V14.75H18V13.25Z"></path>
                                    <path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"></path>
                                    <path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="mt-6">
                            <span class="uppercase text-primary block mb-2 font-bold">
                                Pool has ended
                            </span>
                            <button
                                type="button"
                                class="text-white rounded-md h-[45px] border transition-all overflow-hidden font-bold font-sans text-base relative hover:opacity-90 group enabled:active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed px-5 flex items-center justify-center gap-2 whitespace-nowrap bg-[#6f56b3] border-primary-border"
                            >
                                <svg
                                    width="15"
                                    height="12"
                                    viewBox="0 0 15 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.25 0H1.5C1.10218 0 0.720644 0.135079 0.43934 0.375522C0.158035 0.615965 0 0.942075 0 1.28211V10.2569C0 10.5969 0.158035 10.923 0.43934 11.1635C0.720644 11.4039 1.10218 11.539 1.5 11.539H13.5C13.8978 11.539 14.2794 11.4039 14.5607 11.1635C14.842 10.923 15 10.5969 15 10.2569V3.20528C15 3.03526 14.921 2.87221 14.7803 2.75199C14.6397 2.63176 14.4489 2.56423 14.25 2.56423H2.25C2.05109 2.56423 1.86032 2.49669 1.71967 2.37646C1.57902 2.25624 1.5 2.09319 1.5 1.92317C1.5 1.75315 1.57902 1.5901 1.71967 1.46987C1.86032 1.34965 2.05109 1.28211 2.25 1.28211H15V0.641056C15 0.471038 14.921 0.307982 14.7803 0.187761C14.6397 0.0675396 14.4489 0 14.25 0ZM12.375 6.09003C12.5975 6.09003 12.815 6.14643 13 6.25209C13.185 6.35775 13.3292 6.50793 13.4144 6.68364C13.4995 6.85934 13.5218 7.05269 13.4784 7.23922C13.435 7.42574 13.3278 7.59708 13.1705 7.73156C13.0132 7.86604 12.8127 7.95762 12.5945 7.99473C12.3762 8.03183 12.15 8.01279 11.9445 7.94001C11.7389 7.86723 11.5632 7.74398 11.4396 7.58585C11.316 7.42771 11.25 7.2418 11.25 7.05162C11.25 6.79659 11.3685 6.55201 11.5795 6.37168C11.7905 6.19134 12.0766 6.09003 12.375 6.09003Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                Connect Wallet
                            </button>
                        </div>
                    </div>
                    <div class="px-6 py-4">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <div class="border-2 border-primary-border flex items-  center justify-between gap-1 rounded-full py-1 px-2 w-[90px]">
                                    <span> Manual</span>
                                </div>
                                <button data-state="closed" class="">
                                    <svg
                                        width="11"
                                        height="11"
                                        viewBox="0 0 11 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11 5.5C11 8.53824 8.53735 11 5.5 11C2.46265 11 0 8.53824 0 5.5C0 2.46353 2.46265 0 5.5 0C8.53735 0 11 2.46353 11 5.5ZM5.64759 1.81855C4.43899 1.81855 3.66815 2.32768 3.06283 3.23254C2.98442 3.34977 3.01065 3.50787 3.12305 3.5931L3.89258 4.17658C4.00801 4.26412 4.17248 4.24329 4.26217 4.12952C4.65834 3.62703 4.93 3.33564 5.533 3.33564C5.98606 3.33564 6.54646 3.62723 6.54646 4.06656C6.54646 4.39869 6.27228 4.56926 5.82494 4.82006C5.30324 5.11252 4.6129 5.47651 4.6129 6.3871V6.47581C4.6129 6.62278 4.73206 6.74194 4.87903 6.74194H6.12097C6.26794 6.74194 6.3871 6.62278 6.3871 6.47581V6.44624C6.3871 5.81503 8.23195 5.78875 8.23195 4.08065C8.23195 2.79431 6.89764 1.81855 5.64759 1.81855ZM5.5 7.31855C4.93747 7.31855 4.47984 7.77618 4.47984 8.33871C4.47984 8.90122 4.93747 9.35887 5.5 9.35887C6.06253 9.35887 6.52016 8.90122 6.52016 8.33871C6.52016 7.77618 6.06253 7.31855 5.5 7.31855Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <button
                                type="button"
                                class="px-2 flex items-center justify-end basis-[10%] gap-1 text-[#2da648]"
                            >
                                <p class="font-bold text-base">Details</p>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class=""
                                >
                                    <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateStakingToken;
