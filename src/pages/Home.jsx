import logo from "../assets/logo.png";
import solana from "../assets/solana-logo.png";
import raydium from "../assets/raydium-logo.png";
import gwyn from "../assets/gwyn-logo.png";
import cryptoCup from "../assets/crypto-cup-logo.png";
import defi from "../assets/assure-defi.png";
import about from "../assets/about.webp";
import tokenLauncher from "../assets/token-launcher.webp";
import singleToken from "../assets/single-token.webp";
import marketMarking from "../assets/market-making.webp";
import toolCreation from "../assets/tools-creation.png";
import toolOpenBook from "../assets/tools-openbook.png";
import toolLiquidity from "../assets/tools-liquidity.png";
import toolFreeze from "../assets/tools-revoke-freeze.png";
import toolAuthority from "../assets/tools-revoke-authority.png";
import toolMetadata from "../assets/tools-update-metadata.png";
import toolImmunity from "../assets/tools-token-immunity.png";
import toolCreate from "../assets/tools-create-staking-pool.png";
import toolTokenMint from "../assets/tools-token-mint.png";
import toolMultiSender from "../assets/tools-token-multisender.png";
import circle from "../assets/faq-circle.png";
import grid from "../assets/grid.webp";
import dextools from "../assets/dextools-logo.png";
import dexscreener from "../assets/dex-screener-logo.png";
import jupiter from "../assets/jupiter-logo.png";
import Accordion from "../components/accordion";
import AffiliateProgramPage from "./token-management/AffiliateProgramPage";
import QuickLaunchTokenPage from "./token-management/QuickLaunchTokenPage";

