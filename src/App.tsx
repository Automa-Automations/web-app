import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Layout from "./pages/Layout";
import Newsletter from "./pages/Newsletter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="newsletter" element={<Newsletter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
