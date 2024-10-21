import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyTokensPage from "./pages/token-management/MyTokensPage";
import CreateTokenPage from "./pages/token-management/CreateTokenPage";
import CreateStakingTokenPage from "./pages/token-management/CreateStakingTokenPage";
import QuickLaunchTokenPage from "./pages/token-management/QuickLaunchTokenPage";
import CreateLiquidityPoolPage from "./pages/token-management/CreateLiquidityPoolPage";
import TokenMultiSenderPage from "./pages/token-management/TokenMultisenderPage";
import AffiliateProgramPage from "./pages/token-management/AffiliateProgramPage";
import BurnLPPoolPage from "./pages/token-management/BurnLPPoolPage";
import CreateOpenBookMarketIDPage from "./pages/token-management/CreateOpenBookMarketIDPage";
import FreezeAccountPage from "./pages/token-management/FreezeAccountPage";
import MakeTokenImmutablePage from "./pages/token-management/MakeTokenImmutablePage";
import ManageTokenHoldersPage from "./pages/token-management/ManageTokenHoldersPage";
import RevokeFreezeAuthorityPage from "./pages/token-management/RevokeFreezeAuthorityPage";
import RevokeMintAuthorityPage from "./pages/token-management/RevokeMintAuthorityPage";
import TokenBurnPage from "./pages/token-management/TokenBurnPage";
import TokenMintPage from "./pages/token-management/TokenMintPage";
import UpdateTokenMetaDataPage from "./pages/token-management/UpdateTokenMetaDataPage";
import WithdrawLPPoolPage from "./pages/token-management/WithdrawLPPoolPage";

import "./App.css";
import "./styles/index.css";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pools" element={<CreateStakingTokenPage />} />
                <Route
                    path="/token-management/quick-launch"
                    element={<QuickLaunchTokenPage />}
                />
                <Route
                    path="/token-management/my-tokens"
                    element={<MyTokensPage />}
                />
                <Route
                    path="/token-management/create"
                    element={<CreateTokenPage />}
                />
                <Route
                    path="/token-management/create-liquidity-pool"
                    element={<CreateLiquidityPoolPage />}
                />
                <Route
                    path="/token-management/multisender"
                    element={<TokenMultiSenderPage />}
                />
                <Route
                    path="/token-management/affiliate"
                    element={<AffiliateProgramPage />}
                />
                {/* Routes for submenu pages */}
                <Route
                    path="/token-management/market-id/create"
                    element={<CreateOpenBookMarketIDPage />}
                />
                <Route
                    path="/token-management/raydium/lp-v4/burn"
                    element={<BurnLPPoolPage />}
                />
                <Route
                    path="/token-management/raydium/lp-v4/withdraw"
                    element={<WithdrawLPPoolPage />}
                />
                <Route
                    path="/token-management/spl-token/revoke-freeze"
                    element={<RevokeFreezeAuthorityPage />}
                />
                <Route
                    path="/token-management/spl-token/revoke-mint"
                    element={<RevokeMintAuthorityPage />}
                />
                <Route
                    path="/token-management/spl-token/revoke-mutable"
                    element={<MakeTokenImmutablePage />}
                />
                <Route
                    path="/token-management/update"
                    element={<UpdateTokenMetaDataPage />}
                />
                <Route
                    path="/token-management/spl-token/mint"
                    element={<TokenMintPage />}
                />
                <Route
                    path="/token-management/spl-token/burn"
                    element={<TokenBurnPage />}
                />
                <Route
                    path="/token-management/account-holders"
                    element={<ManageTokenHoldersPage />}
                />
                <Route
                    path="/token-management/spl-token/freeze-account"
                    element={<FreezeAccountPage />}
                />
            </Routes>
        </Router>
    );
};

export default App;
