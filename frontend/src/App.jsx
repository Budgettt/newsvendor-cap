import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CreateAccountPage from "./pages/CreateAccountPage";
import GamePage from "./pages/GamePage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";

export const LOCALURL = `http://localhost:5001`; // Remove once hosted

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/createAccount" element={<CreateAccountPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
