import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AffiliateProgramPage from "./pages/token-management/AffiliateProgramPage"
import "./App.css"
import "./styles/index.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/token-management/affiliate" element={<AffiliateProgramPage />} />
      </Routes>
    </Router>
  )
}

export default App
