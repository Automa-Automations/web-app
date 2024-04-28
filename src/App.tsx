import Logo from "./assets/logo.svg"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from "./components";
import { Home, About, Pricing, LandingPage } from "./pages"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
