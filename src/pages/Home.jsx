import logo from "../assets/logo.png";
import AffiliateProgramPage from "./token-management/AffiliateProgramPage";
import QuickLaunchTokenPage from "./token-management/QuickLaunchTokenPage";

const Home = () => {
    return (
        <div className="h-screen my-10 mx-36">
            <nav className="flex justify-between items-center">
                <img src={logo} alt="SpinLaunch Logo" className="h-9 w-auto" />
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
                        <span className="bg-gradient-to-r from-[#ffc5c5] from-0% via-[#ade3ef] via-28% to-[#9120e9] to-150% bg-clip-text text-transparent">
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
                    <div className="flex flex-col gap-5 items-center">
                        <p className="text-6xl font-bold">500K+</p>
                        <p className="text-gray-400 font-semibold text-xl">
                            Visitor Traffic
                        </p>
                    </div>
                    <div className="flex flex-col gap-5 items-center">
                        <p className="text-6xl font-bold">1700+</p>
                        <p className="text-gray-400 font-semibold text-xl">
                            User Registered
                        </p>
                    </div>
                </div>
            </div>
            <div className="partners">
                <p>Partners and Trusted By:</p>
                <div className="card">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
            <div className="audited">
                <div>
                    <p>System Audited by</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <span></span>
                    <p>
                        Our platform has been rigorously audited by leading
                        blockchain security firm, ensuring your assets and
                        transactions are protected and secure
                    </p>
                </div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <p>About Spinlaunch</p>
                        <p>
                            Spinlaunch is an all-in-one platform designed to
                            simplify token management on the Solana blockchain.
                            We provide innovative tools for staking, liquidity
                            enhancement, and community engagement to help users
                            maximize their returns and actively participate in
                            the blockchain ecosystem.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <p>Our core Features</p>
                <div>
                    <img src="" alt="" />
                    <p>Token Launcher as a Service</p>
                    <p>
                        Facilitating seamless deployment of token on Solana with
                        minimal cost
                    </p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Single Token Staking as a Service</p>
                    <p>
                        Enabling traders to stake their LP token in our Platform
                    </p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Market Making Tools as Service</p>
                    <p>Systematically increase token market traction easily</p>
                </div>
            </div>
            <section>
                <p>
                    We Provide <span>Complete Tools</span> to Make it Easier for
                    You to Create Tokens
                </p>
                <div>
                    <div>
                        <img src="" alt="" />
                        <p>Try Now</p>
                    </div>
                    <p>Solana Token Creation Tools</p>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <p>Try Now</p>
                    </div>
                    <p>Solana Token Creation Tools</p>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <p>Try Now</p>
                    </div>
                    <p>Solana Token Creation Tools</p>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <p>Try Now</p>
                    </div>
                    <p>Solana Token Creation Tools</p>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <p>Try Now</p>
                    </div>
                    <p>Solana Token Creation Tools</p>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <p>Try Now</p>
                    </div>
                    <p>Solana Token Creation Tools</p>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <p>Try Now</p>
                    </div>
                    <p>Solana Token Creation Tools</p>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <p>Try Now</p>
                    </div>
                    <p>Solana Token Creation Tools</p>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <p>Try Now</p>
                    </div>
                    <p>Solana Token Creation Tools</p>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <p>Try Now</p>
                    </div>
                    <p>Solana Token Creation Tools</p>
                </div>
                <p></p>
            </section>
        </div>
    );
};

export default Home;
