import React from "react";
import logo from '../../assets/logo.png';
import dextools from '../../assets/dextools-logo.png';
import dexscreener from '../../assets/dex-screener-logo.png';
import jupiter from '../../assets/jupiter-logo.png';
import defi from '../../assets/assure-defi.png';


const Footer = () => {
    return (
        <footer className="pt-12 bg-[#060136]">
                <div className="max-w-[1440px] px-12 pb-12 mx-auto flex justify-between max-sm:flex-col gap-16">
                    <div className="sm:w-[30%] space-y-4">
                        <a
                            className="relative inline-block w-[78px] h-[26px] md:w-[125px] md:h-[35px]"
                            href="/"
                        >
                            <img
                                alt="logo"
                                src={logo}
                                className="absolute h-full w-full inset-0 text-transparent"
                            />
                        </a>
                        <p className="font-istokWeb">
                            The First Platform to Simplify Staking and Token
                            Creation on Solana
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-y-10 lg:gap-0 lg:grid-cols-4 sm:w-[70%]">
                        <div>
                            <div>
                                <h5 className="mb-4 text-sm sm:text-lg font-medium">
                                    Product
                                </h5>
                                <div className="flex flex-col gap-2">
                                    <a
                                        href="/token-management/create"
                                        className="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Create Token
                                    </a>
                                    <a
                                        href="/token-management/market-id/create"
                                        className="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Create Market ID
                                    </a>
                                    <a
                                        href="/token-management/raydium/lp-v4/create"
                                        className="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Create Raydium LP
                                    </a>
                                    <a
                                        href="/token-management/multi-sender"
                                        className="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Token Multisender
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h5 className="mb-4 text-sm sm:text-lg font-medium">
                                    Others
                                </h5>
                                <div className="flex flex-col gap-2">
                                    <a
                                        href="/token-management/affiliate"
                                        className="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Affiliate
                                    </a>
                                    <a
                                        href="https://docs.spinlaunch.io"
                                        className="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Documentation
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h5 className="mt-2 max-sm:mb-0.5 text-sm sm:text-lg font-medium">
                                    Chart:
                                </h5>
                                <div className="flex flex-col gap-1">
                                    <a
                                        href="https://www.dextools.io/app/en/solana/pair-explorer/BkURrHhWgmFa1uVttSs3DidGnyRzaEFPdb46L5DjQZjV?t=1719910614540"
                                        className="text-xs sm:text-base flex items-center gap-2"
                                    >
                                        <img
                                            src={dextools}
                                            alt="Dextools"
                                            className="w-3.5 h-3.5"
                                        />
                                        Dextools
                                    </a>
                                    <a
                                        href="https://dexscreener.com/solana/BkURrHhWgmFa1uVttSs3DidGnyRzaEFPdb46L5DjQZjV"
                                        className="text-xs sm:text-base flex items-center gap-2"
                                    >
                                        <img
                                            src={dexscreener}
                                            alt="Dexscreener"
                                            className="w-3.5 h-3.5"
                                        />
                                        Dexscreener
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h5 className="mb-4 text-sm sm:text-lg font-medium">
                                    Social
                                </h5>
                                <div className="flex flex-col gap-2">
                                    <a
                                        href="https://x.com/spinlaunch_io"
                                        className="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Twitter
                                    </a>
                                    <a
                                        href="https://t.me/Spinlaunchportal"
                                        className="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Telegram
                                    </a>
                                    <a
                                        href="https://docs.spinlaunch.io"
                                        className="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Gitbook
                                    </a>
                                    <a
                                        href="https://discord.gg/XfRn7RAkP3"
                                        className="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Discord
                                    </a>
                                    <a
                                        href="https://facebook.com/profile.php?id=61561062544390"
                                        className="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Facebook
                                    </a>
                                    <a
                                        href="https://medium.com/@spinlaunch_io"
                                        className="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Medium
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h5 className="text-sm sm text-sm:sm:text-lg font-bold">
                                    Where to buy
                                </h5>
                                <div>
                                    <a
                                        href="https://jup.ag/swap/SOL-5p2TeqTH4edcczUTJT3cK7YNZXXHNt8g4sJShtuQfRMF"
                                        className="-translate-x-2 sm:-translate-x-4 inline-block"
                                    >
                                        <img
                                            src={jupiter}
                                            alt="jupiter"
                                            className="max-sm:w-[83px] max-sm:h-[45px]"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h5 className="mb-1 text-sm sm text-sm:sm:text-lg font-bold">
                                    Audited by
                                </h5>
                                <a
                                    href="https://github.com/Assure-DeFi/Audit-Certificates/blob/main/SPINLAUNCH_TOKEN_SOL_08_02_24.png"
                                    target="_blank"
                                >
                                    <div className="relative w-[120px] h-[45px] sm:w-[149px] sm:h-[55px]">
                                        <img src={defi} alt="assure defi" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center border-t p-4 border-[#403F3F]">
                    2024 Copyright AA. All rights Reserved
                </div>
            </footer>
    )
}

export default Footer;