const Home = () => {
    return (
        <main>
            <div className="my-10 mx-36">
                <nav className="flex justify-between items-center">
                    <img
                        src={logo}
                        alt="SpinLaunch Logo"
                        className="h-9 w-auto"
                    />
                    <ul className="flex gap-5 items-center">
                        <li className="font-bold text-lg">
                            <a href="">Home</a>
                        </li>
                        <li className="font-bold text-lg">
                            <a href="/affiliate-program">Affiliate</a>
                        </li>
                        <li className="font-bold text-lg">
                            <a
                                className="border-2 px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
                                href="/affiliate-program"
                            >
                                Create Token
                            </a>
                        </li>
                        <li className="font-bold text-lg">
                            <a
                                className="px-4 py-2 rounded-md text-black bg-white hover:bg-gray-200 transition"
                                href="/quick-launch"
                            >
                                Launch App
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="hero flex flex-col justify-center">
                    <div className="flex flex-col gap-16 my-36 items-center">
                        <h1 className="text-6xl font-bold text-center w-3/4">
                            <span className="bg-text-rainbow bg-clip-text text-transparent">
                                All in One
                            </span>{" "}
                            Tools Token Management
                        </h1>
                        <p className="text-center font-semibold w-96">
                            Ultimate solution for seamless and efficient token
                            management on the Solana blockchain.
                        </p>
                    </div>
                    <div className="flex justify-around">
                        <div className="flex flex-col gap-5 items-center">
                            <p className="text-6xl font-bold">2500+</p>
                            <p className="text-gray-400 font-semibold text-xl">
                                Token Created
                            </p>
                        </div>
                        <span className="w-[1px] bg-white"></span>
                        <div className="flex flex-col gap-5 items-center">
                            <p className="text-6xl font-bold">500K+</p>
                            <p className="text-gray-400 font-semibold text-xl">
                                Visitor Traffic
                            </p>
                        </div>
                        <span className="w-[1px] bg-white"></span>
                        <div className="flex flex-col gap-5 items-center">
                            <p className="text-6xl font-bold">1700+</p>
                            <p className="text-gray-400 font-semibold text-xl">
                                User Registered
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center my-44 flex-col">
                    <p className="text-xl font-bold mb-6 text-white">
                        Partners and Trusted By:
                    </p>
                    <div class="relative p-[1px] rounded-lg md:rounded-3xl bg-card-gradient">
                        <div class="bg-[#0b0b0b] relative z-[1] h-full rounded-lg md:rounded-3xl py-5 px-5 lg:px-[70px] flex items-center sm:flex-wrap justify-between gap-3">
                            <img
                                src={solana}
                                alt="solana logo"
                                class="max-lg:w-[94px]"
                            />
                            <img
                                src={gwyn}
                                alt="gwyn logo"
                                class="max-lg:w-[85px]"
                            />
                            <img
                                src={cryptoCup}
                                alt="crypto cup logo"
                                class="max-lg:max-w-[114px]"
                            />
                            <img
                                src={raydium}
                                alt="raydium logo"
                                class="max-md:hidden max-lg:max-w-[90px]"
                            />
                        </div>
                    </div>
                </div>
                <div className="audited flex flex-col items-center">
                    <div class="relative p-[1px] rounded-lg md:rounded-3xl bg-card-gradient w-fit">
                        <div class="bg-[#0b0b0b] relative h-full rounded-lg md:rounded-3xl py-5 px-2 lg:px-[70px] flex items-center sm:flex-wrap justify-between">
                            <p className="text-sm md:text-xl font-semibold">
                                System Audited by
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-around my-16">
                        <img src={defi} alt="defi" className="w-64" />
                        <span className="w-[1px] bg-white mx-16"></span>
                        <p className="w-80 items-center">
                            Our platform has been rigorously audited by leading
                            blockchain security firm, ensuring your assets and
                            transactions are protected and secure
                        </p>
                    </div>
                    <div class="flex items-center gap-[76px] pt-7 max-lg:flex-col-reverse">
                        <div class="relative p-[1px] rounded-lg md:rounded-3xl bg-card-gradient w-[45%] max-lg:hidden">
                            <div class="bg-[#0b0b0b] relative z-[1] h-full rounded-lg md:rounded-3xl flex items-center justify-center">
                                <img
                                    alt="about spinlaunch"
                                    loading="lazy"
                                    width="472"
                                    height="472"
                                    className="text-transparent"
                                    src={about}
                                />
                            </div>
                        </div>
                        <div class="flex-1">
                            <h2 class="font-medium text-2xl md:text-3xl lg:text-5xl max-w-[893px] mx-auto mb-8 text-center lg:text-left">
                                About{" "}
                                <span class="bg-text-rainbow bg-clip-text text-transparent">
                                    Spinlaunch
                                </span>
                            </h2>
                            <p class="max-lg:text-center text-sm lg:text-xl">
                                Spinlaunch is an all-in-one platform designed to
                                simplify token management on the Solana
                                blockchain. We provide innovative tools for
                                staking, liquidity enhancement, and community
                                engagement to help users maximize their returns
                                and actively participate in the blockchain
                                ecosystem.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-4xl font-bold text-center mt-28 mb-20">
                        Our core{" "}
                        <span className="bg-text-rainbow bg-clip-text text-transparent">
                            Features
                        </span>
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-[60px]">
                        <div class="relative p-[1px] rounded-lg md:rounded-3xl bg-card-gradient">
                            <div class="bg-[#0b0b0b] relative z-[1] h-full rounded-lg md:rounded-3xl px-6 md:px-7 py-3.5 md:pt-10 md:pb-9 flex max-md:gap-6 md:flex-col items-center">
                                <div class="relative w-[50px] h-[50px] md:w-[140px] md:h-[140px]">
                                    <img
                                        alt="Token Launcher as a Service"
                                        src={tokenLauncher}
                                    />
                                </div>
                                <div class="flex flex-col md:items-center">
                                    <h3 class="font-medium text-base md:text-2xl mb-2 md:mb-4 md:mt-5 md:text-center md:max-w-[249px]">
                                        Token Launcher as a Service
                                    </h3>
                                    <p class="text-light-gray-600 max-md:text-sm text-base md:text-center">
                                        Facilitating seamless deployment of
                                        token on Solana with minimal cost
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="relative p-[1px] rounded-lg md:rounded-3xl bg-card-gradient">
                            <div class="bg-[#0b0b0b] relative z-[1] h-full rounded-lg md:rounded-3xl px-6 md:px-7 py-3.5 md:pt-10 md:pb-9 flex max-md:gap-6 md:flex-col items-center">
                                <div class="relative w-[50px] h-[50px] md:w-[140px] md:h-[140px]">
                                    <img
                                        alt="Token Launcher as a Service"
                                        src={singleToken}
                                    />
                                </div>
                                <div class="flex flex-col md:items-center">
                                    <h3 class="font-medium text-base md:text-2xl mb-2 md:mb-4 md:mt-5 md:text-center md:max-w-[249px]">
                                        Single Token Staking as a Service
                                    </h3>
                                    <p class="text-light-gray-600 max-md:text-sm text-base md:text-center">
                                        Enabling traders to stake their LP token
                                        in our Platform
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="relative p-[1px] rounded-lg md:rounded-3xl bg-card-gradient">
                            <div class="bg-[#0b0b0b] relative z-[1] h-full rounded-lg md:rounded-3xl px-6 md:px-7 py-3.5 md:pt-10 md:pb-9 flex max-md:gap-6 md:flex-col items-center">
                                <div class="relative w-[50px] h-[50px] md:w-[140px] md:h-[140px]">
                                    <img
                                        alt="Token Launcher as a Service"
                                        src={marketMarking}
                                    />
                                </div>
                                <div class="flex flex-col md:items-center">
                                    <h3 class="font-medium text-base md:text-2xl mb-2 md:mb-4 md:mt-5 md:text-center md:max-w-[249px]">
                                        Market Making Tools as Service
                                    </h3>
                                    <p class="text-light-gray-600 max-md:text-sm text-base md:text-center">
                                        Systematically increase token market
                                        traction easily
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="relative">
                    <div class="absolute inset-0">
                        <img alt="grid" src={grid} />
                    </div>
                    <p className="text-4xl font-bold text-center mt-28 mb-20 w-3/4 mx-auto">
                        We Provide{" "}
                        <span className="bg-text-rainbow bg-clip-text text-transparent">
                            Complete Tools
                        </span>{" "}
                        to Make it Easier for You to Create Tokens
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-[50px]">
                        <a href="/create-token">
                            <div class="relative p-[1px] rounded-lg md:rounded-3xl bg-card-gradient max-md:h-[66px]">
                                <div class="bg-[#0b0b0b] relative z-[1] h-full rounded-lg md:rounded-3xl flex max-md:gap-4 md:flex-col items-center max-md:py-2.5 max-md:px-4">
                                    <div class="md:pt-9 md:pb-5">
                                        <img
                                            src={toolCreation}
                                            alt="Solana Token Creation Tools"
                                        />
                                    </div>
                                    <h4 class="font-normal text-xs md:hidden flex-1">
                                        Solana Token Creation Tools
                                    </h4>
                                    <div class="bg-[#278c6e] text-semibold text-xs md:rounded-tr-xl rounded-tl-md md:rounded-tl-xl px-0.5 md:py-2 md:px-5 max-md:hidden">
                                        Try Now
                                    </div>
                                </div>
                            </div>
                            <h4 class="text-xl font-semibold mt-8 text-center max-md:hidden">
                                Solana Token Creation Tools
                            </h4>
                        </a>
                        <a href="/create-token">
                            <div class="relative p-[1px] rounded-lg md:rounded-3xl bg-card-gradient max-md:h-[66px]">
                                <div class="bg-[#0b0b0b] relative z-[1] h-full rounded-lg md:rounded-3xl flex max-md:gap-4 md:flex-col items-center max-md:py-2.5 max-md:px-4">
                                    <div class="md:pt-9 md:pb-5">
                                        <img
                                            src={toolOpenBook}
                                            alt="Create OpenBook Market ID"
                                        />
                                    </div>
                                    <h4 class="font-normal text-xs md:hidden flex-1">
                                        Create OpenBook Market ID
                                    </h4>
                                    <div class="bg-[#278c6e] text-semibold text-xs md:rounded-tr-xl rounded-tl-md md:rounded-tl-xl px-0.5 md:py-2 md:px-5 max-md:hidden">
                                        Try Now
                                    </div>
                                </div>
                            </div>
                            <h4 class="text-xl font-semibold mt-8 text-center max-md:hidden">
                                Create OpenBook Market ID
                            </h4>
                        </a>
                        <a href="/create-token">
                            <div class="relative p-[1px] rounded-lg md:rounded-3xl bg-card-gradient max-md:h-[66px]">
                                <div class="bg-[#0b0b0b] relative z-[1] h-full rounded-lg md:rounded-3xl flex max-md:gap-4 md:flex-col items-center max-md:py-2.5 max-md:px-4">
                                    <div class="md:pt-9 md:pb-5">
                                        <img
                                            src={toolLiquidity}
                                            alt="Create Liquidity Pool"
                                        />
                                    </div>
                                    <h4 class="font-normal text-xs md:hidden flex-1">
                                        Create Liquidity Pool
                                    </h4>
                                    <div class="bg-[#278c6e] text-semibold text-xs md:rounded-tr-xl rounded-tl-md md:rounded-tl-xl px-0.5 md:py-2 md:px-5 max-md:hidden">
                                        Try Now
                                    </div>
                                </div>
                            </div>
                            <h4 class="text-xl font-semibold mt-8 text-center max-md:hidden">
                                Create Liquidity Pool
                            </h4>
                        </a>
                        <a href="/create-token">
                            <div class="relative p-[1px] rounded-lg md:rounded-3xl bg-card-gradient max-md:h-[66px]">
                                <div class="bg-[#0b0b0b] relative z-[1] h-full rounded-lg md:rounded-3xl flex max-md:gap-4 md:flex-col items-center max-md:py-2.5 max-md:px-4">
                                    <div class="md:pt-9 md:pb-5">
                                        <img
                                            src={toolFreeze}
                                            alt="Revoke Freeze Authority"
                                        />
                                    </div>
                                    <h4 class="font-normal text-xs md:hidden flex-1">
                                        Revoke Freeze Authority
                                    </h4>
                                    <div class="bg-[#278c6e] text-semibold text-xs md:rounded-tr-xl rounded-tl-md md:rounded-tl-xl px-0.5 md:py-2 md:px-5 max-md:hidden">
                                        Try Now
                                    </div>
                                </div>
                            </div>
                            <h4 class="text-xl font-semibold mt-8 text-center max-md:hidden">
                                Revoke Freeze Authority
                            </h4>
                        </a>
                        <a href="/create-token">
                            <div class="relative p-[1px] rounded-lg md:rounded-3xl bg-card-gradient max-md:h-[66px]">
                                <div class="bg-[#0b0b0b] relative z-[1] h-full rounded-lg md:rounded-3xl flex max-md:gap-4 md:flex-col items-center max-md:py-2.5 max-md:px-4">
                                    <div class="md:pt-9 md:pb-5">
                                        <img
                                            src={toolAuthority}
                                            alt="Revoke Mint Authority"
                                        />
                                    </div>
                                    <h4 class="font-normal text-xs md:hidden flex-1">
                                        Revoke Mint Authority
                                    </h4>
                                    <div class="bg-[#278c6e] text-semibold text-xs md:rounded-tr-xl rounded-tl-md md:rounded-tl-xl px-0.5 md:py-2 md:px-5 max-md:hidden">
                                        Try Now
                                    </div>
                                </div>
                            </div>
                            <h4 class="text-xl font-semibold mt-8 text-center max-md:hidden">
                                Revoke Mint Authority
                            </h4>
                        </a>
                        <a href="/create-token">
                            <div class="relative p-[1px] rounded-lg md:rounded-3xl bg-card-gradient max-md:h-[66px]">
                                <div class="bg-[#0b0b0b] relative z-[1] h-full rounded-lg md:rounded-3xl flex max-md:gap-4 md:flex-col items-center max-md:py-2.5 max-md:px-4">
                                    <div class="md:pt-9 md:pb-5">
                                        <img
                                            src={toolImmunity}
                                            alt="Make Token Immutable"
                                        />
                                    </div>
                                    <h4 class="font-normal text-xs md:hidden flex-1">
                                        Make Token Immutable
                                    </h4>
                                    <div class="bg-[#278c6e] text-semibold text-xs md:rounded-tr-xl rounded-tl-md md:rounded-tl-xl px-0.5 md:py-2 md:px-5 max-md:hidden">
                                        Try Now
                                    </div>
                                </div>
                            </div>
                            <h4 class="text-xl font-semibold mt-8 text-center max-md:hidden">
                                Make Token Immutable
                            </h4>
                        </a>
                        <a href="/create-token">
                            <div class="relative p-[1px] rounded-lg md:rounded-3xl bg-card-gradient max-md:h-[66px]">
                                <div class="bg-[#0b0b0b] relative z-[1] h-full rounded-lg md:rounded-3xl flex max-md:gap-4 md:flex-col items-center max-md:py-2.5 max-md:px-4">
                                    <div class="md:pt-9 md:pb-5">
                                        <img
                                            src={toolMetadata}
                                            alt="Update Metadata"
                                        />
                                    </div>
                                    <h4 class="font-normal text-xs md:hidden flex-1">
                                        Update Metadata
                                    </h4>
                                    <div class="bg-[#278c6e] text-semibold text-xs md:rounded-tr-xl rounded-tl-md md:rounded-tl-xl px-0.5 md:py-2 md:px-5 max-md:hidden">
                                        Try Now
                                    </div>
                                </div>
                            </div>
                            <h4 class="text-xl font-semibold mt-8 text-center max-md:hidden">
                                Update Metadata
                            </h4>
                        </a>
                        <a href="/create-token">
                            <div class="relative p-[1px] rounded-lg md:rounded-3xl bg-card-gradient max-md:h-[66px]">
                                <div class="bg-[#0b0b0b] relative z-[1] h-full rounded-lg md:rounded-3xl flex max-md:gap-4 md:flex-col items-center max-md:py-2.5 max-md:px-4">
                                    <div class="md:pt-9 md:pb-5">
                                        <img
                                            src={toolTokenMint}
                                            alt="Token Mint"
                                        />
                                    </div>
                                    <h4 class="font-normal text-xs md:hidden flex-1">
                                        Token Mint
                                    </h4>
                                    <div class="bg-[#278c6e] text-semibold text-xs md:rounded-tr-xl rounded-tl-md md:rounded-tl-xl px-0.5 md:py-2 md:px-5 max-md:hidden">
                                        Try Now
                                    </div>
                                </div>
                            </div>
                            <h4 class="text-xl font-semibold mt-8 text-center max-md:hidden">
                                Token Mint
                            </h4>
                        </a>
                        <a href="/create-token">
                            <div class="relative p-[1px] rounded-lg md:rounded-3xl bg-card-gradient max-md:h-[66px]">
                                <div class="bg-[#0b0b0b] relative z-[1] h-full rounded-lg md:rounded-3xl flex max-md:gap-4 md:flex-col items-center max-md:py-2.5 max-md:px-4">
                                    <div class="md:pt-9 md:pb-5">
                                        <img
                                            src={toolMultiSender}
                                            alt="Token Multisender"
                                        />
                                    </div>
                                    <h4 class="font-normal text-xs md:hidden flex-1">
                                        Token Multisender
                                    </h4>
                                    <div class="bg-[#278c6e] text-semibold text-xs md:rounded-tr-xl rounded-tl-md md:rounded-tl-xl px-0.5 md:py-2 md:px-5 max-md:hidden">
                                        Try Now
                                    </div>
                                </div>
                            </div>
                            <h4 class="text-xl font-semibold mt-8 text-center max-md:hidden">
                                Token Multisender
                            </h4>
                        </a>
                        <a href="/create-token">
                            <div class="relative p-[1px] rounded-lg md:rounded-3xl bg-card-gradient max-md:h-[66px]">
                                <div class="bg-[#0b0b0b] relative z-[1] h-full rounded-lg md:rounded-3xl flex max-md:gap-4 md:flex-col items-center max-md:py-2.5 max-md:px-4">
                                    <div class="md:pt-9 md:pb-5">
                                        <img
                                            src={toolCreate}
                                            alt="Create Single Token Staking Pool"
                                        />
                                    </div>
                                    <h4 class="font-normal text-xs md:hidden flex-1">
                                        Create Single Token Staking Pool
                                    </h4>
                                    <div class="bg-[#278c6e] text-semibold text-xs md:rounded-tr-xl rounded-tl-md md:rounded-tl-xl px-0.5 md:py-2 md:px-5 max-md:hidden">
                                        Try Now
                                    </div>
                                </div>
                            </div>
                            <h4 class="text-xl font-semibold mt-8 text-center max-md:hidden">
                                Create Single Token Staking Pool
                            </h4>
                        </a>
                    </div>
                    <p></p>
                </section>
                <div class="my-24 lg:my-32 flex max-md:flex-col-reverse justify-between gap-5 md:gap-10 lg:gap-[72px]">
                    <div class="flex flex-col items-center flex-1">
                        <iframe
                            src="https://www.youtube.com/embed/P1KcRaawp1E"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen=""
                            title="Create token with Spinlaunch"
                            class="w-full aspect-video"
                        ></iframe>
                        <p class="md:hidden mb-3 text-center">
                            You can complete all the steps above from a single
                            platform: Spinlaunch. Additionally, you can manage
                            your tokens with our various tools.
                        </p>
                        <a href="/token-management/create">
                            <button
                                type="button"
                                class="rounded-md h-[45px] border transition-all overflow-hidden font-sans text-base relative hover:opacity-90 group enabled:active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed px-5 flex items-center justify-center gap-2 whitespace-nowrap border-primary-border bg-white text-black font-medium uppercase"
                            >
                                Create token today
                            </button>
                        </a>
                    </div>
                    <div class="flex-1 max-md:text-center">
                        <h2 class="font-medium text-2xl md:text-3xl lg:text-5xl max-w-[893px] mx-auto mb-6 text-center md:text-left">
                            <span class="bg-text-rainbow bg-clip-text text-transparent">
                                3 Easy Steps
                            </span>{" "}
                            to Create Your Token Today
                        </h2>
                        <div class="text-lg flex flex-col gap-4">
                            <p class="max-md:text-xs">
                                Create utility tokens or meme coins easily today
                                with just three steps to issue your tokens on
                                the trading market via Spinlaunch :
                            </p>
                            <ol class="max-sm:hidden list-decimal list-outside pl-5 max-md:text-left">
                                <li>Create Your Token</li>
                                <li>Create an OpenBook Market ID</li>
                                <li>Create a Liquidity Pool on Raydium</li>
                            </ol>
                            <ul class="flex items-center sm:hidden text-left">
                                <li class="py-0.5 px-1.5 flex items-center gap-1 sm:gap-3 border border-white rounded-md max-w-[30%] h-[27px]">
                                    <span class="w-4 h-4 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white text-black max-sm:text-[8px] p-0.5">
                                        01
                                    </span>{" "}
                                    <span class="flex-1 max-sm:text-[8px] leading-tight">
                                        Create Your Token
                                    </span>
                                </li>
                                <div class="flex-1 h-1 border-b border-dashed border-white"></div>
                                <li class="py-0.5 px-1.5 flex items-center gap-1 sm:gap-3 border border-white rounded-md max-w-[30%] h-[27px]">
                                    <span class="w-4 h-4 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white text-black max-sm:text-[8px] p-0.5">
                                        02
                                    </span>{" "}
                                    <span class="flex-1 max-sm:text-[8px] leading-tight">
                                        Create an OpenBook Market ID
                                    </span>
                                </li>
                                <div class="flex-1 h-1 border-b border-dashed border-white"></div>
                                <li class="py-0.5 px-1.5 flex items-center gap-1 sm:gap-3 border border-white rounded-md max-w-[30%] h-[27px]">
                                    <span class="w-4 h-4 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white text-black max-sm:text-[8px] p-0.5">
                                        03
                                    </span>{" "}
                                    <span class="flex-1 max-sm:text-[8px] leading-tight">
                                        Create a Liquidity Pool on Raydium
                                    </span>
                                </li>
                            </ul>
                            <p class="max-md:hidden">
                                You can complete all the steps above from a
                                single platform: Spinlaunch. Additionally, you
                                can manage your tokens with our various tools.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="relative p-[1px] rounded-lg md:rounded-3xl bg-card-gradient mb-6">
                    <div class="bg-[#0b0b0b] relative z-[1] h-full rounded-lg md:rounded-3xl flex flex-col items-center text-center py-4 lg:py-10 px-2 lg:px-4">
                        <p class="text-sm lg:text-xl">
                            Join Our Affiliate Program Now
                        </p>
                        <h2 class="font-medium text-xl md:text-2xl lg:text-5xl text-center max-w-[893px] mx-auto lg:max-w-3xl mt-2 mb-5">
                            Start Earning{" "}
                            <span class="bg-text-rainbow bg-clip-text text-transparent">
                                30% Commission
                            </span>{" "}
                            On Every Transaction!
                        </h2>
                        <a href="/token-management/affiliate">
                            <button
                                type="button"
                                class="rounded-md h-[45px] border transition-all overflow-hidden font-sans text-base relative hover:opacity-90 group enabled:active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed px-5 flex items-center justify-center gap-2 whitespace-nowrap border-primary-border bg-white text-black uppercase font-medium"
                            >
                                Join Affiliate
                            </button>
                        </a>
                    </div>
                </div>
                <div class="pt-9 lg:pt-[88px] mb-6 relative">
                    <img
                        src={circle}
                        alt="faq circle"
                        className="absolute inset-1"
                    />
                    <div class="relative z-[1]">
                        <p className="text-4xl font-bold text-center">FAQ</p>
                        <Accordion />
                    </div>
                </div>
            </div>
            <footer class="pt-12 bg-[#060606]">
                <div class="max-w-[1440px] px-12 pb-12 mx-auto flex justify-between max-sm:flex-col gap-16">
                    <div class="sm:w-[30%] space-y-4">
                        <a
                            class="relative inline-block w-[78px] h-[26px] md:w-[125px] md:h-[35px]"
                            href="/"
                        >
                            <img
                                alt="logo"
                                src={logo}
                                className="absolute h-full w-full inset-0 text-transparent"
                            />
                        </a>
                        <p class="font-istokWeb">
                            The First Platform to Simplify Staking and Token
                            Creation on Solana
                        </p>
                    </div>
                    <div class="grid grid-cols-2 gap-y-10 lg:gap-0 lg:grid-cols-4 sm:w-[70%]">
                        <div>
                            <div>
                                <h5 class="mb-4 text-sm sm:text-lg font-medium">
                                    Product
                                </h5>
                                <div class="flex flex-col gap-2">
                                    <a
                                        href="/token-management/create"
                                        class="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Create Token
                                    </a>
                                    <a
                                        href="/token-management/market-id/create"
                                        class="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Create Market ID
                                    </a>
                                    <a
                                        href="/token-management/raydium/lp-v4/create"
                                        class="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Create Raydium LP
                                    </a>
                                    <a
                                        href="/token-management/multi-sender"
                                        class="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Token Multisender
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h5 class="mb-4 text-sm sm:text-lg font-medium">
                                    Others
                                </h5>
                                <div class="flex flex-col gap-2">
                                    <a
                                        href="/token-management/affiliate"
                                        class="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Affiliate
                                    </a>
                                    <a
                                        href="https://docs.spinlaunch.io"
                                        class="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Documentation
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h5 class="mt-2 max-sm:mb-0.5 text-sm sm:text-lg font-medium">
                                    Chart:
                                </h5>
                                <div class="flex flex-col gap-1">
                                    <a
                                        href="https://www.dextools.io/app/en/solana/pair-explorer/BkURrHhWgmFa1uVttSs3DidGnyRzaEFPdb46L5DjQZjV?t=1719910614540"
                                        class="text-xs sm:text-base flex items-center gap-2"
                                    >
                                        <img
                                            src={dextools}
                                            alt="Dextools"
                                            class="w-3.5 h-3.5"
                                        />
                                        Dextools
                                    </a>
                                    <a
                                        href="https://dexscreener.com/solana/BkURrHhWgmFa1uVttSs3DidGnyRzaEFPdb46L5DjQZjV"
                                        class="text-xs sm:text-base flex items-center gap-2"
                                    >
                                        <img
                                            src={dexscreener}
                                            alt="Dexscreener"
                                            class="w-3.5 h-3.5"
                                        />
                                        Dexscreener
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h5 class="mb-4 text-sm sm:text-lg font-medium">
                                    Social
                                </h5>
                                <div class="flex flex-col gap-2">
                                    <a
                                        href="https://x.com/spinlaunch_io"
                                        class="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Twitter
                                    </a>
                                    <a
                                        href="https://t.me/Spinlaunchportal"
                                        class="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Telegram
                                    </a>
                                    <a
                                        href="https://docs.spinlaunch.io"
                                        class="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Gitbook
                                    </a>
                                    <a
                                        href="https://discord.gg/XfRn7RAkP3"
                                        class="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Discord
                                    </a>
                                    <a
                                        href="https://facebook.com/profile.php?id=61561062544390"
                                        class="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Facebook
                                    </a>
                                    <a
                                        href="https://medium.com/@spinlaunch_io"
                                        class="text-xs sm:text-base flex items-center gap-3"
                                    >
                                        Medium
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h5 class="text-sm sm text-sm:sm:text-lg font-bold">
                                    Where to buy
                                </h5>
                                <div>
                                    <a
                                        href="https://jup.ag/swap/SOL-5p2TeqTH4edcczUTJT3cK7YNZXXHNt8g4sJShtuQfRMF"
                                        class="-translate-x-2 sm:-translate-x-4 inline-block"
                                    >
                                        <img
                                            src={jupiter}
                                            alt="jupiter"
                                            class="max-sm:w-[83px] max-sm:h-[45px]"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h5 class="mb-1 text-sm sm text-sm:sm:text-lg font-bold">
                                    Audited by
                                </h5>
                                <a
                                    href="https://github.com/Assure-DeFi/Audit-Certificates/blob/main/SPINLAUNCH_TOKEN_SOL_08_02_24.png"
                                    target="_blank"
                                >
                                    <div class="relative w-[120px] h-[45px] sm:w-[149px] sm:h-[55px]">
                                        <img src={defi} alt="assure defi" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center border-t p-4 border-[#403F3F]">
                    2024 Copyright AA. All rights Reserved
                </div>
            </footer>
        </main>
    );
};

export default Home;
